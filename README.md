# Codebase v.2.0 Beta-2

Codebase is a Sass, JavaScript, and Pug website component library.

(Also @include Normalize and @include Font Awesome.)

## Codebase itself is (in) the `codebase/` folder:

```
codebase/
  ├── css/
  ├── js/
  ├── pug/
  └── sass/
```

## Documentation:

[http://simonpadbury.github.io/Codebase/](http://simonpadbury.github.io/Codebase/)

## Features include:

### (1.) Two ways of using Codebase

(a.) [Simple setup](getting-started.html#getting-started-simple-setup): Simply use `codebase.css` and `codebase.js` in your HTML project. (jQuery not required.)

(b.) [Advanced setup](getting-started.html#getting-started-advanced-setup):

* The Codebase stylesheet has been built using [indented-syntax Sass](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html). You can use Sass to choose which parts of Codebase you need, to override the `!default` variables, and to include and extend any of the mixins.

* The Codebase docs have been developed using the [Pug](https://pugjs.org/api/getting-started.html) templating language. You can develop a static website in the same way, extending the `_codebase.pug` [starter template](getting-started.html#getting-started-codebase-with-pug), and following the [examples](examples.html). Alternatively you may use any other HTML templating language.

### (2.) The Codebase Stylesheets

Codebase styling is organised into [Basics](basics.html) and [Components](components.html) (analogous to [Atomic Design](http://atomicdesign.bradfrost.com/)'s "Atoms" and "Molecules").

The styles has been created first as Sass mixins and then these are included in classes &ndash; all following [BEM](http://getbem.com/introduction/) naming convention.

All [Codebase variables](codebase/sass/02_default-variables/_default-variables.sass) are set with `!default` values, so that they can be easily overridden. And if you `@import` the Codebase master Sass file `codebase.sass`, can (override and) utilize and the variables, and you can include and/or extend the mixins in your own project.

Find out more about [using Codebase with Sass](getting-started.html#getting-started-codebase-with-sass).

### (3.) The Codebase Scripts

A few things in Codebase (responsive tables, showhide, menu/menubar, dropdown, off-canvas, popovers and tabs) use some tiny JavaScripts. These are combined into one, `code codebase.js`.

Since v.2.0 Codebase has no need for jQuery. Of course, if you add more functionality with scripts or plugins that require jQuery, go for it. Same for any other library that you may wish to use.

### (4.) Flexbox Layout

Codebase [Layout](layout.html) consists of two (default) 12-column flexbox systems: [flexbox classes](layout.html#layout-flexbox-classes) and [mixins](layout.html#layout-flexbox-mixins).

A range of [invisibility](layout.html#layout-invisibility) mixins/classes have also been included.

### (5.) Decoration Utilities

Codebase components are as minimally styled as possible. This has been done so that there is not much that you would need to override in your CSS.

Some minimal decorative styling can be applied by adding a `.deco` class to each component individually where you wish to use it. And when you don't wish to use Codebase opinionated styling, in the Sass variables file you can toggle off the #[code .deco] classes. This will result in less unused CSS.

Codebase also has some simple [decoration utility classes](decoration.html) – which are similar in principle to [BASCSS](http://basscss.com/) and [Tachyons](http://tachyons.io/).

All margins, paddings, font sizes and line heights are built on a [4px element grid](decoration.html#decoration-element-grid), similar in principle to [Spec FM's 8-Point Grid](https://spec.fm/specifics/8-pt-grid).

Codebase decorative styling uses a common set of decoration variables – which you can easily override.

### (6.) Using Codebase with Pug

The Codebase CSS and JS files can be used with HTML directly, of course. Or you can use a templating language such as [PugJS](http://pugjs.org/).

The Codebase documentation has been developed using Pug. Pug snippets of Codebase components have been included through the docs. There are also further [examples](examples.html).

Find out more about [using Codebase with Pug](getting-started.html#getting-started-codebase-with-pug).

## Compatibility

Codebase is compatible with the following browsers (tested September 2017 on MacOS and iOS):

* Safari
* Firefox
* Chrome
* Edge
* Opera
* Brave
* Vivaldi (no iOS)

Responsive images within flexbox are messed up by IE11. Plus other flexbox problem in popovers. This Mac user would appreciate some help here. :-)

## MIT licence

Codebase is open source software, released under the [MIT licence](https://opensource.org/licenses/MIT). This means:

> "Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source."
> – [tl;drLegal](https://tldrlegal.com/license/mit-license")

## Change Log:

See [LOG.md](LOG.md)

---

My blog: [http://simonpadbury.github.io](http://simonpadbury.github.io)
