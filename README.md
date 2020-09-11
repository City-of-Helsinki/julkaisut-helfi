# Development

## Setup VM

    # Clone the repository
    git clone https://github.com/generoi/julkaisut.git
    cd julkaisut

    # Install dependencies
    composer install

    # Build VM
    vagrant up

    # Install `blt` alias
    ./vendor/bin/blt blt:init:shell-alias

## Platform.sh

    # 1. Install CLI
    curl -sS https://platform.sh/cli/installer | php

    # 2. Add SSH key to platform.sh

    # 3. Set Platform.sh as a remote so you can push code to Platform.sh
    platform project:set-remote wgohfxclopgum

    # 4. Generate drush aliases
    platform drush-aliases -r

## Deploy

    # Export configuration (commit it)
    drush @self.vagrant config:export

    # Build & deploy
    blt build:artifact

### Migration

    # Database
    drush @self.vagrant sql:dump --result-file="/var/www/drupalvm/dump.sql"
    platform sql -e master-build < dump.sql

    # Uploads
    platform mount:upload --mount web/sites/default/files --source ./web/sites/default/files -e master-build
