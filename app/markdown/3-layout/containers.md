---
title: Containers
prev: "Element Grid"
prevLink: "/3-layout/element-grid.html"
next: "Flexbox"
nextLink: "/3-layout/flexbox.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#various-container-widths">Various Container Widths</a></li>
    <li class="menu-item"><a href="#containers-and-grid-systems">Containers and Grid Systems</a></li>
  </ul>
</div>

<p class="h4 thin">As people may visit your website using various devices with a range of screen sizes (e.g. small phones, large monitors), it can be helpful to set a maximum width for your page content. This can be done using Codebase containers.</p>

`.container`

```HTML
<div class="container"> ... </div>
```

The `.container` class fluidly constrains a block to maximum width 1280px (default), and it centers the block by _auto-margins_ right and left.

## Various Container Widths

If you want to constrain a container width to something smaller than the maximum, Codebase has are several options. These are based on the [media query widths](../media-query-breakpoint-widths) with an inset of 5vw to allow for white-space right and left of the block:

Example:

```HTML
<div class="container container-md">
  ...
</div>
```

Or

```HTML
<div class="container">
  ...
  <div class="container-md">
    ...
  </div>
</div>
```

<table class="table">
  <thead>
    <tr>
      <th>Container classes</th>
      <th><code>max-width</code></th>
      <th>Example usage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.container</code></td>
      <td><code>1280px</code></td>
      <td>Wrapping an entire page (e.g. this page)</td>
    </tr>
    <tr>
      <td class="nowrap">
        <code>.container.container-xl</code> or<br>
        <code>.container</code> <code>.container-xl</code>
      </td>
      <td class="nowrap"><code>calc(1280px - 5vw)</code></td>
      <td></td>
    </tr>
    <tr>
      <td class="nowrap">
        <code>.container.container-lg</code> or<br>
        <code>.container</code> <code>.container-lg</code>
      </td>
      <td><code>calc(1024px - 5vw)</code></td>
      <td></td>
    </tr>
    <tr>
      <td class="nowrap">
        <code>.container.container-md</code> or<br>
        <code>.container</code> <code>.container-md</code>
      </td>
      <td><code>calc(768px - 5vw)</code></td>
      <td>Long-read articles (e.g. these docs articles)</td>
    </tr>
    <tr>
      <td class="nowrap">
        <code>.container.container-sm</code> or<br>
        <code>.container</code> <code>.container-sm</code>
      </td>
      <td><code>calc(580px - 5vw)</code></td>
      <td>Narrow modals</td>
    </tr>
  </tbody>
</table>

<div class="mb-3e p-2e bg-theme-2"><b>Note:</b> no padding is added by the <code>.container</code> class. If you need padding, add a <a href="../4-utilities/spacing.html">padding utility class</a> of your choice.</div>

## Containers and Grid Systems

You can use a container as a wrapper for a Codebase [CSS grid](../3-layout/grid.html) layout system.

```HTML
<div class="container grid">
  ...
</div>
```
