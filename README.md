# Development

## Deploy

    blt build:artifact

## Setup VM

    composer install
    vagrant up

## Platform.sh

    # 1. Install CLI
    curl -sS https://platform.sh/cli/installer | php

    # 2. Add SSH key to platform.sh

    # 3. Set Platform.sh as a remote so you can push code to Platform.sh
    platform project:set-remote wgohfxclopgum
