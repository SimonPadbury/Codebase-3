---
title: Dropdowns
prev: "Showhide"
prevLink: "/5-components/showhide.html"
next: "Buttons"
nextLink: "/5-components/buttons.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#the-simplest-dropdowns">The Simplest Dropdown</a></li>
    <li class="menu-item"><a href="#alignment-of-dropdown-content">Alignment of Dropdown Content</a></li>
    <li class="menu-item"><a href="#dropdown-classes">Dropdown Classes</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase dropdowns are simple <a href="../5-components/activator.html">activator</a> components.</p>

## The Simplest Dropdown

<div class="bg-theme-2 mb-3e p-2e"><b>Note:</b> Codebase dropdowns automatically include their own  triangular carets. So, you do not need to add a caret using the caret classes.</div>

<div class="flexbox mb-3e">
  <div class="dropdown mr-1e">
    <button class="btn dropdown-ctrl">Dropdown</button>
    <div class="dropdown-content nowrap">Dropdown content</div>
  </div>
  <div class="dropup">
    <button class="btn dropup-ctrl">Dropup</button>
    <div class="dropup-content nowrap">Dropup content</div>
  </div>
</div>

```HTML
<div class="dropdown">
  <button class="dropdown-ctrl btn btn-sm">Dropdown</button>
  <div class="dropdown-content">Dropdown content</div>
</div>

<div class="dropup">
  <div class="dropup-content">Dropup content</div>
  <button class="dropup-ctrl btn btn-sm">Dropup</button>
</div>
```

<div class="bg-theme-2 mb-3e p-2e">For "dropup", you need to use the <code>.dropup</code> classes throughout – <b>and</b> you need to reverse the order of the controller and content elements.</div>

## Alignment of Dropdown Content

With a modifier class on the `.dropdown-content` or `.dropup-content`, the dropdown content can be aligned flush-left, above or flush-right (relative to the dropdown control).

`.dropdown-content.dropdown-content-left`

<div class="dropdown mb-3e">
  <button class="btn dropdown-ctrl">Left</button>
  <div class="dropdown-content dropdown-content-left">Dropdown content left</div>
</div>

`.dropdown-content.dropdown-content-right`

<div class="dropdown dropdown-right mb-3e right">
  <button class="btn dropdown-ctrl">Right</button>
  <div class="dropdown-content dropdown-content-right">Dropdown content right</div>
</div>

`.dropup-content.dropup-content-left`

<div class="dropup mb-3e">
  <button class="btn dropup-ctrl">Above left</button>
  <div class="dropup-content dropup-content-left">Dropup content left</div>
</div>

`.dropup-content.dropup-content-right`

<div class="dropup mb-3e right">
  <button class="btn dropup-ctrl">Above right</button>
  <div class="dropup-content dropup-content-right">Dropup content right</div>
</div>

## Dropdown Classes

<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Notes</th>
      <th>Modifiers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.dropdown</code> or <code>.dropup</code></td>
      <td>The dropdown (or dropup) component block</td>
      <td></td>
    </tr>
    <tr>
      <td><code>.dropdown-ctrl</code> or <code>.dropup-ctrl</code></td>
      <td>The controller element</td>
      <td></td>
    </tr>
    <tr>
      <td><code>.dropdown-content</code> or <code>.dropup-content</code></td>
      <td>The content element</td>
      <td><code>.dropdown-content-left</code>, <code>.dropdown-content-right</code>, or <code>.dropup-content-left</code>, <code>.dropup-content-right</code> </td>
    </tr>
    <tr>
      <td><code>.caret-down</code> <br>
        <code>.caret-up</code> <br>
      </td>
      <td>(Optional) indicative carets<sup>1</sup></td>
      <td></td>
    </tr>
  </tbody>
</table>

<sup>1</sup> Instead of Codebase carets, you could also use something from an icon font or create your own graphic element.
