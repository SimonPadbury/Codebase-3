# Codebase To-dos

**Building up from v.0.7 to v.1.0**

* [√] ADDITIONS to the DECO margins, borders and paddings. Copy from the corrections done in Reinnervate_9.

CLASS FINALIZATION:

Done so far:

```
.your-grid-wrapper-class {
  @include grid;
  @include grid--gutter;
}

.your-article-col-class {
  @include col-semantic;
  @include break__md--up {
    @include col--span(8);
  }
  @include break__lg--up {
    @include col--push(4);
  }
}

.your-sidebar-col-class {
  @include col-semantic;
  @include break__md--up {
    @include col--span(4);
  }
  @include break__lg--up {
    @include col--pull(8);
  }
}

.your-nested-grid-wrapper-class {
  @include grid;
  @include grid--gutter;
  @include grid--nested;
  > div {
    @include col-semantic;
    @include break__sm--up {
      @include col--span(4);
    }
  }
}

.your-centered-col-class {
  @include col-semantic;
  @include break__sm--up {
    @include col--centered(7);
  }
}
```

Utilities:

* Basics
* Buttons
* Combo
* Drompown
* Forms
* Reset-overlay
* Typography
* Visibility

Components [8/8]:

* menus
* pagination
* media-objects
* modals
* tables
* tabs
* off-canvas col
* menubar

... Then testdrive.

---

• Block--modifiers can be clustered in CSS (reminding that they can be chained in one HTML tag).

• Ensure that block__elements are separately handled, for ease of collaboration and understanding (elements can't be chained in one HTML tag, they are discrete entities).

---

## Pull Styling out of the 'Theme'

**Stage 1:** Remove any merely decorative styling out of the mixins.

**Stage 2:** @include deco-* mixins within the CLASS-BUILDERS (only where really necessary).

* [ ] base
* [~√] classless - typography
* [~√] classless - forms
* [~~] utilities basics
* [~~] utilities breakpoints
* [~~] utilities reset-overlay
* [~~] utilities visibility
* [~~] utilities typography
* [~~] utilities images
* [~~] utilities forms
* [~~] utilities combo
* [~~] utilities dropdown
* [~~] grid base
* [~~] grid classic
* [~~] grid flexbox
* [~~] grid semantic

**Still to do:**

* [√] utilities buttons
* [√] utilities dropdowns
* [√] components media
* [√] components menu
* [√] components menubar
* [√] components pagination
* [√] components tabs
* [√] components tables
* [√] components modals
* [√] components off-canvas
* [_] ANY OTHER...?

---

> Need a "scroll lock" for both off-canvas sidebar AND modals

---

> Can the off-canvas sidebar recieve different styling, e.g. `@include *-block;` and coloration for MQ `show--xs-only`? Then try to make it charcoal block-links with border-top and brighten to `$deco-bg-dark-gray` on hover.

---

**IDEA:** IMPROVE THE BUTTONS. Colors. pressable `:active` shadows? or 1px movement?

---

> TEST DRIVE DIFFERENT BROWSERS ... IE!

---

### Snagging/further development before v.1.0:

```
CHECK THAT **ALL** MIXINS ARE DISTINCTLY CALLED BY DISTINCT CLASSES. (SEE NEW NOTES IN MODAL SCSS.)

Slecht:
							// CLASS BUILDER:
@mixin modal {			.modal {
	&--inner {}				@include modal;
	&--header {}			}
	&--etc {}
	...
}

Goed:

@mixin modal {}
@mixin modal--inner {}
@mixin modal--header {}
...etc

// CLASS BUILDER:
.modal {
	&--inner {}
	&--header {}
	&--etc {}
	...
}

```

* [_] Put more thought into **Base Styles**. These should apply to HTML tags without classes, improving upon **Normalize**. Does there need to be a `base-styles.scss`? **There should be no MIXINS in BASE.**
* [√] Move some of the base-variables and base-mixins to `utilities`?
* [√] IMAGES - look for a more recent LOCAL STRATA because maybe I improved on the GitHub version.
* [√] CENTERED menubar
* [_] b-card-detail ==> TABS?
* [√] Strange class in JS ('-js-open')
* [√] Correct the margin-bottom within menubar
* [√] Clickable parent link on menubar dropdowns IF the dropdown is open.
* [_] Verify that the Starter Theme has **no extra styling** as much as possible (except in GRID).
* [_] BEMify pagination .prev / .next
* [√] Menubar dropdown carets
* [√] Logical order for DOCS components
* [_] Testdrive on different browsers
* [_] Testdrive on sm screens
* [_] Testdrive on iPad and iPod
* [_] Hideable nav/icon bar e.g. Honkiat


---

## Additional Work 

* [√] improve the grids, by gathering the repeated mixins into a single file `_layout-grid-base.scss`

* [√] Move the "Classic" grid SCSS to THEME.

* [_] Identify which base components, layout components, or module components require jQuery. Separate out these jQuery scripts into their own files, to be included or not as required. {How? Can jQuery be concatenated without a pre-processor?}

* [√] Touch version of Menubar dropdowns

* [√] Touch version of Button dropdowns

* [X] Tooltip? NO - tooltips are not good for Touch. Perhaps use dropdowns instead. 

* [√] Liberate dropdowns from buttons. In fact why not liberate them from the menubar too? Then two similar bits of code can be combined into one named `dropdown` that can be used anywhere.

* [X] Dropdown = showhide = "toggle anything"

* [_] An improved "dropdown" that "knows" when not to protrude off-canvas. Perhaps "repositioning" itself NSEW depending on proximity of edge of canvas

* [_] Menubar dropdowns 'automatically' drop up if the menubar is at the bottom of the screen.

* [_] Vertical scroll in menubar dropdowns, if too long for screen?

* [_] Search form in Menubar

* [√] Centered Menubar

* [√] Images

* [√] Tables

* [_] More utility mixins

* [_] Incorporate Lightbox

* [_] Position-fixed / sticky menubar, sidebar, etc.

* [_] Other navigation models, e.g. 
	* [_] Incorporate Offcanvas (latest Touch version)
	* [_] megamenu (capable of hosting `.media`); 
	* [_] navigation overlay whole-page.

* [_] Modal - or improve the Lightbox so that it can handle text?
	* [_] Modal and "navigation overlay whole page" can be the same thing, in essence.

***

## Research

### Micro CSS Frameworks

Inspiration for my `deco-*` mixins and classes:

* [http://www.basscss.com](http://www.basscss.com)
* [http://tachyons.io/](http://tachyons.io/)
* [http://jxnblk.com/gravitons/](http://jxnblk.com/gravitons/)
* [http://furtive.co](http://furtive.co)
* [http://johnpolacek.github.io/expressive-css/](http://johnpolacek.github.io/expressive-css/)
* [https://decorator.io/modulr/](https://decorator.io/modulr/)

_My thoughts & ideas:_

1. Micro CSS frameworks add a lot of classes to the HTML, in fact that is how their designing is done. 
2. Whereas Codebase (default) has an opposite philosophy. Codebase is all about mixins that can be included in the developers own semantic classes.
3. (Therefore Codebase and micro CSS frameworks should be able to play nicely together.)
4. I am pulling my styling out of Codebase, so that developers get the most "style agostic" code base.
5. And my `deco-*` styling (generated both as mixins and classes) can be added – either when creating classes (using `@include deco-*`) or when composing the HTML (using `class="deco-*"`.

### BEVM (Block Element Variation Modifier)

[http://webuild.envato.com/blog/chainable-bem-modifiers/](http://webuild.envato.com/blog/chainable-bem-modifiers/)
[https://www.viget.com/articles/bem-sass-modifiers](https://www.viget.com/articles/bem-sass-modifiers)


