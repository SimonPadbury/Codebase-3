const 
  { watch, src, dest, series, parallel } = require('gulp'),
  browserSync = require('browser-sync').create(),
  babel = require('gulp-babel'),
  fs = require('fs'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  lec = require('gulp-line-ending-corrector');
  del = require('del'),
  postcss = require('gulp-postcss'),
  sass = require('gulp-sass'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  markdown = require('gulp-markdown'),
  frontMatter = require('gulp-front-matter'),
  data = require('gulp-data'),
  header = require('gulp-header'),
  footer = require('gulp-footer'),
  nunjucksRender = require('gulp-nunjucks-render');


const config = {
  app: {
    jsCodebase: [
      './app/codebase/js/codebase-theme-switcher.js',
      './app/codebase/js/codebase-megamenu.js',
      './app/codebase/js/codebase-toggler.js',
      './app/codebase/js/codebase-activator.js',
      './app/codebase/js/codebase-tables.js',
    ],
    jsOther: [
      './app/js/**/*.js',
    ],
    data: './app/data/',
    scss: [
      './app/codebase/scss/**/*.scss',
      './app/styles/**/*.scss',
    ],
    css: './app/styles/**/*.css',
    images: './app/img/*.*',
    markdown: './app/markdown/**/*.md',
    markdownTemplates: './app/layouts/',
    nunjucks: './app/*.njk',
    partials: './app/partials/*.njk', // for the watcher
    html: ['./app/**/*.html', '!./app/layouts/*.html']
  },
  dist: {
    base: './dist/',
    js: './dist/js/',
    css: './dist/css/',
    images: './dist/img/'
  }
}

// Task functions

function jsCodebaseTask() {
  return src(config.app.jsCodebase)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(concat('codebase.js')) // will be minified by uglify()
    .pipe(uglify())
    .pipe(lec())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.dist.js))
}

function jsOtherTask() {
  return src(config.app.jsOther)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.dist.js))
}

function scssTask() {
  return src(config.app.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // or 'expanded'
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.dist.css))
}

function cssTask() {
  return src(config.app.css)
    .pipe(dest(config.dist.css))
}

function imagesTask() {
  return src(config.app.images)
    .pipe(dest(config.dist.images))
}

function htmlTask() { // for tests and examples
  return src(config.app.html)
    .pipe(dest(config.dist.base))
}

function markdownNjkTask() {
  return src(config.app.markdown)
    .pipe(data(function(file) {
      return JSON.parse(fs.readFileSync(config.app.data + 'metadata.json'));
    }))
    .pipe(frontMatter())
    .pipe(data(function(file) {
      return file.frontMatter;
    }))
    .pipe(markdown())
    .pipe(header(fs.readFileSync(config.app.markdownTemplates + '_alpha.html', 'utf8')))
    .pipe(footer(fs.readFileSync(config.app.markdownTemplates + '_omega.html', 'utf8')))
    .pipe(nunjucksRender( {
      path: ['./app/partials']
    }))
    .pipe(dest(config.dist.base))
}

function nunjucksTask() {
    return src(config.app.nunjucks)
      .pipe(data(function() {
        return JSON.parse(fs.readFileSync(config.app.data + 'metadata.json'));
      }))
      .pipe(nunjucksRender( {
        path: ['./app/partials']
      }))
      .pipe(dest(config.dist.base))
}

// Browser Sync

function liveReload(done) {
  browserSync.init({
    server: {
      baseDir: config.dist.base
    },
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

// Pre-build `docs/` delete (cleanup)

function cleanup() {
  return del([config.dist.base]);
}

// Watchers

function watchFiles() {
  //watch(config.app.js, series(jsTask, reload));
  watch(config.app.jsCodebase, series(jsCodebaseTask, reload));
  watch(config.app.jsOther, series(jsOtherTask, reload));
  watch(config.app.scss, series(scssTask, reload));
  watch(config.app.css, series(cssTask, reload));
  watch(config.app.images, series(imagesTask, reload));
  watch(config.app.html, series(htmlTask, reload));
  watch(config.app.markdown, series(markdownNjkTask, reload));
  watch(config.app.markdownTemplates, series(markdownNjkTask, reload));
  watch(config.app.nunjucks, series(nunjucksTask, reload));
  watch(config.app.partials, series(markdownNjkTask, reload));
  watch(config.app.partials, series(nunjucksTask, reload));
};

// $ gulp
exports.default = series(cleanup, jsCodebaseTask, jsOtherTask, cssTask, scssTask, imagesTask, htmlTask, markdownNjkTask, nunjucksTask, parallel(liveReload, watchFiles));