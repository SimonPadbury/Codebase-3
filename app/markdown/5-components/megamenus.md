---
title: "Megamenus"
prev: "Menus"
onThisPage:
prevLink: "/5-components/menus.html"
next: "Offcanvas"
nextLink: "/5-components/offcanvas.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#megamenu-features">Megamenu Features</a></li>
    <li class="menu-item"><a href="#setting-up-the-megamenu">Setting up the Megamenu</a></li>
    <li class="menu-item"><a href="#megamenu-mode-breakpoint">Megamenu Mode Breakpoint</a></li>
    <li class="menu-item"><a href="#megamenu-in-Offcanvas-Mode">Megamenu in Offcanvas Mode</a></li>
    <li class="menu-item"><a href="#megamenu-in-navbar-mode">Megamenu in Navbar Mode</a></li>
    <li class="menu-item"><a href="#adding-a-megamenu-wrapper-and-a-brand-link">Adding a Megamenu Wrapper and a Brand Link</a></li>
    <li class="menu-item"><a href="#adding-an-internal-container-megamenu-wrapper">Adding an Internal Container to the Megamenu Wrapper</a></li>
    <li class="menu-item"><a href="#fixing-the-megamenu-to-the-top-of-the-viewport">Fixing the Megamenu to the top of the Viewport</a></li>
    <li class="menu-item"><a href="#adding-form-elements-and-buttons-to-the-navbar">Adding Form Elements and Buttons to the Navbar</a></li>
    <li class="menu-item"><a href="#adding-simple-submenus">Adding Simple Submenus</a></li>
    <li class="menu-item"><a href="#adding-full-width-mega-submenu-panels">Adding Full-width “Mega” Submenu Panels</a></li>
    <li class="menu-item"><a href="#adding-color">Adding Color</a></li>
    <li class="menu-item"><a href="#megamenu-classes">Megamenu Classes</a></li>
  </ul>
</div>

<p class="h4 thin">The Codebase megamenu is an all-in-one responsive navigation system, showing as an <a href="#megamenu-in-offcanvas-mode">offcanvas sidebar</a> on small viewports and as a <a href="#megamenu-in-navbar-mode">navbar</a> on medium viewports up.</p>

Example:

<nav id="megamenu-example-1" class="megamenu mb-3e">
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li class="has-submenu">
      <a href="">Item 2 (simple)</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">
        <ul class="menu">
          <li class="menu-item"><a href="">Item 2.1</a></li>
          <li class="menu-item"><a href="">Item 2.2</a></li>
          <li class="menu-item"><a href="">Item 2.3 with long text</a></li>
          <li class="menu-item"><a href="">Item 2.4</a></li>
        </ul>
      </div>
    </li>
    <li class="has-submenu mega">
      <a href="">Item 3 (mega)</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">
        <div class="grid-md grid-equalize-3">
          <div>
            <div class="p-2e bold">Submenu 3.1 header</div>
            <ul class="menu">
              <li class="menu-item"><a href="">Item 3.1.1</a></li>
              <li class="menu-item"><a href="">Item 3.1.2</a></li>
              <li class="menu-item"><a href="">Item 3.1.3 with long text for wrapping</a></li>
              <li class="menu-item"><a href="">Item 3.1.4</a></li>
            </ul>
          </div>
          <div class="p-2e">
            <div class="mb-2e bold">Submenu 3.2 header</div>
            <div class="card">
              <a class="card-image card-image-left pr-1e" href="#/">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="60" height="60" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg>
              </a>
              <div class="card-body">
                <h5 class="mb-0"><a href="">Card Title</a></h5>
                <p class="mb-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="card mb-0">
              <a class="card-image card-image-left pr-1e" href="#/">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="60" height="60" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg>
              </a>
              <div class="card-body">
                <h5 class="mb-0"><a href="">Card Title</a></h5>
                <p class="mb-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div class="p-2e">
            <div class="mb-2e bold">Submenu 3.3 header</div>
            <input class="block mb-1e small" id="text-example" name="examplename" placeholder="Name" type="text">
            <input class="block mb-1e small" id="email-example" name="examplename" placeholder="Email" type="email">
            <input class="btn primary small" value="Subscribe" type="submit">
          </div>
        </div>
        <div class="m-2e bt-thin pt-2e">
          A few examples of <a href="../5-components/menus.html">menus</a>, <a href="../5-components/cards.html">cards</a>, <a href="../2-basics/form-elements.html">forms elements</a> and <a href="../5-components/buttons.html">buttons</a> that can be placed within a Codebase megamenu panel. Control the panel layout using <a href="../3-layout/flexbox.html">flexbox</a> or <a href="../3-layout/grid.html">grid</a> classes.
        </div>
      </div>
    </li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</nav>

<div class="bg-theme-2 mb-3e p-2e hide-md-up">If you have a narrow viewport and you can’t see the megamenu example in <em>navbar mode</em>, this is because it is in <em>offcanvas mode</em>. Click this button instead to reveal it:<br><br>
<button data-megamenu-id="megamenu-example-1" class="megamenu-navicon btn">Meganemu example 1 &nbsp;<i class="fas fa-bars"></i></button>
</div>

```HTML
<i id="megamenu-example-1" class="megamenu-navicon fas fa-bars"></i>

<nav id="megamenu-example-1" class="megamenu">
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li class="has-submenu mega">
      <a href="">Item 2</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">

        <!-- mega (100%) width submenu panel -->

      </div>
    </li>
    <li class="has-submenu">
      <a href="">Item 3</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">

        <!-- small “dropdown type” submenu panel -->

      </div>
    </li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</nav>
```

## Megamenu Features

* **Offcanvas sidebar mode** for small viewports, with JavaScript toggled CSS transform animation to reveal the sidebar and to reveal submenus.
* **Navbar mode** for large viewports, with CSS hover revealing dropdown and megamenu panels.
* Default LTR and RTL modes, with `-right` and `-left` overrides for positioning the offcanvas sidebar, megamenu navicon, and/or navbar submenus.
* Use of icons (e.g. Font Awesome) for offcanvas navicon, offcanvas submenu reveal toggle, and offcanvas close.
* Automatic built-in carets for submenu parents in navbar mode.
* Full-width megamenu panel for complex submenus, capable of containing a multi-column [grid](/3-layout/grid.html), [menus](/5-components/menus.html), [cards](/5-components/cards.html), [form elements](/2-basics/form-elements.html) and [buttons](/5-components/buttons.html) – whatever you require.
* Offcanvas mode uses JS to add/remove CSS classes to show or hide the navbar content. Navbar mode uses CSS hover for revealing submenus. Parent hyperlinks are followable.
* “Click outside to dismiss” offcanvas sidebar (in addition to the offcanvas close icon).
* Window-resize also dismisses the megamenu in offcanvas mode (e.g. rotating a phone or small tablet between portrait and landscape orientation).

## Setting up the Megamenu

The Codebase megamenu has the CSS class `.megamenu` on its outer wrapper, and it must have an ID to identify it for the offcanvas mode activity that is toggled by its respective `.megamenu-navicon` (see [Megamenu in Offcanvas Mode](#megamenu-in-offcanvas-mode) for more information).

```HTML
<nav id="ex-1" class="megamenu">
  ...
</nav>

<span data-megamenu-id="ex-1" class="megamenu-navicon">MENU</span>
```

You can position the megamenu wherever you want in your HTML.

## Megamenu Mode Breakpoint

The viewport width at which the Codebase megamenu switches between offcanvas mode and navbar mode is controlled by the media query variable `$megamenu-mq` in `codebase/01-basics/__default-variables.scss`. By default, this is set at the same lower breakpoint width as is used by the [flexbox](/3-layout/flexbox.html) and [grid](/3-layout/grid.html) layouts: `$mq-md` = 768px.

## Megamenu in Offcanvas Mode

On small viewports (below the megamenu media query breakpoint width 768px (default)), the offcanvas panel slides in from the right for LTR mode and from the left for RTL mode.

These presets can be overridden using the modifier classes `.megamenu-offcanvas-left` or `.megamenu-offcanvas-right` (examples not shown).

```HTML
<nav class="megamenu megamenu-offcanvas-left" id="ex-1">
  ...
</nav>

<nav class="megamenu megamenu-offcanvas-right" id="ex-2">
  ...
</nav>
```

The megamenu navicon (for revealing the offcanvas panel on small viewports) needs to have a data attribute `data-megamenu-id` that points to the ID of its respective megamenu:

```HTML
<span data-megamenu-id="ex-1" class="megamenu-navicon">MENU</span>

<nav id="ex-1" class="megamenu">
  ...
</nav>
```

The megamenu navicon is automatically hidden at and above the megamenu media query breakpoint width (i.e. in navbar mode).

_You can style and position the megamenu navicon any way you want._ Traditionally, a “navicon” icon has been used (in these docs, this has been supplied by the [Font Awesome “bars” icon](https://fontawesome.com/icons/bars?style=solid), <i class="fas fa-bars"></i>).

There are also some optional modifier classes that can be used to fix the position of the megamenu navicon near the top-right `.megamenu-navicon-fixed-right` or top-left `.megamenu-navicon-fixed-left` of the viewport (examples not shown):

```HTML
<span class="megamenu-navicon megamenu-navicon-fixed-right fas fa-bars" data-megamenu-id="ex-1"></span>

<span class="megamenu-navicon megamenu-navicon-fixed-left fas fa-bars" data-megamenu-id="ex-1"></span>
```

In offcanvas mode, the revealed megamenu can be dismissed in any of the following four ways:

1. Clicking again the `.megamenu-navicon` toggle.
2. Clicking the `.megamenu-close`:
    ```HTML
    <span class="megamenu-close fas fa-times"></span>
    ```
3. Clicking anywhere outside the offcanvas panel will dismiss it.
4. Resizing the viewport (or rotating between portrait and landscape orientation) will also dismiss the offcanvas panel.

## Megamenu in Navbar Mode

In navbar mode by default, parent menu items are positioned inline left-aligned (LTR mode) or right-aligned (RTL mode).

Add some [flexbox](/3-layout/flexbox.html) classes to control the position of the megamenu parent links (effective in navbar mode only).

<div class="mb-3e p-2e bg-theme-2">You do not have to control the flexbox breakpoint for these top level (parent) links – the <code class="b-thin">.megamenu</code> class takes care of that for you. (You will, however, need to control the breakpoints for any grid or flexbox layout that you add into any <a href="#adding-full-width-megamenu-panels">full-width megamenu panel</a> that you may set up.</div>

Right-aligned navbar (unnecessary in RTL mode):

<button data-megamenu-id="megamenu-example-2" class="megamenu-navicon btn">Maganav example 2 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-2" class="megamenu mb-3e flexbox flexbox-right">
  <p class="mx-2e hide-md-up">Example 2: Right-aligned in navbar mode</p>
  <i class="megamenu-close fas fa-times"></i>
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</nav>

```HTML
<nav id="megamenu-example-2" class="megamenu flexbox flexbox-right">
  ...
</nav>
```

Left-aligned navbar (unnecessary in LTR mode):

<button data-megamenu-id="megamenu-example-3" class="megamenu-navicon btn">Maganav example 3 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-3" class="megamenu mb-3e flexbox flexbox-left">
  <p class="mx-2e hide-md-up">Example 3: Left-aligned in navbar mode</p>
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</nav>

```HTML
<nav id="megamenu-example-3" class="megamenu flexbox flexbox-left">
  ...
</nav>
```

Centered navbar:

<button data-megamenu-id="megamenu-example-4" class="megamenu-navicon btn">Maganav example 4 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-4" class="megamenu mb-3e flexbox flexbox-center">
  <p class="mx-2e hide-md-up">Example 4: Centered-aligned in navbar mode</p>
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</nav>

```HTML
<nav id="megamenu-example-4" class="megamenu flexbox flexbox-center">
  ...
</nav>
```

Space between navbar parent menu items:

<button data-megamenu-id="megamenu-example-5" class="megamenu-navicon btn">Maganav example 5 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-5" class="megamenu mb-3e">
  <p class="mx-2e hide-md-up">Example 5: Space-between in navbar mode</p>
  <i class="megamenu-close fas fa-times"></i>
  <ul class="flexbox flexbox-space-between">
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</nav>

```HTML
<nav id="megamenu-example-5" class="megamenu">
  ...
  <ul class="flexbox flexbox-space-between">
    ...
  </ul>
</nav>
```

Dual menubars within navbar:

<button data-megamenu-id="megamenu-example-6" class="megamenu-navicon btn">Maganav example 6 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-6" class="megamenu mb-3e flexbox flexbox-space-between">
  <p class="mx-2e hide-md-up">Example 6: Dual menus in navbar mode</p>
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li><a href="">Item 3</a></li>
  </ul>
  <ul>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
    <li><a href="">Item 6</a></li>
  </ul>
</nav>

```HTML
<nav id="megamenu-example-6" class="megamenu flexbox flexbox-space-between">
  ...
  <!-- menu 1 -->
  <ul>
    ...
  </ul>
  <!-- menu 2 -->
  <ul>
    ...
  </ul>
</nav>
```

## Adding a Megamenu Wrapper and a Brand Link

If you wrap the whole megamenu in a block element with flexbox classes to control the wrapper content layout, you can set up a traditional navbar with a brand link (you can use your own text and/or a suitable image).

You can set up a megamenu wrapper element by using the CSS class `.megamenu-wrapper`. It controls its content by flexbox and it puts space between child elements – typically a brand element, the navicon and the megamenu. In offcanvas mode, this will push the navicon to the opposite side of the wrapper from the brand element. In navbar mode, this will similarly push the megamenu away from the brand element.

As the brand, navicon and wrapper elements are not part of the megamenu itself, they will still be on the webpage on small viewports (while the megamenu is in offcanvas mode).

Example 7 (background color added to aid navbar visibility):

<div class="megamenu-wrapper mb-3e bg-theme-2">
  <a class="inline-block p-block bold" href="">Brand</a>
  <span data-megamenu-id="megamenu-example-7" class="megamenu-navicon p-block">Menu &nbsp;<i class="fas fa-bars"></i></span>
  <nav id="megamenu-example-7" class="megamenu">
    <p class="mx-2e hide-md-up">Example 7</p>
    <i class="megamenu-close fas fa-times"></i>
    <ul>
      <li><a href="">Item 1</a></li>
      <li><a href="">Item 2</a></li>
      <li><a href="">Item 3</a></li>
      <li><a href="">Item 4</a></li>
      <li><a href="">Item 5</a></li>
    </ul>
  </nav>
</div>

```HTML
<div class="megamenu-wrapper">
  <a class="inline-block p-block bold" href="">Brand</a>
  <span
    data-megamenu-id="megamenu-example-7"
    class="megamenu-navicon p-block">
    Menu &nbsp;<i class="fas fa-bars"></i>
  </span>
  <nav id="megamenu-example-7" class="megamenu">
    ...
  </nav>
</div>
```

## Adding an Internal Container to the Megamenu Wrapper

What if you want to introduce a [container](/3-layout/containers.html) _within_ the megamenu wrapper, so that you can constrain the width of the content (while the wrapper itself is goes to the full width of the viewport)?

This would mean that the brand, navicon and menubar are no longer direct children of `.megamenu-wrapper`, so they will no longer be influenced by its flexbox rules. No problem: your intervening `.container` will therefore need to have its own `.flexbox.flexbox-space-between` so that you can achieve the traditional navbar layout again.

Example 8 (background color added to aid navbar visibility):

<div class="megamenu-wrapper mb-3e bg-theme-2">
  <div class="container container-sm flexbox flexbox-space-between">
  <a class="inline-block p-block bold" href="">Brand</a>
  <span data-megamenu-id="megamenu-example-8" class="megamenu-navicon p-block">Menu &nbsp;<i class="fas fa-bars"></i></span>
  <nav id="megamenu-example-8" class="megamenu">
    <p class="mx-2e hide-md-up">Example 8</p>
    <i class="megamenu-close fas fa-times"></i>
    <ul>
      <li><a href="">Item 1</a></li>
      <li><a href="">Item 2</a></li>
      <li><a href="">Item 3</a></li>
      <li><a href="">Item 4</a></li>
      <li><a href="">Item 5</a></li>
    </ul>
  </nav>
  </div>
</div>

(The example above uses `.contaner-sm` for demonstration purposes, but you will more likely want one of the larger container widths.)

```HTML
<div class="megamenu-wrapper">
  <div class="container container-lg flexbox flexbox-space-between">
    <a class="inline-block p-block bold" href="">Brand</a>
    <span 
      data-megamenu-id="megamenu-example-8"
      class="megamenu-navicon p-block">
      Menu &nbsp;<i class="fas fa-bars"></i>
    </span>
    <nav id="megamenu-example-8" class="megamenu">
      ...
    </nav>
  </div>
</div>
```

## Fixing the Megamenu to the top of the Viewport

Use `.megamenu-wrapper.megamenu-wrapper-fixed-top` to fix the megamenu wrapper to the top of the viewport.

```HTML
<div class="megamenu-wrapper megamenu-wrapper-fixed-top">
  <a class="inline-block p-block bold" href="">Brand</a>
  <span
    data-megamenu-id="megamenu-example-9"
    class="megamenu-navicon p-block">
    Menu &nbsp;<i class="fas fa-bars"></i>
  </span>
  <nav id="megamenu-example-9" class="megamenu">
    ...
  </nav>
</div>
```

This fixing only affects the megamenu wrapper (and the megamenu in navbar mode). In offvanvas mode the megamenu already has a fixed position.

<div class="bg-theme-2 mb-3e p-2e">For an example of a fixed megamenu, see the one at the top of this page.<br><br>
(However, in the layout for these docs the this megamenu has been <a href="../4-utilities/invisibility.html">hidden</a> in offcanvas mode, and the main sidebar has been used as a responsive <a href="../5-components/offcanvas.html">offcanvas</a> panel instead.</div>

## Adding Form Elements and Buttons to the Navbar

Simply place a `<form>` with a few [form elements](/2-basics/form-elements.html) (including an input button) within a megamenu parent list item `<li>`. In Codebase, form elements and buttons are inline elements by default.

Use `.small` utility classes to make the form elements and buttons fit within the megamenu.

The `<form>` element will recieve a little padding, so that it is positioned well in both offcanvas mode and navbar mode.

Example 9 (background color added to aid navbar visibility):

<button data-megamenu-id="megamenu-example-9" class="megamenu-navicon btn">Maganav example 9 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-9" class="megamenu mb-3e flexbox flexbox-right bg-theme-2">
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li>
      <form>
        <input class="small" id="search-example" name="examplename" placeholder="Search..." type="search">
        <button class="btn btn-icon small" type="submit">
          <span class="fas fa-search"></span>
        </button>
      </form>
    </li>
  </ul>
</nav>

```HTML
<nav id="megamenu-example-9" class="megamenu flexbox flexbox-right">
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li>
      <form>
        <input class="small" id="search-example" name="examplename" placeholder="Search..." type="search">
        <button class="btn btn-icon small" type="submit">
          <span class="fas fa-search"></span>
        </button>
      </form>
    </li>
  </ul>
</nav>
```

## Adding Simple Submenus

The Codebase megamenu is capable of handling two kinds of “dropdown” submenus: simple and [full-width “megamenu panels”](#adding-full-width-megamenu-panels).

Both kinds of submenu are set up using:

1. `.has-submenu` on the parent link wrapping `<li>`.
2. `.submenu-toggle` is used by a JS toggler in offcanvas mode, to add/remove `.submenu-is-revealed` from the parent link wrapping `<li>`. In these examples, this is assigned to a [Font Awesome](https://fontawesome.com/) <i class="fas fa-plus"></i> icon that appears adjacent to the parent link.
3. A wrapping `.submenu-content` around the child menu.

```HTML
<li class="has-submenu">
  <a href="">Parent menu item</a>
  <span class="submenu-toggle fas fa-plus"></span>
  <div class="submenu-content"> ... </div>
</li>
```

Example 10 – with simple submenu (under parent item 3):

<button data-megamenu-id="megamenu-example-10" class="megamenu-navicon btn">Maganav example 10 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-10" class="megamenu megamenu-offcanvas-right mb-3e">
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li class="has-submenu">
      <a href="">Item 3</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">
        <ul class="menu">
          <li class="menu-item"><a href="">Item 3.1</a></li>
          <li class="menu-item"><a href="">Item 3.2</a></li>
          <li class="menu-item"><a href="">Item 3.3 with long text</a></li>
          <li class="menu-item"><a href="">Item 3.4</a></li>
        </ul>
      </div>
    </li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</nav>

```HTML
<button data-megamenu-id="megamenu-example-11" class="megamenu-navicon btn">Maganav example 11 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-10" class="megamenu megamenu-offcanvas-right mb-3e">
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li class="has-submenu">
      <a href="">Item 3</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">
        <ul class="menu">
          <li class="menu-item"><a href="">Item 3.1</a></li>
          <li class="menu-item"><a href="">Item 3.2</a></li>
          <li class="menu-item"><a href="">Item 3.3 with long text</a></li>
          <li class="menu-item"><a href="">Item 3.4</a></li>
        </ul>
      </div>
    </li>
    <li><a href="">Item 4</a></li>
    <li><a href="">Item 5</a></li>
  </ul>
</nav>
```

Submenu features:

* In offcanvas mode, each submenu is revealed or hidden using a JavaScript toggle. Besides this toggle, submenus are also dismissed by closing the sidebar in offcanvas mode. Within the revealed submenu, all content is laid out in a single column vertically.
* The navbar mode reveal of submenus is controlled entirely by CSS (and the parent link is followable). A “dropdown indicator” triangular caret is automatially added beside the parent link. A semi-transparent background color indicator appears on the parent link, so that that the (sighted) visitor remains aware of what parent the submenu belongs to (essential if the submenu has a lot of content). And a subtle CSS animation occurs during the showing and hiding of the submenu.
* By default, submenus will be left-aligned for LTR mode and right-aligned [RTL mode](/1-getting-started/rtl-languages-support.html).

Simple submenu dropdown-alignment can also be controlled by adding CSS classes `.has-submenu-left` or `.has-submenu-right` to the parent link wrapping `<li>`.

<button data-megamenu-id="megamenu-example-11" class="megamenu-navicon btn">Maganav example 11 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-11" class="megamenu megamenu-offcanvas-right mb-3e">
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li><a href="">Item 1</a></li>
    <li><a href="">Item 2</a></li>
    <li class="has-submenu has-submenu-left">
      <a href="">Item 3 (Left)</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">
        <ul class="menu">
          <li class="menu-item"><a href="">Item 3.1</a></li>
          <li class="menu-item"><a href="">Item 3.2</a></li>
          <li class="menu-item"><a href="">Item 3.3 with long text</a></li>
          <li class="menu-item"><a href="">Item 3.4</a></li>
        </ul>
      </div>
    </li>
    <li class="has-submenu has-submenu-right">
      <a href="">Item 4 (Right)</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">
        <ul class="menu">
          <li class="menu-item"><a href="">Item 4.1</a></li>
          <li class="menu-item"><a href="">Item 4.2</a></li>
          <li class="menu-item"><a href="">Item 4.3 with long text</a></li>
          <li class="menu-item"><a href="">Item 4.4</a></li>
        </ul>
      </div>
    </li>
    <li><a href="">Item 5</a></li>
    <li><a href="">Item 6</a></li>
  </ul>
</nav>

```HTML
...
<li class="has-submenu has-submenu-left">
  <a href="">Item 3 (Left)</a>
  <span class="submenu-toggle fas fa-plus"></span>
  <div class="submenu-content">
    <ul class="menu">
      ...
    </ul>
  </div>
</li>
<li class="has-submenu has-submenu-right">
  <a href="">Item 4 (Right)</a>
  <span class="submenu-toggle fas fa-plus"></span>
  <div class="submenu-content">
    <ul class="menu">
      ...
    </ul>
  </div>
</li>
...
```

## Adding Full-width “Mega” Submenu Panels

Full width submenu panels are set up in the same way as simple submenus, with the addition of the `.mega` class on the parent link wrapping `<li>`.

```HTML
<li class="has-submenu mega">
  <a href="">Parent menu item</a>
  <span class="submenu-toggle fas fa-plus"></span>
  <div class="submenu-content"> ... </div>
</li>
```

This will cause the submenu to be expanded to the full width of the `.megamenu` block element.

Within the full-width submenu content panel, you can place anything: [menus](/5-components/menus.html), [cards](/5-components/cards.html), [form elements](/2-basics/form-elements.html) and [buttons](/5-components/buttons.html) – whatever you require.

You may need to set up a columnar multi-column [flexbox](/3-layout/flexbox.html) or [grid](/3-layout/grid.html) layout. _Be sure to give this layout the same breakpoint width as is set for the megamenu offcanvas/navbar mode switch_ – this is `-md` (768px) by default.

Example 12 (background color added to aid navbar visibility):

<button data-megamenu-id="megamenu-example-12" class="megamenu-navicon btn">Meganemu example 12 &nbsp;<i class="fas fa-bars"></i></button>

<nav id="megamenu-example-12" class="megamenu mb-3e bg-theme-2">
  <i class="megamenu-close fas fa-times"></i>
  <ul>
    <li class="has-submenu mega">
      <a href="">Item 1</a>
      <span class="submenu-toggle fas fa-plus"></span>
      <div class="submenu-content">
        <div class="grid-md grid-equalize-3">
          <div>
            <div class="p-2e bold">Submenu 1.1 header</div>
            <ul class="menu">
              <li class="menu-item"><a href="">Item 1.1.1</a></li>
              <li class="menu-item"><a href="">Item 1.1.2</a></li>
              <li class="menu-item"><a href="">Item 1.1.3 with long text for wrapping</a></li>
              <li class="menu-item"><a href="">Item 1.1.4</a></li>
            </ul>
          </div>
          <div class="p-2e">
            <div class="mb-2e bold">Submenu 1.2 header</div>
            <div class="card">
              <a class="card-image card-image-left pr-1e" href="#/">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="60" height="60" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg>
              </a>
              <div class="card-body">
                <h5 class="mb-0"><a href="">Card Title</a></h5>
                <p class="mb-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="card mb-0">
              <a class="card-image card-image-left pr-1e" href="#/">
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="60" height="60" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg>
              </a>
              <div class="card-body">
                <h5 class="mb-0"><a href="">Card Title</a></h5>
                <p class="mb-0">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div class="p-2e">
            <div class="mb-2e bold">Submenu 1.3 header</div>
            <input class="block mb-1e small" id="text-example" name="examplename" placeholder="Name" type="text">
            <input class="block mb-1e small" id="email-example" name="examplename" placeholder="Email" type="email">
            <input class="btn primary small" value="Subscribe" type="submit">
          </div>
        </div>
        <div class="m-2e bt-thin pt-2e">
          A few examples of <a href="../5-components/menus.html">menus</a>, <a href="../5-components/cards.html">cards</a>, <a href="../2-basics/form-elements.html">forms elements</a> and <a href="../5-components/buttons.html">buttons</a> that can be placed within a Codebase megamenu panel. Control the panel layout using <a href="../3-layout/flexbox.html">flexbox</a> or <a href="../3-layout/grid.html">grid</a> classes.
        </div>
      </div>
    </li>
  </ul>
</nav>

## Adding Color

The Codebase megamenu offcanvas panel and navbar submenu panels are given the default `<body>` background color (for both light and dark themes), so that they can be seen over whatever they overlay. But in navbar mode the navbar itself is _transparent_.

You can add colour using your own CSS or use Codebase [color UI or utility](/4-utilities/colors.html) classes.

Above, you've seen the utility class `.bg-theme-2` being applied to a couple of the megamenus. You won't want to use `.bg-theme-3` or above without also adjusting the color of text and hyperlinks to aid readability.

You can, however, use any of the UI color utility classes: <span class="label primary">primary</span>, <span class="label secondary">secondary</span>, <span class="label success">success</span>, <span class="label warning">warning</span>, or <span class="label danger">danger</span>. These switch text and hyperlink color to white. These will apply their color to the navbar, submenu panel and offcanvas panel.

Example 13 using `.primary`:

<div class="flexbox flexbox-space-between mb-3e primary">
  <a class="inline-block p-block bold" href="">Brand</a>
  <span
    data-megamenu-id="megamenu-example-13"
    class="megamenu-navicon p-block">
    Menu &nbsp;<i class="fas fa-bars"></i>
  </span>
  <nav id="megamenu-example-13" class="megamenu flexbox flexbox-right primary">
    <i class="megamenu-close fas fa-times"></i>
    <ul>
      <li><a href="">Item 1</a></li>
      <li><a href="">Item 2</a></li>
      <li class="has-submenu">
        <a href="">Item 3 (Left)</a>
        <span class="submenu-toggle fas fa-plus"></span>
        <div class="submenu-content">
          <ul class="menu">
            <li class="menu-item"><a href="">Item 3.1</a></li>
            <li class="menu-item"><a href="">Item 3.2</a></li>
            <li class="menu-item"><a href="">Item 3.3 with long text</a></li>
            <li class="menu-item"><a href="">Item 3.4</a></li>
          </ul>
        </div>
      </li>
      <li>
        <form>
          <input class="small" id="search-example" name="examplename" placeholder="Search..." type="search">
          <button class="btn btn-icon small primary" type="submit">
            <span class="fas fa-search"></span>
          </button>
        </form>
      </li>
    </ul>
  </nav>
</div>

## Megamenu Classes

<table class="table mb-3e">
  <thead>
    <tr>
      <th>Class</th>
      <th>Notes</th>
      <th>Modifiers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.megamenu</code></td>
      <td>The megamenu component wrapper</td>
      <td></td>
    </tr>
    <tr>
      <td><code class="nowrap">.megamenu-navicon</code></td>
      <td>Toggler for revealing the megamenu in offcanvas mode</td>
      <td>For fixed-position (near viewport top):<br><code class="nowrap">.megamenu-navicon-fixed-left</code><br><code class="nowrap">.megamenu-navicon-fixed-right</code></td>
    </tr>
    <tr>
      <td><code>.megamenu-close</code></td>
      <td>For dismissing the megamenu in offcanvas mode</td>
      <td></td>
    </tr>
    <tr>
      <td><code>.submenu-toggle</code></td>
      <td>For showing or hiding the submenu in offcanvas mode</td>
      <td></td>
    </tr>
    <tr>
      <td><code>.has-submenu</code></td>
      <td>For the parent <code>&lt;li&gt;</code></td>
      <td>For for alignment of simple submenu content panels:<br>
      <code>.has-submenu-left</code><br>
      <code>.has-submenu-right</code><br>
      For full-width navbar dropdown panel:<br><code>.mega</code></td>
    </tr>
    <tr>
      <td><code>.submenu-content</code></td>
      <td>Wrapper for the submenu-content</td>
      <td></td>
    </tr>
  </tbody>
</table>

<div class="bg-theme-2 p-2e">Megamenu not big enough for you? Try a <a href="../5-components/modals.html#full-cover-modal">Full-Cover Modal</a>.</div>