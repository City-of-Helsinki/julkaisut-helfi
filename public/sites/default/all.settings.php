<?php

/**
 * @file
 * Contains site specific overrides.
 */

if (
  ($solr_host = getenv('SOLR_HOST')) &&
  ($solr_port = getenv('SOLR_PORT')) &&
  ($solr_path = getenv('SOLR_PATH')) &&
  ($solr_core = getenv('SOLR_CORE'))
) {
  $config['search_api.server.julkaisut']['backend_config']['connector_config'] = [
    'host' => $solr_host,
    'port' => $solr_port,
    'path' => $solr_path,
    'core' => $solr_core
  ];
}

$settings['http_client_config']['timeout'] = 60;
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];

$additionalEnvVars = [
  'DRUPAL_VARNISH_HOST',
  'DRUPAL_VARNISH_PORT',
  'PROJECT_NAME',
  'REDIS_HOST',
  'REDIS_PORT',
  'REDIS_PASSWORD',
  'SOLR_HOST',
  'SOLR_PORT',
  'SOLR_PATH',
  'SOLR_CORE',
];
foreach ($additionalEnvVars as $var) {
  $preflight_checks['environmentVariables'][] = $var;
}
