---
title: Components
prev: "Utilities"
prevLink: "/4-utilities/utilities.html"
next: "Components that use JS"
nextLink: "/5-components/components-that-use-js.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#component-mixins-and-class-builders">Component Mixins and Class Builders</a></li>
    <li class="menu-item"><a href="#components-that-use-javascript">Components That Use JavaScript</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase components are common HTML/CSS patterns. Some have added functionality from a tiny JavaScript that simply adds/removes CSS classes.</p>

## Component Mixins and Class Builders

Almost everything in Codebase, including all components, has been created first as a set of SCSS mixins. These are then combined and included in their respective class builder mixins.

These class builders are under the control of a set of true `!default` variables in `codebase/scss/00_default-variables/_default-variables.scss`.

This means that SCSS users can:

1. Toggle component classes for inclusion (true) or exclusion (false) in your advanced theme build by overriding these defaults.
2. Include and combine and re-style (decorate) codebase components in your own theme SCSS.
3. Combine various frameworks with similarly named CSS classes while avoiding clashes: toggle off Codebase CSS class names and create new (e.g. prefixed) classnames for Codebase mixins.

## Components That Use JavaScript

Some components in Codebase use tiny, simple JavaScript scripts for their operation. These have all been bundled into `codebase.js`.

Since Codebase v2.0, `codebase.js` has been totally refactored as “vanilla JavaScript” – it does not require jQuery or any other library.

Most Codebase script functions simply add and remove CSS classes, in response to click/tap events or viewport resizes (e.g. rotating a phone from portrait to landscape orientation).

### Toggler

Toggler responds responds to clicks/taps on a controller element (e.g. button) and it applies class `is-toggled` _or a class of your choice_ to its target element. Click/tap the toggler controller again, and your class will be removed from the target.

Toggler is not actually used for any Codebase component (but there are some examples in the docs). So, it has no styling in `codebase.css`. Toggler is there for you to use for your own situations that require toggling (class add/remove).

Togglers are independent of each other, therefore multiple togglers can be toggled at any one time.

Go to [Toggler &rarr;](../5-components/toggler.html)

### Activator

The activator script responds to clicks/taps on a “controller” element (e.g. button) and it applies `.is-active` classes to the activated controller and to its component wrapper _and_ target “content” element. Click/tap this controller element again and it will remove the `.is-active` classes – and deactivation can also be caused by “clicking outside” the active component or by clicking a "close" element (e.g. a _dismiss_ button).

Activator is used by showhide, dropdowns, menubars (for the collapsed state on small viewports), offcanvas panels, and modals. Plus you can create your own componends that need to use the activator functionality.

Only one activator component can be active at any one time – activating one will deactivate all others.

Go to [Activator &rarr;](../5-components/activator.html)<br>
&nbsp; – [Showhide &rarr;](../5-components/showhide.html)<br>
&nbsp; – [Dropdowns &rarr;](../5-components/dropdowns.html)<br>
&nbsp; – [Offcanvas &rarr;](http://localhost:3000/5-components/offcanvas.html)<br>
&nbsp; – [Modals &rarr;](../5-components/modals.html)

### Megamenus

The Codebase megamenu is new with v.3.0. It is an all-in-one navigation system that shows as an offcanvas sidebar on small viewports and as a navbar on large viewports, capable of handling full-width dropdown panels.

In offcanvas mode (not the same as [Activator Offcanvas](../5-components/offcanvas.html)), a JavaScript toggler (often with a “hamburger” navicon) opens and closes the hidden sidebar panel. The panel can also be dismissed by “clicking outside” and by resizing the viewport, e.g. in rotating between portrait and landscape orientations. Submenus within the sidebar are hidden by default and they can be individually revealed by their own toggler.

In navbar mode, submenu panels are revealed by tapping on touch screens or by hovering a pointing device (e.g. mouse).

Go to [Megamenu &rarr;](../5-components/megamenus.html)

### Responsive Tables

Trying to display a wide tables on a narrow screens can be problematic. So a Codebase table script looks for every Codebase `.table` class and then double wraps it in two DIVs with related classes. The outer DIV wrapper constrains the overall width to the width of the available space while the inner DIV wrapper enables the table to overflow horizontally but invisibly – and it enables the visitor to horizontally-scroll the table so that they can see all the data.

Go to [Responsive Tables &rarr;](../5-components/tables#codebase-tables-are-responsive.html)

