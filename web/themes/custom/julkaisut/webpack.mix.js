const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');
require('laravel-mix-copy-watched');

mix
  .setPublicPath('./dist')
  .browserSync('julkaisut.test'); // @todo

mix.sass('assets/styles/app.scss', 'styles')
  .sass('assets/styles/editor.scss', 'styles');

mix.js('assets/scripts/app.js', 'scripts')
  .blocks('assets/scripts/editor.js', 'scripts')
  .extract();

mix.copyWatched('assets/images', 'dist/images', {base: 'assets/images'})
  .copyWatched('assets/fonts', 'dist/fonts', {base: 'assets/fonts'})

mix.autoload({
  jquery: ['$', 'window.jQuery'],
});

mix.options({
  processCssUrls: false,
  postCss: [
    require('postcss-custom-properties')({preserve: true}),
    // @see https://github.com/JeffreyWay/laravel-mix/issues/1606#issuecomment-551457071
    require('autoprefixer')({grid: 'autoplace'}),
  ],
  // Causes the follow invalid optimization:
  //   calc(50% - (50vw - ((100vw - 42.125rem) / 2) * .2) + 10px)
  //   calc(50% - 50vw - (100vw - 42.125rem) / 2 * 0.2 + 10px)
  cssNano: {calc: false}
});

mix.sourceMaps(false, 'source-map')
   .version();
