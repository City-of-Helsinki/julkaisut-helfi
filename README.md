# Development

### Setup DDEV (Docker)

    # Clone the repository
    git clone https://github.com/generoi/julkaisut.git
    cd julkaisut

    # Install dependencies
    composer install

    # Launch container
    ddev start

    # Fetch the production database
    ./vendor/bin/drush -Dssh.tty=0 @site-aliases.julkaisut-hel-fi.master sql:dump > production.sql
    cat production.sql | ddev drush sql:cli

    open https://julkaisut.ddev.site

### Setup with druidfi makefile

_TODO: Haven't been able to test it since druidfi image doesn't support MacBook M1._

### Setup with Docker Compose

If on MacBook M1, set
`DRUPAL_IMAGE=ghcr.io/city-of-helsinki/drupal-docker-base:8.0` in `.env` and edit the `docker-compose.yml` with:

```diff
diff --git a/docker-compose.yml b/docker-compose.yml
index d3ff7a08..3c22d139 100644
--- a/docker-compose.yml
+++ b/docker-compose.yml
@@ -7,7 +7,8 @@ services:
     container_name: "${COMPOSE_PROJECT_NAME}-app"
     image: "${DRUPAL_IMAGE}"
     volumes:
-      - .:/app:delegated
+      - .:/var/www/html:delegated
       - ssh:/tmp/druid_ssh-agent:ro
+      - .:/var/www/html:delegated
       - ssh:/tmp/druid_ssh-agent:ro
     build:
       context: ./docker/local
@@ -17,6 +18,12 @@ services:
       # XDEBUG_ENABLE: "true"
       # DOCKERHOST: host.docker.internal
       REDIS_HOST: redis
+      DRUPAL_DB_NAME: drupal
+      DRUPAL_DB_USER: drupal
+      DRUPAL_DB_PASS: drupal
+      DRUPAL_DB_HOST: db
+      DRUPAL_DB_PORT: 3306
       SOLR_HOST: solr
       SOLR_PORT: 8983
       SOLR_PATH: "/"
```

Then proceed with

    # Clone the repository
    git clone https://github.com/generoi/julkaisut.git
    cd julkaisut

    # Install dependencies
    composer install

    docker-compose up

    ./vendor/bin/drush -Dssh.tty=0 @site-aliases.julkaisut-hel-fi.master sql:dump > production.sql
    cat production.sql | docker-compose exec -T -u root app bash -c "cd /var/www/html/public && drush sql:cli"
    docker-compose exec -T -u root app bash -c "cd /var/www/html/public && drush cr"

## Theme

    cd public/themes/custom/julkaisut

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
    ddev drush config:export

    # Deploy to platform
    git push platform master

    # Build & deploy to staging (arbitrary branch)
    git push platform staging


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
