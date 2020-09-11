#!/bin/bash
#
# This script configures the default Apache Solr search core to use one of the
# Drupal Solr module's configurations. This shell script presumes you have
# `solr` in the `installed_extras`, and is currently set up for the D8 versions
# of Apache Solr Search or Search API Solr.

SOLR_CORE_NAME="mainindex"
SOLR_SETUP_COMPLETE_FILE="/etc/drupal_vm_solr_config_complete_$SOLR_CORE_NAME"

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
SOLR_CONFIG="$DIR/../solr_8.x_config.zip"
SOLR_TMP_DIR="/tmp/solr-conf"

# Check to see if we've already performed this setup.
if [ ! -e "$SOLR_SETUP_COMPLETE_FILE" ]; then
  unzip $SOLR_CONFIG -d $SOLR_TMP_DIR
  # Copy new Solr collection core with the Solr configuration provided by module.
  sudo su - solr -c "/opt/solr/bin/solr create -c $SOLR_CORE_NAME -d $SOLR_TMP_DIR/"

  # Restart Apache Solr.
  sudo service solr restart

  # Create a file to indicate this script has already run.
  sudo touch $SOLR_SETUP_COMPLETE_FILE
else
  exit 0
fi
