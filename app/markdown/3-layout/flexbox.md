---
title: "Flexbox"
prev: "Containers"
prevLink: "/3-layout/containers.html"
next: "Grid"
nextLink: "/3-layout/grid.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#the-flexbox-wrapper">The Flexbox Wrapper</a></li>
    <li class="menu-item"><a href="#flexbox-stretching">Flexbox Stretching</a></li>
    <li class="menu-item"><a href="#flexbox-spacing">Flexbox Spacing</a></li>
    <li class="menu-item"><a href="#flexbox-positioning">Flexbox Positioning</a></li>
    <li class="menu-item"><a href="#responsive flexbox">Responsive Flexbox</a></li>
    <li class="menu-item"><a href="#flexbox-classes">Flexbox Classes</a></li>
  </ul>
</div>

<p class="h4 thin">In Codebase, <code>.flexbox</code> is used for positioning and stretching items relative to their container.</p>

<div class="mb-3e p-2e bg-theme-2">
Codebase has no “old fashioned” grid system using flexbox or floats. If you want a real <em>grid</em> system, then use the <a href="3-layout/grid.html">Codebase CSS grid</a>.
</div>

## The Flexbox Wrapper

`.flexbox`

If you only use the class `.flexbox`, you get a flexbox with (immediate-child) flex-items.

<div class="flexbox mb-3e">
  <div class="b-thin rounded p-1e bg-theme-2">One</div>
  <div class="b-thin rounded p-1e bg-theme-2">Two</div>
  <div class="b-thin rounded p-1e bg-theme-2">Three</div>
  <div class="b-thin rounded p-1e bg-theme-2">Four</div>
</div>

```HTML
<div class="flexbox">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

Notes:

1. There is no `.flexbox-item` class – there is no need for it.
2. If necessary, flex items will wrap to form multiple rows.

## Flexbox Stretching

`.flexbox-grow-equal`

Expands flex-items to occupy equal widths in the available space.

<div class="flexbox flexbox-grow-equal mb-3e">
  <div class="b-thin rounded p-1e bg-theme-2">One</div>
  <div class="b-thin rounded p-1e bg-theme-2">Two</div>
  <div class="b-thin rounded p-1e bg-theme-2">Three</div>
  <div class="b-thin rounded p-1e bg-theme-2">Four</div>
</div>

```HTML
<div class="flexbox flexbox-grow-equal">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

`.flexbox-grow-auto`

Expands flex-item widths adjusted according to their content.

Also, flexbox row wrapping is exemplified below.

<div class="flexbox flexbox-grow-auto mb-3e">
  <div class="b-thin rounded p-1e bg-theme-2">This is the first flex-item</div>
  <div class="b-thin rounded p-1e bg-theme-2">Another flex-item</div>
  <div class="b-thin rounded p-1e bg-theme-2">Third</div>
  <div class="b-thin rounded p-1e bg-theme-2">This is the last flex-item in this flexbox set</div>
</div>

## Flexbox Spacing

`.flexbox.flexbox-gap`

Adds a 0.75rem margin around each grid item on all four sides – so that a 1.5rem (i.e. default line height) gap is built in between grid items horizontally and vertically.

The `.flexbox-gap` class also adds a -0.75rem margin to the container in order to compensate for flex item margins towards the edges of the container.

Also, flexbox row wrapping is exemplified below.

<div class="flexbox flexbox-gap mb-3e b-thin">
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
</div>

`.flexbox.flexbox-space-between`

<div class="flexbox flexbox-space-between mb-3e b-thin">
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Item</div>
  </div>
</div>

## Flexbox Positioning

`.flexbox.flexbox-left` / `.flexbox.flexbox-center` / `.flexbox.flexbox-right`

<div class="flexbox flexbox-left mb-3e b-thin">
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Left 1</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Left 2</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Left 3</div>
  </div>
</div>

<div class="flexbox flexbox-center mb-3e b-thin">
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Center 1</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Center 2</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Center 3</div>
  </div>
</div>

<div class="flexbox flexbox-right mb-3e b-thin">
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Right 1</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Right 2</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Right 3</div>
  </div>
</div>

`.flexbox.flexbox-top` / `.flexbox.flexbox-middle` / `.flexbox.flexbox-bottom`

<div class="flexbox flexbox-top b-thin mb-3e" style="height: 150px">
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Top 1</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Top 2</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Top 3</div>
  </div>
</div>

<div class="flexbox flexbox-middle mb-3e b-thin" style="height: 150px">
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Middle 1</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Middle 2</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Middle 3</div>
  </div>
</div>

<div class="flexbox flexbox-bottom mb-3e b-thin" style="height: 150px">
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Bottom 1</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Bottom 2</div>
  </div>
  <div class="flex-item-span-2">
    <div class="b-thin rounded p-1e bg-theme-2">Bottom 3</div>
  </div>
</div>

## Responsive Flexbox

Wrapper: `.flexbox-md` or `.flexbox-lg`<br>
Wrapper modifiers: `.flexbox-md-*` or `.flexbox-lg-*`

Do you want a stack (column) of blocks to switch to a flexbox row aove a certain viewport width? Don't use `.flexbox` – use `.flexbox-md` or `.flexbox-lg` instead.

Example `.flexbox-lg`:

<div class="flexbox-lg mb-3e">
  <div class="b-thin rounded p-1e bg-theme-2">One</div>
  <div class="b-thin rounded p-1e bg-theme-2">Two</div>
  <div class="b-thin rounded p-1e bg-theme-2">Three</div>
  <div class="b-thin rounded p-1e bg-theme-2">Four</div>
</div>

Do you want your group of flex items to be stretched or positioned differently above a certain viewport width? Use `.flexbox-md-*` and/or `.flexbox-lg-*` modifiers.

Example `.flexbox.flexbox-left.flexbox-md-center.flexbox-lg-right`:

<div class="flexbox flexbox-left flexbox-md-center flexbox-lg-right mb-3e">
  <div class="b-thin rounded p-1e bg-theme-2">One</div>
  <div class="b-thin rounded p-1e bg-theme-2">Two</div>
  <div class="b-thin rounded p-1e bg-theme-2">Three</div>
  <div class="b-thin rounded p-1e bg-theme-2">Four</div>
</div>

**Note:** flexbox wrapper modifiers targeting a wider viewport width won’t work unless you have set a flexbox  wrapper targeting the same or narrower viewport width.

E.g. This won’t be centered on medium viewports (but it is centered on large viewports):

```HTML
<div class="flexbox-lg flexbox-md-center">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

<div class="mb-3e p-2e bg-theme-2"><b>Tip:</b> Codebase flexbox layout classes play well with Codebase <a href="menus">menus</a> to create <a href="menubars-simple">menubars</a>.</div>

## Flexbox Classes

<table class="table">
  <thead>
    <tr>
      <th>Wrapper Class</th>
      <th>Wrapper Modifier Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.flexbox</code></td>
      <td>
        <p>Stretching:<br>
        <code>.flexbox-grow-equal</code>
        <code>.flexbox-grow-auto</code></p>
        <p>Spacing:<br>
        <code>.flexbox-gap</code>
        <code>.flexbox-space-between</code></p>
        <p>Horizontal positioning:<br>
        <code>.flexbox-left</code>
        <code>.flexbox-center</code>
        <code>.flexbox-right</code></p>
        <p>Vertical positioning:<br>
        <code>.flexbox-top</code>
        <code>.flexbox-middle</code>
        <code>.flexbox-bottom</code></p>
      </td>
    </tr>
    <tr>
      <td><code>.flexbox-md</code></td>
      <td>
        <p>Stretching:<br>
        <code>.flexbox-md-grow-equal</code>
        <code>.flexbox-md-grow-auto</code></p>
        <p>Spacing:<br>
        <code>.flexbox-md-gap</code>
        <code>.flexbox-md-space-between</code></p>
        <p>Horizontal positioning:<br>
        <code>.flexbox-md-left</code>
        <code>.flexbox-md-center</code>
        <code>.flexbox-md-right</code></p>
        <p>Vertical positioning:<br>
        <code>.flexbox-md-top</code>
        <code>.flexbox-md-middle</code>
        <code>.flexbox-md-bottom</code></p>
      </td>
    </tr>
    <tr>
      <td><code>.flexbox-lg</code></td>
      <td>
        <p>Stretching:<br>
        <code>.flexbox-lg-grow-equal</code>
        <code>.flexbox-lg-grow-auto</code></p>
        <p>Spacing:<br>
        <code>.flexbox-lg-gap</code>
        <code>.flexbox-lg-space-between</code></p>
        <p>Horizontal positioning:<br>
        <code>.flexbox-lg-left</code>
        <code>.flexbox-lg-center</code>
        <code>.flexbox-lg-right</code></p>
        <p>Vertical positioning:<br>
        <code>.flexbox-lg-top</code>
        <code>.flexbox-lg-middle</code>
        <code>.flexbox-lg-bottom</code></p>
      </td>
    </tr>
  </tbody>
</table>