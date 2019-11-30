---
title: "Getting Started"
next: "Basics"
nextLink: "/2-basics/basics.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#simple-setup">Simple Setup</a></li>
    <li class="menu-item"><a href="#the-codebase-scss-library">The Codebase SCSS Library</a></li>
    <li class="menu-item"><a href="#media-query-breakpoint-widths">Media-Query Breakpoint Widths</a></li>
    <li class="menu-item"><a href="#default-colors">Default Colors</a></li>
    <li class="menu-item"><a href="#light-and-dark-themes">Light and Dark Themes</a></li>
    <li class="menu-item"><a href="#the-codebase-static-website-generator">The Codebase Static Website Generator</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase is a modern website component library. You can use it as a basis for your website design projects. You can just use Codebase CSS and JS as-is, or you can reconfigure the SCSS variables and include only the parts you need.</p>

## Simple Setup

1. Add [codebase.css](../css/codebase.css) and [codebase.js](../js/codebase.js) to your project.

2. Create your first HTML page – e.g. using the starter example below.

  ```HTML
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Your Webpage Title</title>
      <link rel="stylesheet" href="path/to/codebase/css/codebase.css">
      <link rel="stylesheet" href="path/to/your-theme/css/your-styles.css">
    </head>
    <body>

      <h1>Get to work</h1>

      <script src="path/to/codebase/js/codebase.js"></script>
      <script src="path/to/your-theme/js/your-scripts.js"></script>
    </body>
  </html>
  ```

3. Build your HTML web page prototype(s) following the examples in these docs.

4. Personalize with your own stylesheet, scripts and graphics.

Alternatively, the Codebase SCSS files and JS can be added to any website  development project.

<div class="bg-theme-2 mb-3e p-2e">The Codebase documentation is an example of Codebase in use.</div>

### Styles

The Codebase stylesheet `codebase.css` has been composed using SCSS. Its styles were built first as mixins and then these have been included in the Codebase classes.

Codebase styles can therefore be used as-is, simply by using the Codebase classes in your website HTML (or a templating language such as Nunjucks or Pug). Alternatively, you can include Codebase mixins into your own SCSS.

### JavaScript

A few components in Codebase also use a simple, tiny JavaScript `codebase.js` to make them work – such as dropdowns, modals, tabs and responsive tables.

Since version 2.0, Codebase scripts have been re-factored so as not to need a dependency (e.g. jQuery is not required).

## The Codebase SCSS Library

Codebase is, primarily, a highly versatile Sass (SCSS syntax) library, built using variables and mixins.

You can import the Codebase SCSS master file directly into your project SCSS master file, and then all the Codebase variables and mixins will be available for you to use.

```SCSS
@import "path/to/codebase.scss"
```

### Using and Overriding Codebase Default Variables

All Codebase variables have the `!default` flag. To override any of these, you must _first_ declare your own overrides using the same Codebase variable names (but with your preferred values), and then import Codebase.

Example:

```SCSS
// (1.) Override Codebase `!default` variables
$color-primary: #000099;

// (2.) Import Codebase
@import "path/to/codebase/scss/codebase.scss";

// (3.) Set your project styles after importing Codebase
body {
  // This will now get your override for $color-primary,
  // not the `!default` blue in Codebase
  background: $color-primary;
}

/* (4.) Your intended output */
body {
  background: #000099;
}
```

<div class="mb-3e p-2e bg-theme-2"><strong>Tip:</strong> You can copy the entire Codebase default variables file <code class="b-thin">codebase/scss/00_default-variables/_default-variables.scss</code> into your theme, then remove all the <code>!default</code> flags in your version, and set your chosen variable values there.</div>

### Using Codebase Mixins

In Codebase most* of the styles have been built first as mixins. And then these have been included in the Codebase CSS classes.

(* i.e. all styles that use CSS classes plus some of the basic styles that apply to HTML tags.)

At the end of the Codebase variables file, you will find a set of `$include-css-*` variables. These refer to the Codebase **CSS class builder** mixins.

```SCSS
// Basics
$include-css-color-dark-theme:       false !default;
$include-css-color-ui:               true !default;
$include-css-big-typography:         true !default;

// Layout
$include-css-container:              true !default;
$include-css-flexbox:                 true !default;
$include-css-grid:                   true !default;
$include-css-layout-utilities:       true !default;

// Components
$include-css-buttons:                true !default;
$include-css-badges:                 true !default;
$include-css-labels:                 true !default;
$include-css-cards:                  true !default;
$include-css-dropdowns:              true !default;
$include-css-menus:                  true !default;
$include-css-megamenu:               true !default;
$include-css-offcanvas:              true !default;
$include-css-modals:                 true !default;
$include-css-showhide:               true !default;
$include-css-tables:                 true !default;

// Utilities
$include-css-utilities:              true !default;
```

Example of a Codebase CSS class builder:

```SCSS
@if $include-css-cards == true {
  @include component-card;
}
```

You can:

* Choose whether or not to dis-include all these classes by toggling their `true/false` `$include-` variables (i.e. by overriding them within your own variables with the value `false`). You will generate a smaller CSS output if you use these toggles to remove whatever you’ll never use.
* Include individual Codebase mixins in your own classes (applying them to your own choice of class names). This may be useful if you are combining various frameworks and you need to have components etc. differently namespaced to avoid clashes.
* Introduce another media query breakpoint, and then `@include` Codebase mixins therein.

## Media-Query Breakpoint Widths

In Codebase the media query breakpoint width variables are:

```SCSS
// (Small is up to 767px)

// Medium
$mq-md: 768px !default;

// Large
$mq-lg: 1024px !default;
```

Also note: the largest [container](../3-layout/containers.html) class has `max-width: 1280px`.

These media query widths are intended to cover a wide range of screen devices, approximating as follows:

<table class="table table-borderless table-compact table-nowrap my-6e">
  <thead>
    <tr>
      <th class="br-thin center" colspan="2">Small Viewports</th>
      <th class="br-thin center" colspan="2">Medium Viewports (md)</th>
      <th class="center" colspan="2">Large Viewports (lg)</th>
    </tr>
    <tr>
      <th class="left"><span class="small">0</span></th>
      <th class="right br-thin"><span class="small">767px</span></th>
      <th class="left"><span class="small">768px</span></th>
      <th class="right br-thin"><span class="small">1023px</span></th>
      <th class="left"><span class="small">1024px</span></th>
      <th class="right"><span class="small">max. 1280px</span></th>
    </tr>
  </thead>
  <tbody class="bt-thin">
    <tr>
      <td class="br-thin center" colspan="2"><i class="fas fa-arrow-left"></i> phones (portrait) <i class="fas fa-arrow-right"></i></td>
      <td class="br-thin center" colspan="2"><i class="fas fa-arrow-left"></i> phones (landscape) <i class="fas fa-arrow-right"></i> <br> <i class="fas fa-arrow-left"></i> tablets (portrait) <i class="fas fa-arrow-right"></i></td>
      <td class="center" colspan="2"><i class="fas fa-arrow-left"></i> tablets (landscape) & up <i class="fas fa-arrow-right"></i></td>
    </tr>
  </tbody>
</table>

The media query breakpoint variables been utilized in a set of SCSS mixins as follows:

```SCSS
@mixin break-min($mq-min-width) {
  @media(min-width: $mq-min-width) {
    @content;
  }
}

@mixin break-max($mq-max-width) {
  @media(max-width: $mq-max-width - 1px) {
    @content;
  }
}

@mixin break-minmax($mq-min-width, $mq-max-width) {
  @media(min-width: $mq-min-width) and (max-width: $mq-max-width - 1px) {
    @content;
  }
}
```

These mixins are then called as in the following examples:

```SCSS
// For styling only intended for small viewports
@include break-max($mq-md) {
  ...
}

// For styling only intended for medium viewports
@include break-minmax($mq-md, $mq-ld) {
  ...
}

// For styling only intended for large viewports
@include break-min($mq-lg) {
  ...
}
```

## Default Colors

Codebase’s default variable file `codebase/scss/01_basics/__default-variables.scss` contains ten color swatches are that are used for the five Codebase UI colors (i.e. <span class="label primary">primary</span>, <span class="label secondary">secondary</span>, <span class="label success">success</span>, <span class="label warning">warning</span>, and <span class="label danger">danger</span>) – so that each gets a two colors, for light mode and dark mode.

```SCSS
$color-primary:              #2680eb !default;
$color-primary-dark:         lighten($color-primary, 5%) !default;

$color-secondary:            #33cdf7 !default;
$color-secondary-dark:       lighten($color-secondary, 5%) !default;

$color-success:              #6bd130 !default;
$color-success-dark:         lighten($color-success, 5%) !default;

$color-warning:              #f7c736 !default;
$color-warning-dark:         lighten($color-warning, 5%) !default;

$color-danger:               #ff4f23 !default;
$color-danger-dark:          lighten($color-danger, 5%) !default;
```

<div class="flexbox mb-1e">
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="primary p-3e">&nbsp;</div>
    <div class="m-1e center">primary</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="secondary p-3e">&nbsp;</div>
    <div class="m-1e center">secondary</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="success p-3e">&nbsp;</div>
    <div class="m-1e center">success</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="warning p-3e">&nbsp;</div>
    <div class="m-1e center">warning</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width:116px">
    <div class="danger p-3e">&nbsp;</div>
    <div class="m-1e center">danger</div>
  </div>
</div>

The primary color is also used for the default <a>hyperlink</a> color.

These Codebase UI colors have been chosen so that with these set as background colors (for buttons, badges, labels etc.), text on these elements can can be colored white and it will be readable – in both light and dark modes.

In addition, several shades of gray have been set as default variables for Codebase typography, line details for components and form elements, and as a default color for buttons, badges and labels. These grays cover both [light and dark themes](#light-and-dark-themes).

<div class="flexbox mb-3e">
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-1 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-1</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-2 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-2</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-3 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-3</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-4 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-4</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-5 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-5</div>
  </div>
</div>

<div class="bg-theme-2 mb-3e p-2e">
  For dark mode, default Codebase UI colors are slightly darker, whereas theme colors (grayscale) are inverted in order.
</div>

Codebase default theme colors have been deployed as follows:

<table class="table">
<thead>
<tr>
<th>Theme Color</th>
<th>Color Usage (default)</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>theme-1</code></td>
<td><code>&lt;body&gt;</code> background; text on badges, buttons and labels</td>
</tr>
<tr>
<td><code>theme-2</code></td>
<td>Fine lines (e.g. horizontal rules, table cell borders)</td>
</tr>
<tr>
<td><code>theme-3</code></td>
<td>Background color of badges, buttons and labels</td>
</tr>
<tr>
<td><code>theme-4</code></td>
<td>Most text</td>
</tr>
<tr>
<td><code>theme-5</code></td>
<td>Headings</td>
</tr>
</tbody>
</table>

### Color CSS Classes

Codebase UI colors can be deployed by CSS classes of the same name: `.primary`, `.secondary`, `.success`, `.warning` and `.danger`. Use these classes to color your badges, buttons, labels, etc.

Codebase also has utility classes for using these same colors for any element’s background, border, and/or text. The five theme colors (grayscale) also have utility classes for background, border, and text.

See [color utilities](../4-utilities/utilities.html#color-utilities) for more information.

### Overriding Codebase Default Colors

#### (1.) Overriding Global Default Color Variables

All Codebase default color variables can be overridden globally – [the Codebase SCSS library](#the-codebase-scss-library) explains how.

#### (2.) Overriding Local Color Mixins

Every time a color (for text, background or border) has been assigned within Codebase, this has been implemented using one of the SCSS mixins in `codebase/scss/01_basics/__color-mixins`:

```SCSS
// Text
@mixin t-color($light, $dark) {
  color: $light;

  @if $include-css-color-dark-theme == true {
    .dark & {
      color: $dark;
    }
  }
}

// Background
@mixin bg-color($light, $dark) {
  background: $light;

  @if $include-css-color-dark-theme == true {
    .dark & {
      background: $dark;
    }
  }
}

// Border
@mixin b-color($light, $dark) {
  border-color: $light;

  @if $include-css-color-dark-theme == true {
    .dark & {
      border-color: $dark;
    }
  }
}
```

After your `@import` of `codebase.scss`, you can use these same mixins in your project. You can use these mixins on your own CSS classes for any element, including overriding Codebase’s own use of these color mixins.

For example, consider changing the default button `.btn` color. You can _reuse_ the `@include` for one or other of these mixins, swapping in your chosen color. The output of your use of this mixin will end up in your outputted CSS instead of that from Codebase – so, no CSS bloat.

```SCSS
// After you @import Codebase, set your own button colors
// for light mode and dark mode as below:

.btn {
  @include bg-color(magenta, darkmagenta);
}
```

(You can use color names, hex codes, RGB codes, or variables.)

See [the Codebase SCSS library](#the-codebase-scss-library).

## Light and Dark Themes

Since version 3.0, Codebase has simple built in light and dark CSS themes – to get you started.

While it is true that light and dark themes can be implemented entirely in CSS using a media query, as in this example...

```CSS
/* Default light theme */
...

/* Dark theme override */
@media (prefers-color-scheme: dark) {
  ...
}
```

...Codebase has a small JavaScript that enables _both the operating system and/or the the user_ to control light and dark modes.

### The Codebase Dark Mode Support JavaScript

The Codebase dark mode support script in `codebase.js` operates as follows:

#### (1.) Automatic Operation

The CSS media query `prefers-color-scheme` is used in the JS to determine the preferences in the operating system (via the browser).
* If it’s set to dark mode, then two things happen:<br>
  (a.) a <a href="https://javascript.info/localstorage#sessionstorage" target="_blank">sessionStorage</a> data item is given the value `dark`, and<br>
  (b.) the CSS class `.dark` is added to the webpage `<body>` tag. Now the `codebase.css` can apply `.dark` styles.
* If it’s set to light mode, then two things happen:<br>
  (a.) the `sessionStorage` data item is given the value `light`, and<br>
  (b.) the CSS class `.dark` is added to the webpage `<body>` tag.

<div class="bg-theme-2 mb-3e p-2e"><strong>Note:</strong> <code class="b-thin">codebase.css</code> actually has no <code class="b-thin">.light</code> classes – the light theme is the default theme (so, older browsers get the light theme by default). But the <code class="b-thin">.light</code> class has been provided so that you can use it in your design if you have a need for it.</div>

#### (2.) Optional Toggle Operation

The JS light/dark mode controller also has a toggler function that responds to clicks on any element with `id="theme-toggle"`. Every time this element is clicked, the controller toggles between `light` and `dark` (in both the `sessionStorage` and in the `<body>` tag).

### A Simple Example of a Theme Toggler

If you wish to add this toggler to your HTML and CSS, then here is the simplest example of what you need:

```HTML
<!-- HTML -->

<a id="theme-toggle">Theme</a>
```

```CSS
/* CSS */

#theme-toggle::before {
  content: 'Dark ';
}

body.dark #theme-toggle::before {
  content: 'Light ';
}
```

This simple example above is what is used in the Codebase docs. You’ve probably clicked the docs light/dark mode toggler a few times already.

### Don’t want dark mode?

Simply override this one variable to `false`:

```SCSS
$include-css-color-dark-theme: true !default;
```

See also [Using and Overriding Codebase Default Variables](#using-and-overriding-codebase-default-variables) for more information.

## The Codebase Static Website Generator

The Codebase CSS and JS has been built using its own [Gulp](https://gulpjs.com/)-based static website generator (SWG).

You can simply use `codebase.css` and `codebase.js` in your project. Or you can pick up the whole set of folders for `codebase/` and include them in your own project, for preprocessing the SCSS and concatenating the JS on whatever build system you like to use.

Or you could use the Codebase SWG – a set of [Node](https://nodejs.org/) modules (powered by Gulp) that handles all this and more:

* Preprosessing of [SCSS](https://sass-lang.com/) files into `codebase.css`
* Concatenation of component JS files into `codebase.js`
* Peprocessing of [Markdown](https://daringfireball.net/projects/markdown/) files into HTML
* Building the docs from the HTML (above) and some [Nunjucks](https://mozilla.github.io/nunjucks/) templates
* Passing of all these outputted files and a few more assets from to the build folder (here named `docs/`)
*  Setting up a virtual server for serving the docs to your internet browser;
* Monitoring for the running Gulp tasks and then reloading your browser.

### Using the Codebase SWG

1. You will first need to have [NodeJS](https://nodejs.org/) installed on your computer. Get the latest stable release.
2. Download or clone the entire [Codebase repository from GitHub](https://github.com/SimonPadbury/Codebase) to your computer.
3. In your computer’s **command line interface**, change directory (`cd`) into your local Codebase project.
4. Do `npm install --save-dev` to install all the node module dependencies (you should only need to do this the first time).
5. Finally, run `gulp`.

First time use:

```JS
$ cd [your Codebase project name]
$ npm install --save-dev
$ gulp
```

Ongoing use:

```JS
$ cd [your Codebase project name]
$ gulp
```
