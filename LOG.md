# Codebase Version Log

### v3.0.1 – 7 Dec 2019

* Minor bugfix.
* Docs improvements.

### v3.0 — 30 Nov 2019

* Total rebuild of everything.
* Simplification and big fixed throughout.
* Now Normalize is not required.
* Now only two media query breakpoint widths: md = 768px and lg = 1024px.
* BEM-style double hyphens and double underscores have been removed from mixin and class names in SCSS (and CSS), all replaced with single hyphens.
* CSS grid instead of a flexbox grid system.
* Tabs removed because seldom used.
* New megamenu (instead of a combination menu +  flexbox + dropdowns, although that’s also still doable).
* Now with its own build tool — a Gulp-based static website generator (was formerly using Codekit). Docs using Markdown instead of Pug. Templating using Nunjucks instead of Pug.

### v2.0 — 4 July 2018

* Normalize 7.0.0 is now actually onboard (and transformed into a SCSS file), instead of being an @import from a CDN.
* Updated to Font Awesome 5.1 – linked via Font Awesome’s own CDN.
* Removed Font Awesome (pseudo-element) styled radioboxes and checkboxes.
* In the docs, placeholders are no longer provided by `holder.js` (by HolderJS.com) but via an SVG file in a Pug mixin.
* Improved and simplified the color variables in UI elements (e.g. buttons) and decoration utility classes by using SCSS maps.
* Improved the use of the element grid in throughout Codebase by simply adhering to multiples of 4px in the spacing, line-heights etc. wherever possible (instead of wasting time using a bunch of variables for element grid spacing units).
* Removed the `.text--` prefix from all text utility classes (including text colors).
* Renamed `.btn.btn--big-text` as `.btn.big`.
* Many minor bug fixes and improvements.

### v.2.0 Beta-3 – 4 Nov 2017

* Minor bug fixes and improvements.

### v.2.0 Beta 2 – 16 Sep 2017

* Removed `pointer-events` in the popover, and added a CSS delay in the dismissal of the popover (now OK in Opera Mini, older IE).
* Removed specific rounded-corner decoration utility classes.
* Fixed the Docs secondary sidebar for Opera Mini.
* Several minor bug fixes and improvements.

### v.2.0 BETA – 7 Sep 2017

* Since v.2.0 both third-party stylesheets (Normalize and Font Awesome, from [https://cdnjs.com/](https://cdnjs.com/)) are incorporated directly into `codebase.css` itself _during pre-processing_ of the Codebase SCSS files. Now all you need is Codebase plus your own styles.
* Since v.2.0 Codebase uses **JavaScript only** (no need for jQuery).
* The JavaScripts for showhide, menubar, dropdown, popover, and off-canvas sidebar have been combined into one: `activator.js`. This because their functionality is mostly the same, based on adding and removing `.is-active` classes.
* Showhide and (collapsed) menubar now use CSS animation for sliding, instead of JavaScript `slideDown()` etc.
* The reset overlay has been retired, as I have found a JS-only way of handling "click outside to dismiss".
* Deleted the simple slideshow component because highly unlikely to be used.
* Deleted the menu marker ("scroll spy") because (a.) it didn't allow for tabs, and (b.) not frequently used.
* Redesigned the docs and expanded their content.
* Improved the layout system and completely removed the _float_ grid-system. It is no longer present as an option. Thus no longer supporting IE9 down.
* Renamed the flexbox layout system so that it doesn't mention "grid" -- to avoid confusion with the new CSS Grid.
* Hundreds of minor tweeks and improvements.

### v.2.0 PREVIEW 2 – 13 Feb 2017

* Removed `overflow-x: hidden` from the docs outermost container (`.body__inner`) because on iOS Safari this was preventing everything that required the reset-overlay from being layered in front of the overlay.
* Added some form element styling to override iOS Safari search input to control its styling.

### v.2.0 PREVIEW – 11 Feb 2017

#### Major Changes between Codebase 1.x and 2.x

* Refactored all styles to using indented-styntax SCSS instead of SCSS, and made several changes (see below).
* Rebuilt and the Codebase jQuery scripts using JavaScript, and made some simplifications.
* Rebuilt and reorganized the documentation using Pug.
* Added a set of Pug mixins to Codebase as a rapid prototyping system (similar in principle to Brad Frost"s Atomic Design). These Pugs are being used in the docs examples. Further implementation of this system will appear in the examples to follow.
* Begun adding a few examples.
* New logo for Codebase 2.

#### Style Changes between Codebase 1.x and 2.x

Several re-writes of components and basics, plus several additions, including:

* Combined all Codebase default variables into one file, `02_default-variables/_default-variables.scss`.
* Reorganized style patterns into "Basics" and "Components", and
* Made all class-builders as mixins, that can be included or not by a set of corresponding true/false setup variables.
* Introduced an **8px element grid** system. Rejigged line-heights, margins, paddings, gaps and other styles throughout to conform to this.
* Removed `_variable-overrides.scss` as this didn"t really make Codebase default variables easier to override. Now that the default variables are combined into one document, it is easier for developers to make their own copy of this file, override its defaults, and import this into their theme before they import `codebase.scss`
* Re-built the button color mixins as UI `control-colors` and `control-colors--hover`, and relocated these to a new partial file. Now the control colors can also be used for things other than buttons (e.g. badges and labels).
* Rearranged the colors, so that UI control colors are no longer derived from the example swatch colors (but the other way round). So now, users can edit the swatch without affecting the control colors.
* Added more button options: buttons styled as links; three sizes of icon buttons; rounded buttons; large text version of medium button.
* Added badges and labels.
* Added **showhide**; and rebuilt dropdowns as a derivative of showhide (using some of the same mixins).
* Totally rebuilt navbars; now a derivative of menubars (using some of the same mixins).
* Added `menubar__justify` option.

### v.1.3.5 – 5 Oct 2016

* Removed outer drop-shadow from buttons, so that form element/button combos look better together.

### v.1.3.4 – 30 September 2016

* Bug fixes.

### v.1.3.3 – 15 September 2016

* Bug fixes

### v.1.3.2 – 13 September 2016

* Bug fixes.

### v.1.3.1 – 10 September 2016

* Removed the `transform3d` movement/positioning from off-canvas sidebars and from popovers – because this was preventing Mac Safari **overflow scrolling** within popovers and sidebar layers. (But it was working OK for Firefox, Chrome, IE10, Edge, and iOS Safari).

### v.1.3 – 07 September 2016

* Removed the `.img--*` left and right align classes as redundant. Use the `.float--` COMPONENT classes instead.
* Removed the lightbox and modal styles and scripts. Simply use popovers in future.
* Reverted to the simpler version of the dropdown COMPONEMT (v.1.1 that didn’t use data-content="" and data-icon=""), because this was easier to integrate with the navbar.
* Removed `.img--align-*` because `.float--*` does the same thing.
* Added more deco box shadows (2x and 3x).
* Simplified the typography.
* Added `_variable-overrides.scss`.
* Various bug fixes.
* Totally redesigned the docs.

### v.1.2 – 26 August 2016

* Changed the default media query breakpoint widths to:
	*	 xs = 568px
	*	 sm = 768px
	*	 md = 1024px
	*	 lg = 1280px
* Changed the swatch secondary color to teal (was gray). Now the grayscale and the secondary color do not overlap.
* Added a horizontal version of the menu component, and also named it as `menubar`. Therefore the collapsing menubar component has been renamed as `navbar`.
* Split the Codebase JS into partials.
* Improved the usefulness of the Codebase docs by implementing tabs into which the actual SCSS and JS (jQuery) partials are loaded.
* Moved the visibility (show/hide) mixins and classes from components to Layout. And rebuilt mixins and classes.
* Using the [Prism](http://prismjs.com/) syntax highlighter in the Codebase docs.
* Updated the base font stack.
* Added a simple slideshow component.
* Improved the `modal` (now also named as `popover` and `lightbox`, for more versatility). Designers can style these differently from each other.
* Smaller line-height for h1-h4 base typography.
* Set the size of tabs labels using `$spacing--block`, so as to be to be the same size as menus and navbar elements – and so that the tabs on a "tabbed menubarbar" look consistent with the menubar block links.
* Various bug fixes.

### v.1.1 - 5 August 2016

* Various minor bug fixes/ snagging following v.1.0 repo sync.
* **Removed the "CSS-only scroll-lock"**: it was preventing iOS Safari toolbars from hiding/minimizing while scrolling (because iOS Safari does this on body scroll, whereas the Codebase v.1.0 scroll-lock scrolled the page inside of a `div.body--inner` instead of allowing body scroll). But this now means that page scrolling can happen behind revealed modals and behind revealed off-canvas sidebars.
* Solved the problem of modals appearing _behind_ the darkened reset-overlay on iOS Safari - by removing `position:relative` from the containing flexbox and columns.
* Added a `-light` variant of the color swatch and control classes.
* **Overhauled Codebase jQuery scripts**: transformed the functions into plugins, and moved them out of the master `$(document).ready()` function (also now a plugin), so that developers can include them in their own theme/app script going forward.
* Abbreviating mixin names and class names):
  * `tiny, small, medium, large` has become `xs, sm, md, lg` (in flexbox systems and in decoration utility classes)
  * `breakpoint__` has become `break__`
  * `column` has become `col`
  * `button` has become `btn`
* Adding `col-` prefix to some flexbox system class names bring them into accord with BEM. E.g. `col col-sm--span-6` (was `column small--span-6`).
* Reflecting these changes in the docs.
* `margin-bottom` has been removed from form elements. Now you don"t have to overrive it when you don"t need it.

### v.1.0 - 27 July 2016

* Major improvement of all code to bring it (mostly) into accord with BEM naming principles (flexbox system not according to BEM).
* Added a few more components (e.g. modals, off-canvas sidebar).
* Improved consistency of styling by creating decoration variables and classes.
* Made a big start on the docs.

***

Project pre version 1.0 not recorded here. Framework versions before 1.0 were named "Strata".
