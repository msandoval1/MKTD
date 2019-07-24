const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.styles([
        'resources/edit.css',
        'resources/timeline.css'
    ], 'public/css/theme.css')