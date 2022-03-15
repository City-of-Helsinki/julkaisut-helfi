FROM druidfi/drupal:8.0-web

# Configure nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Override default fpm pool conf to run nginx and php-fpm as same user.
COPY php-fpm-pool.conf /etc/php8/php-fpm.d/www.conf
