# Codebase Version Log

### v.1.1 - 5 August 2016

* Various minor bug fixes/ snagging following v.1.0 repo sync.
* **Removed the "CSS-only scroll-lock"**: it was preventing iOS Safari toolbars from hiding/minimizing while scrolling (because iOS Safari does this on body scroll, whereas the Codebase v.1.0 scroll lock scrolled the page inside of a `div.body--inner` instead of the body being allowed to scroll). But this now means that page scrolling can happen behind revealed modals and behind revealed off-canvas sidebars.
* Solved the problem of modals appearing behind the darkened reset-overlay on iOS Safari - by removing `position:relative` from the contaning grid and columns.
* Added a `-light` variant of the color swatch and `deco-` classes.
* **Overhauled Codebase jQuery scripts**: transformed the functions into plugins, and moved them out of the master `$(document).ready()` function (also now a plugin), so that developers can include them in their own theme/app script going forward.
* Abbreviating mixin names and class names):
  * `tiny, small, medium, large` has become `xs, sm, md, lg` (in grid systems and in decoration classes)
  * `breakpoint__` has become `break__`
  * `column` has become `col`
  * `button` has become `btn`
* Adding `col-` prefix to some grid system class names bring them into accord with BEM. E.g. `col col-sm--span-6` (was `column small--span-6`).
* Reflecting these changes in the docs.
* `margin-bottom` has been removed from form elements. Now you don't have to overrive it when you don't need it.


### v.1.0 - 27 July 2016

* Major improvement of all code to bring it (mostly) into accord with BEM naming principles (grid system not according to BEM).
* Added a few more components (e.g. modals, off-canvas sidebar).
* Improved consistency of styling by creating decoration variables and classes.
* Made a big start on the docs.

***

(Pre v.1 not recorded here.)
