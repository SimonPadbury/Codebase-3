# Codebase Version Log

### v.2.PREVIEW 2 -- 13 Feb 2017

* Removed `overflow-x: hidden` from the docs outermost wrapper (`.body__inner`) because on iOS Safari this was preventing everything that required the reset-overlay from being layered in front of the overlay.
* Added some form element styling to override iOS Safari search input to not have rounded corners.

### v.2.PREVIEW -- 11 Feb 2017

#### Major Changes between Codebase 1.x and 2.x

* Refactored all styles using indented-styntax SASS instead of SCSS, and made several changes (see below).
* Rebuilt and the Codebase jQuery scripts using CoffeeScript, and made some simplifications.
* Rebuilt and reorganized the documentation using Pug.
* Added a set of Pug mixins to Codebase as a rapid prototyping system (similar in principle to Brad Frost's Atomic Design). These Pugs are being used in the docs examples. Further implementation of this system will appear in the examples to follow.
* Begun adding a few examples.
* New logo for Codebase 2.

#### Style Changes between Codebase 1.x and 2.x

Several re-writes of components and basics, plus several additions, including:

* Combined all Codebase default variables into one file, `02_default-variables/_default-variables.scss`.
* Reorganized style patterns into "Basics" and "Components", and
* Made all class-builders as mixins, that can be included or not by a set of corresponding true/false setup variables.
* Introduced an **8px element grid** system. Rejigged line-heights, margins, paddings, gutters and other styles throughout to conform to this.
* Removed `_variable-overrides.scss` as this didn't really make Codebase default variables easier to override. Now that the default variables are combined into one document, it is easier for developers to make their own copy of this file, override its defaults, and import this into their theme before they import `codebase.sass`
* Re-built the button color mixins as UI `control-colors` and `control-colors--hover`, and relocated these to a new partial file. Now the control colors can also be used for things other than buttons (e.g. badges and labels).
* Rearranged the colors, so that UI control colors are no longer derived from the example swatch colors (but the other way round). So now, users can edit the swatch without affecting the control colors.
* Added more button options: buttons styled as links; three sizes of icon buttons; rounded buttons; large text version of medium button.
* Added badges and labels.
* Added **showhide**; and rebuilt dropdowns as a derivative of showhide (using some of the same mixins).
* Totally rebuilt navbars; now a derivative of menubars (using some of the same mixins).
* Added `menubar__justify` option.

### v.1.3.5 -- 5 Oct 2016

* Removed outer drop-shadow from buttons, so that form element/button combos look better together.

### v.1.3.4 -- 30 September 2016

* Bug fixes.

### v.1.3.3 -- 15 September 2016

* Bug fixes

### v.1.3.2 - 13 September 2016

* Bug fixes.

### v.1.3.1 - 10 September 2016

* Removed the `transform3d` movement/positioning from off-canvas sidebars and from popovers – because this was preventing Mac Safari **overflow scrolling** within popovers and sidebar layers. (But it was working OK for Firefox, Chrome, IE10, Edge, and iOS Safari).

### v.1.3 - 07 September 2016

* Removed the `.img--*` left and right align classes as redundant. Use the `.float--` COMPONEMT classes instead.
* Removed the lightbox and modal styles and scripts. Simply use popovers in future.
* Reverted to the simpler version of the dropdown COMPONEMT (v.1.1 that didn't use data-content="" and data-icon=""), because this was easier to integrate with the navbar.
* Removed `.img--align-*` because `.float--*` does the same thing.
* Added more deco box shadows (2x and 3x).
* Simplified the typography.
* Added `_variable-overrides.scss`.
* Various bug fixes.
* Totally redesigned the docs.

### v.1.2 - 26 August 2016

* Changed the default media query breakpoint widths to:
	*	 xs = 320px
	*	 sm = 640px
	*	 md = 960px
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
* Set the size of tabs labels using `$spacing-block`, so as to be to be the same size as menus and navbar elements – and so that the tabs on a "tabbed menubarbar" look consistent with the menubar block links.
* Various bug fixes.

### v.1.1 - 5 August 2016

* Various minor bug fixes/ snagging following v.1.0 repo sync.
* **Removed the "CSS-only scroll-lock"**: it was preventing iOS Safari toolbars from hiding/minimizing while scrolling (because iOS Safari does this on body scroll, whereas the Codebase v.1.0 scroll-lock scrolled the page inside of a `div.body--inner` instead of allowing body scroll). But this now means that page scrolling can happen behind revealed modals and behind revealed off-canvas sidebars.
* Solved the problem of modals appearing _behind_ the darkened reset-overlay on iOS Safari - by removing `position:relative` from the containing grid and columns.
* Added a `-light` variant of the color swatch and control classes.
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

Project pre version 1.0 not recorded here. Framework versions before 1.0 were named "Strata".
