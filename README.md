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

    # Fetch the production database
    drush -Dssh.tty=0 @site-aliases.wgohfxclopgum.master sql:dump > production.sql
    cat production.sql | drush @self.vagrant sql:cli

## Theme

    cd web/themes/custom/julkaisut

    # Install dependencies
    nvm use
    npm install

    # Build development assets
    npm run build

    # Build production assets
    npm run build:production

    # Watch while building development assets
    npm run start

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

    # Build & deploy to production
    blt build:artifact --branch="master"

    # Build & deploy to staging (arbitrary branch)
    blt build:artifact --branch="master-build"


### Migration

    # Database
    drush @self.vagrant sql:dump --result-file="/var/www/drupalvm/dump.sql"
    platform sql -e master-build < dump.sql

    # Uploads
    platform mount:upload --mount web/sites/default/files --source ./web/sites/default/files -e master-build

## Drush

    # Move local files to production environment
    drush -Dssh.tty=0 rsync web/sites/default/files/ @site-aliases.wgohfxclopgum.master:%files

    # Move staging environment files locally
    drush -Dssh.tty=0 rsync @wgohfxclopgum.master-build:%files web/sites/default/files/

    # Move staging database to production
    drush -Dssh.tty=0 @wgohfxclopgum.master-build sql:dump > production.sql
    cat production.sql | drush -Dssh.tty=0 @site-aliases.wgohfxclopgum.master sql:cli
