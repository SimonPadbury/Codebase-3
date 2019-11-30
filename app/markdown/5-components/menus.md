---
title: Menus
prev: "Badges and Labels"
prevLink: "/5-components/badges-and-labels.html"
next: "Megamenus"
nextLink: "/5-components/megamenus.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#the-simplest-modal">The Simplest Menu</a></li>
    <li class="menu-item"><a href="#sub-menus">Sub-Menus</a></li>
    <li class="menu-item"><a href="#menubars">Menubars</a></li>
    <li class="menu-item"><a href="#responsive-menubars">Responsive Menubars</a></li>
    <li class="menu-item"><a href="#menu-classes">Menu Classes</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase <code>.menu</code> classes set up a simple stacked menu. Adding <code>.flexbox</code> layout classes to menus enables a simple <a href="#menubars">menubar</a> or even a <a href="#responsive-menubars">responsive menubar</a> layout.</p>

Adding `.flexbox` layout classes to menus enables a simple “menubar” layout – see [menubars](#menubars) and [responsive menubars](#responsive-menubars) further down this page.

<div class="bg-theme-2 mb-3e p-2e"><strong>Note:</strong> If you are looking for a more complex navigation system, see the Codebase <a href="../5-components/megamenu.html">megamenu</a>.</div>

## The Simplest Menu

Example:

<ul class="menu">
  <li class="menu-item"><a href="#/">Link 1</a></li>
  <li class="menu-item"><a href="#/">Link 2</a></li>
  <li class="menu-item"><a href="#/">Link 3</a></li>
  <li class="menu-item"><a href="#/">Link 4</a></li>
  <li class="menu-item"><a href="#/">Link 5</a></li>
</ul>

```HTML
<ul class="menu">
  <li class="menu-item"><a href="#/">Link 1</a></li>
  <li class="menu-item"><a href="#/">Link 2</a></li>
  <li class="menu-item"><a href="#/">Link 3</a></li>
  <li class="menu-item"><a href="#/">Link 4</a></li>
  <li class="menu-item"><a href="#/">Link 5</a></li>
</ul>
```

`.menu` and `.menu-item` have zero margins and paddings (e.g. they reset an ordered or unordered list).

`<a>` hyperlinks inside `.menu-item` are rendered as block elements and they are given some padding.

## Sub-Menus

`.menu` within `.menu` is given a margin to inset it (left margin for LTR, right margin for RTL).

<ul class="menu mb-3e">
  <li class="menu-item"><a href="#/">Link</a></li>
  <li class="menu-item"><a href="#/">Link</a></li>
  <li class="menu-item"><a href="#/">Link (parent)</a>
    <ul class="menu">
      <li class="menu-item"><a href="#/">Link</a></li>
      <li class="menu-item"><a href="#/">Link (parent)</a>
        <ul class="menu">
          <li class="menu-item"><a href="#/">Link</a></li>
          <li class="menu-item"><a href="#/">Link</a></li>
        </ul>
      </li>
      <li class="menu-item"><a href="#/">Link</a></li>
    </ul>
  </li>
  <li class="menu-item"><a href="#/">Link</a></li>
  <li class="menu-item"><a href="#/">Link</a></li>
</ul>

## Menubars

Simple menubars (i.e. horizontal navigation lists) can be built by adding [flexbox](../flexbox) to [menus](../menus).

<ul class="menu flexbox mb-3e">
	<li class="menu-item"><a href="#/">Link 1</a></li>
	<li class="menu-item"><a href="#/">Link 2</a></li>
	<li class="menu-item"><a href="#/">Link 3</a></li>
	<li class="menu-item"><a href="#/">Link 4</a></li>
	<li class="menu-item"><a href="#/">Link 5</a></li>
</ul>

(Thin borders have been added to aid visualization of these examples.)

```HTML
<ul class="menu flexbox">
  <li class="menu-item"><a href="#/">Link 1</a></li>
  <li class="menu-item"><a href="#/">Link 2</a></li>
  <li class="menu-item"><a href="#/">Link 3</a></li>
  <li class="menu-item"><a href="#/">Link 4</a></li>
  <li class="menu-item"><a href="#/">Link 5</a></li>
</ul>
```

<div class="bg-theme-2 mb-3e p-2e"><strong>Note:</strong> You can’t have sub-menus in simple flexbox menubars. If you need something more complex, see the Codebase <a href="../5-components/megamenu.html">megamenu</a>.</div>

Menu-item positioning in menubars (borders added to aid visualization):

`.menu.flexbox.flexbox-left`

<ul class="menu flexbox flexbox-left mb-3e b-thin">
	<li class="menu-item"><a href="#/">Link 1</a></li>
	<li class="menu-item"><a href="#/">Link 2</a></li>
	<li class="menu-item"><a href="#/">Link 3</a></li>
	<li class="menu-item"><a href="#/">Link 4</a></li>
	<li class="menu-item"><a href="#/">Link 5</a></li>
</ul>

`.menu.flexbox.flexbox-right`

<ul class="menu flexbox flexbox-right mb-3e b-thin">
	<li class="menu-item"><a href="#/">Link 1</a></li>
	<li class="menu-item"><a href="#/">Link 2</a></li>
	<li class="menu-item"><a href="#/">Link 3</a></li>
	<li class="menu-item"><a href="#/">Link 4</a></li>
	<li class="menu-item"><a href="#/">Link 5</a></li>
</ul>

`.menu.flexbox.flexbox-center`

<ul class="menu flexbox flexbox-center mb-3e b-thin">
	<li class="menu-item"><a href="#/">Link 1</a></li>
	<li class="menu-item"><a href="#/">Link 2</a></li>
	<li class="menu-item"><a href="#/">Link 3</a></li>
	<li class="menu-item"><a href="#/">Link 4</a></li>
	<li class="menu-item"><a href="#/">Link 5</a></li>
</ul>

`.menu.flexbox.flexbox-space-between`

<ul class="menu flexbox flexbox-space-between mb-3e b-thin">
	<li class="menu-item"><a href="#/">Link 1</a></li>
	<li class="menu-item"><a href="#/">Link 2</a></li>
	<li class="menu-item"><a href="#/">Link 3</a></li>
	<li class="menu-item"><a href="#/">Link 4</a></li>
	<li class="menu-item"><a href="#/">Link 5</a></li>
</ul>

## Responsive Menubars

There may be situations where you require a navigation list to display as a stacked menu on small viewports but as a menubar on wider viewports. You can also accomplish that using responsive [flexbox](../flexbox) classes.

Example using `.menu.flexbox-md.flexbox-md-center`:

<ul class="menu flexbox-md flexbox-md-center mb-3e b-thin">
  <li class="menu-item"><a href="#/">Link 1</a></li>
  <li class="menu-item"><a href="#/">Link 2</a></li>
  <li class="menu-item"><a href="#/">Link 3</a></li>
  <li class="menu-item"><a href="#/">Link 4</a></li>
  <li class="menu-item"><a href="#/">Link 5</a></li>
</ul>

The example above will switch from from a menu to a menubar at the Codebase `md` viewport width (768px).

## Menu Classes

<table class="table mb-3e">
  <thead>
    <tr>
      <th>Class</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.menu</code></td>
      <td>The menu component wrapper</td>
    </tr>
    <tr>
      <td><code>.menu-item</code></td>
      <td>The menu item element</td>
    </tr>
    <tr>
      <td><code>.menu a</code></td>
      <td>The menu link element (block)</td>
    </tr>
  </tbody>
</table>

See also [flexbox](../5-components/menus.html) for use in setting up menubars.
