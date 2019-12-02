---
title: Grid
prev: "Flexbox"
prevLink: "3-layout-flexbox.html"
next: "Utilities"
nextLink: "4-utilities.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#grid-system-features">Grid System Features</a></li>
    <li class="menu-item"><a href="#fluid-grid-wrapper-classes">Fluid Grid Wrapper Classes</a></li>
    <li class="menu-item"><a href="#grid-item-classes">Grid-Item Classes</a></li>
    <li class="menu-item"><a href="#using-the-grid-system">Using the Grid System</a></li>
    <li class="menu-item"><a href="#examples">Examples</a></li>
    <li class="menu-item"><a href="#grid-css-classes">Grid CSS Classes</a></li>
  </ul>
</div>

<p class="h4 thin">Since v3.0 Codebase has included a responsive, fluid, <em>real</em> <a href="https://www.w3.org/TR/css-grid-1/">CSS Grid</a> grid-system.

With the arrival of _grid_ to CSS, web developer thought leaders such as Rachel Andrew have argued persuasively that [there is no need for a CSS grid-based grid system](https://www.rachelandrew.co.uk/archives/2017/07/01/you-do-not-need-a-css-grid-based-grid-system/) – because you can create your own, directly in your CSS.

But you may find Codebase’s CSS grid system handy, anyhow!

<div class="grid grid-equalize-4 mb-3e">
  <div class="col-1-2 row-1 b-thin rounded p-1e bg-theme-2">a</div>
  <div class="col-3 row-1 b-thin rounded p-1e bg-theme-2">b</div>
  <div class="col-4 row-1-2 b-thin rounded p-1e bg-theme-2">c</div>
  <div class="col-1 row-2-4 b-thin rounded p-1e bg-theme-2">d</div>
  <div class="col-2 row-2 b-thin rounded p-1e bg-theme-2">e</div>
  <div class="col-3 row-2-3 b-thin rounded p-1e bg-theme-2">f</div>
  <div class="col-3 row-2-3 b-thin rounded p-1e bg-theme-2">f</div>
  <div class="col-2 b-thin rounded p-1e bg-theme-2">g</div>
  <div class="col-4 row-3 b-thin rounded p-1e bg-theme-2">h</div>
  <div class="col-2-4 row-4 b-thin rounded p-1e bg-theme-2">i</div>
</div>

As with all Codebase class-builder units, if you don’t want this in your outputted `codebase.css` you can toggle it to false in `codebase/scss/01_basics/__default-variables.scss` SCSS:

```SCSS
$include-css-grid: true !default;
```

## Grid System Features

1. Unlike the traditional (columnar) 12 column grid systems based on floats or flexbox, with the Codebase grid you get to choose how many columns and rows you need for your layout: 2, 3, or 4 (max). That’s everything up to a 4×4 grid.
    * _This versatility covers the majority of use cases._ But if you really need more (e.g. you need 5 or 6 columns), then you can increase the `$grid-max-cols` and `$grid-max-rows` variables in the SCSS. (Don’t go too high here, because that could massively increase your outputted CSS from the SCSS preprocessor loops.)
    * By default, the grid area (grid cell) widths and are flexible – where they are depends on how much content you have in each area. But where necessary, you can do a “distribute columns evenly” by applying [grid equalize](#equalizing-column-widths) classes.

<div class="grid grid-equalize-2 mb-3e">
  <div class="col-1 b-thin rounded p-1e bg-theme-2">.col-1</div>
  <div class="col-1-2 b-thin rounded p-1e bg-theme-2">.col-1-2</div>
</div>

<div class="grid grid-equalize-3 mb-3e">
  <div class="col-3 b-thin rounded p-1e bg-theme-2">.col-3</div>
  <div class="col-2-3 b-thin rounded p-1e bg-theme-2">.col-2-3</div>
  <div class="col-1-3 b-thin rounded p-1e bg-theme-2">.col-1-3</div>
</div>

<div class="grid grid-equalize-4 mb-3e">
  <div class="col-1 b-thin rounded p-1e bg-theme-2">.col-1</div>
  <div class="col-2 row-1-2 b-thin rounded p-1e bg-theme-2">.col-2 .row-1-2</div>
  <div class="col-1 b-thin rounded p-1e bg-theme-2">.col-1</div>
  <div class="col-3 row-1-3 b-thin rounded p-1e bg-theme-2">.col-3 .row-1-3</div>
  <div class="col-1-2 b-thin rounded p-1e bg-theme-2">.col-1-2</div>
  <div class="col-4 row-1-4 b-thin rounded p-1e bg-theme-2">.col-4 .row-1-4</div>
  <div class="col-1-3 b-thin rounded p-1e bg-theme-2">.col-1-3</div>
</div>

```HTML
<div class="grid grid-equalize-2">
  <div class="col-1">a</div>
  <div class="col-1-2">b</div>
</div>

<div class="grid grid-equalize-3">
  <div class="col-3">a</div>
  <div class="col-2-3">b</div>
  <div class="col-1-3">c</div>
</div>

<div class="grid grid-equalize-4 mb-3e">
  <div class="col-1">a</div>
  <div class="col-2 row-1-2">b</div>
  <div class="col-1">c</div>
  <div class="col-3 row-1-3">d</div>
  <div class="col-1-2">e</div>
  <div class="col-4 row-1-4">f</div>
  <div class="col-1-3">g</div>
</div>
```

2. Three grid systems are included:
    * Default – use this if you need a grid layout at all viewport widths.
    * `-md` becomes effective at minimum 768px viewport width.
    * `-lg` becomes effective at minimum 1024px viewport width.
3. Per grid-item justification and alignment.
4. Nestable.
5. RTL and LTR languages are supported.
6. No need for any of that offseting, push-pulling and re-ordering stuff you may be used to, if you’ve used float and flexbox grids. Instead, you can intuitively position your grid items wherever you want.
7. You can even use the grid in _three dimensions_ – because grid items can be stacked by overlapping.

## Fluid Grid Wrapper Classes

<table class="table">
  <thead>
    <tr>
      <th>All viewport widths:</th>
      <th>Viewport widths<br>>= 768px:</th>
      <th>Viewport widths<br>>= 1024px:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.grid</code></td>
      <td><code>.grid-md</code></td>
      <td><code>.grid-lg</code></td>
    </tr>
  </tbody>
</table>

`.grid` instantiates the grid layout. Add (one or more of) these classes to the wrapper block element (e.g. a `<div>`).

That may be all you need, for setting up the wrapper – if you are not interested in having equal column widths. By default, the grid’s widths (and heights) all self-adjust depending on the size or amount of content in grid items – a behavior similar to the way table columns and rows adjust to their content.

### Adding a Gap Between Grid Items

An optional `.grid-gap` adds a gap (gutter) in between grid items, both horizontally and vertically. This gap is equal to the `margin-bottom` on headings, paragraphs, lists and tables (default).

<div class="grid grid-gap mb-3e">
  <div class="col-1 b-thin rounded p-1e bg-theme-2">First grid item</div>
  <div class="col-2 b-thin rounded p-1e bg-theme-2">This is the second grid item with a lot of content</div>
  <div class="col-3 b-thin rounded p-1e bg-theme-2">Third grid item</div>
</div>

```HTML
<div class="grid grid-gap">
  <div class="col-1">First grid item</div>
  <div class="col-2">This is the second grid item with a lot of content</div>
  <div class="col-3">Third grid item</div>
</div>
```

Additionally, if you wish to constrain the width of particular grid item(s), you can go ahead and specify their widths in your stylesheet (e.g. `.sidebar {width: 200px;}`) or by an inline style (e.g. `style="width: 200%"`).

### Equalizing Column Widths

* `.grid-equalize-*`
* `.grid-md-equalize-*`
* `.grid-lg-equalize-*`

The `-equalize-*` modifier class is used to equalize column widths (at different media query widths) – similar to a “distribute columns evenly” function in a word processor or spreadsheet software. (Note: `-equalize-*` only affects columns, not rows.)

With `-equalize-*` columns will each equally expand to occupy the available grid wrapper width. So, two columns will have half-width each; three will have third-width; four will have quarter-width.

E.g. `.grid.grid-md-equalize-4` sets a grid with 4 columns of equal span (constrained 25% each) that kicks in at 768px viewport width.

<img src="img/Codebase-CSS-grid-system.svg" class="mb-3e" />

After you have populated the first row of the grid with item(s) that complete your required number of columns, you can sometimes get away with not specifying the positioning of subsequent grid items – the browser will figure out where to place them.

## Grid-Item Classes

<table class="table">
  <thead>
    <tr>
      <th>All viewport widths:</th>
      <th>Viewport widths<br>>= 768px:</th>
      <th>Viewport widths<br>>= 1024px:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul class="mb-0">
          <li><code>.col-*</code></li>
          <li><code>.row-*</code></li>
          <li><code>.justify-*</code></li>
          <li><code>.align-*</code></li>
        </ul>
      </td>
      <td>
        <ul class="mb-0">
          <li><code>.col-md-*</code></li>
          <li><code>.row-md-*</code></li>
          <li><code>.justify-md-*</code></li>
          <li><code>.align-md-*</code></li>
        </ul>
      </td>
      <td>
        <ul class="mb-0">
          <li><code>.col-md-*</code></li>
          <li><code>.row-md-*</code></li>
          <li><code>.justify-md-*</code></li>
          <li><code>.align-md-*</code></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Column Tracking

Multiple permutations, e.g:

* `.col-md-1` – item occupies a position in column 1 only.
* `.col-md-2-3` – item spans columns 2-3 (i.e. starts at column track 2 and ends at column track 4).
* `.col-md-3-4` – item spans columns 3-4 ( i.e. starts at column track 3 and ends at column track 5).

### Row Tracking

Multiple permutations, e.g:

* `.row-3` – item occupies a position in row 3 only.
* `.row-md-1-2` – item spans columns 1-2 (i.e. starts at row track 1 and ends at row track 3).
* `.row-md-2-3` – item spans rows 2-3 (i.e. starts at row track 2 and ends at row track 4).

<p class="bg-theme-2 p-2e"><b>Note:</b> while you are building your your grid, rows may sometimes not appear to span correctly. E.g. if you have an item that spans multiple rows but you haven’t placed anything else on that row yet, your tall item may not appear to be tall enough (unless you place a lot of content in it). But when you add your other grid items, your layout will all take the shape that you want.</p>

### Justification (horizontal)

Within a grid area (which may span multiple columns) – multiple permutations, e.g:

* `.justify-md-left`
* `.justify-md-right`
* `.justify-md-center`
* `.justify-md-stretch` (default; you only need this if you _unstretched_ it at a smaller viewport width)

### Alignment (vertical)

Within a grid area (which may span multiple rows) – multiple permutations, e.g:

* `.align-md-top`
* `.align-md-bottom`
* `.align-md-center`
* `.align-md-stretch` (default; you only need this if you _unstretched_ it at a smaller viewport width)

## Using the Grid System

Here’s what you actually do:

1. Use `.grid` to instantiate your grid.
    * Optional: use `.grid-gap` if you need a gap between grid items.
    * Optional: use `.grid-*-equalize-*` if you need to constrain the grid layout to equal-width columns.
2. Place your items on the grid, according to their start and end tracks for `.col-*` and `.row-*` (at what viewport width you require).
3. Optional: set `.justify-*` and `.align-*` on an item within its grid area.

Do this for the default grid (as in the steps above) and/or for a grid that kicks in at `md` or `lg`.

## Examples

### Simple

This grid has 3 columns – _on medium viewports and up_. The first three grid items are used to define the layout. The remaining six items will wrap to a second and then a third row, all adopting the pattern set in the first row. Since the columns have not been equalized, column widths will expand or contract according to how much content they have.

<div class="grid mb-3e">
  <div class="col-md-1 b-thin rounded p-1e bg-theme-2">First grid item</div>
  <div class="col-md-2 b-thin rounded p-1e bg-theme-2">Second grid item</div>
  <div class="col-md-3 b-thin rounded p-1e bg-theme-2">Third grid item</div>
  <div class=" b-thin rounded p-1e bg-theme-2">Fourth grid item</div>
  <div class=" b-thin rounded p-1e bg-theme-2">Fifth grid item</div>
  <div class=" b-thin rounded p-1e bg-theme-2">Sixth grid item</div>
  <div class=" b-thin rounded p-1e bg-theme-2">Seventh grid item</div>
  <div class=" b-thin rounded p-1e bg-theme-2">Eighth grid item</div>
  <div class=" b-thin rounded p-1e bg-theme-2">ninth grid item</div>
</div>

```HTML
<div class="grid">
  <div class="col-md-1">First grid item</div>
  <div class="col-md-2">Second grid item</div>
  <div class="col-md-3">Third grid item</div>
  <div>Fourth grid item</div>
  <div>Fifth grid item</div>
  <div>Sixth grid item</div>
  <div>Seventh grid item</div>
  <div>Eighth grid item</div>
  <div>Ninth grid item</div>
</div>
```

### Row spanning

2 columns and 3 rows (on all viewports), with is a gap between columns. The first column will be occupied by the first grid item for its full height (spanning 3 rows). The second column will have 3 items on 3 rows. Column width had been equalized so that each column has half the available width.

<div class="grid grid-equalize-2 grid-gap mb-3e">
  <div class="col-1 row-1-3  b-thin rounded p-1e bg-theme-2">First grid item</div>
  <div class="col-2 row-1 b-thin rounded p-1e bg-theme-2">Second grid item</div>
  <div class="col-2 row-2 b-thin rounded p-1e bg-theme-2">Third grid item</div>
  <div class="col-2 row-3 b-thin rounded p-1e bg-theme-2">Fourth grid item</div>
</div>

```HTML
<div class="grid grid-equalize-2 grid-gap">
  <div class="col-1 row-1-3">First grid item</div>
  <div class="col-2 row-1">Second grid item</div>
  <div class="col-2 row-2">Third grid item</div>
  <div class="col-2 row-3">Fourth grid item</div>
</div>
```

### Easy Layout

Full width header and footer on all viewports. On medium viewports and up: main section left 2/3 width. Sidebar right 1/3 width. And there is a gap between columns.

<main class="grid grid-md-equalize-3 grid-gap mb-3e">
  <header class="col-md-1-3 b-thin rounded p-1e bg-theme-2">Header</header>
  <section class="col-md-1-2 b-thin rounded p-1e bg-theme-2"><h2>Article</h2><p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p></section>
  <nav class="col-md-3 b-thin rounded p-1e bg-theme-2">Sidebar nav</nav>
  <footer class="col-md-1-3 b-thin rounded p-1e bg-theme-2">Footer</footer>
</main>

```HTML
<main class="grid grid-md-equalize-3 grid-gap">
  <header class="col-md-1-3">Header</header>
  <section class="col-md-1-2">Article</section>
  <nav class="col-md-3">Sidebar nav</nav>
  <footer class="col-md-1-3">Footer</footer>
</main>
```

### Complex Layout

Exemplifying grid nesting, column re-ordering and justifying.

<main class="grid grid-md-equalize-4 grid-gap mb-3e">
  <header class="justify-center col-md-1 justify-md-stretch b-thin rounded p-1e bg-theme-2">Header</header>
  <nav class="col-md-2-4 b-thin rounded p-1e bg-theme-2">Primary nav</nav>
  <nav class="col-md-4 col-lg-1 row-md-2-3 b-thin rounded p-1e bg-theme-2">Secondary nav</nav>
  <section class="col-md-1-3 col-lg-2-4 row-md-2-3 b-thin rounded p-1e bg-theme-2">
    <h2>Article</h2>
    <div class="grid grid-md-equalize-3 grid-gap">
      <div class="col-md-1 b-thin rounded p-1e bg-theme-2">Nested</div>
      <div class="col-md-2 b-thin rounded p-1e bg-theme-2">Nested</div>
      <div class="col-md-3 b-thin rounded p-1e bg-theme-2">Nested</div>
    </div>
  </section>
  <footer class="col-1 justify-center col-md-1-4 b-thin rounded p-1e bg-theme-2">Footer</footer>
</main>

```HTML
<main class="grid grid-md-equalize-4 grid-gap">
  <header class="justify-center col-md-1 justify-md-stretch">Header</header>
  <nav class="col-md-2-4">Primary nav</nav>
  <nav class="col-md-1 col-lg-4 row-md-2-3">Secondary nav</nav>
  <section class="col-md-2-4 col-lg-1-3 row-md-2-3">
    <h1>Article</h1>
    <section class="grid grid-md-equalize-3 grid-gap">
      <div class="col-md-1">Nested</div>
      <div class="col-md-2">Nested</div>
      <div class="col-md-3">Nested</div>
    </section>
  </section>
  <footer class="col-1-2 justify-center col-md-1-5">Footer</footer>
</main>
```

Explanation:

1. **Header**
    * justified center on small viewports
    * left &frac14; width (beside primary nav) on medium viewports up
2. **Primary nav**
    * full width on small viewports
    * right &frac34; width (beside header) on medium viewports up
3. **Secondary nav**
    * full width on small viewports
    * left &frac14; width on medium viewports
    * right &frac14; width on large viewports
4. **Main article**
    * as full width block on small viewports
    * right &frac34; width on medium viewports
    * left &frac34; width on large viewports

_Therefore, sidebar and main article switch places when going from medium to large viewports – exemplifying “column reordering”._

5. **Three nested items** (within main article)
    * stacked on small viewports
    * in a row on medium viewports up
6. **Footer** – full width but centered on all viewports

## Grid CSS Classes

<table class="table table-columns table-rows table-nowrap">
  <thead>
    <tr>
      <th>Block (Wrapper) Class</th>
      <th>Element Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>.grid</code><br>
        <code>.grid-gap</code><sup>1</sup><br>
        <code>.grid-equalize-{1...4}</code><sup>2</sup>
      </td>
      <td>
        <code>.col-{1...4}(-{2...4})</code><br>
        <code>.row-{1...4}(-{2...4})</code><br>
        Horizontal alignment within grid areas:<br>
        <code>.justify-left</code><br>
        <code>.justify-center</code><br>
        <code>.justify-right</code><br>
        <code>.justify-stretch</code><br>
        Vertical alignment within grid areas:<br>
        <code>.align-top</code><br>
        <code>.align-middle</code><br>
        <code>.align-bottom</code><br>
        <code>.justify-stretch</code><br>
      </td>
    </tr>
    <tr>
      <td>
        <code>.grid-md</code><br>
        <code>.grid-md-equalize-{1...4}</code>
      </td>
      <td>
        <code>.col-{1...4}(-{2...4})</code><br>
        <code>.row-{1...4}(-{2...4})</code><br>
        Horizontal alignment within grid areas:<br>
        <code>.justify-md-left</code><br>
        <code>.justify-md-center</code><br>
        <code>.justify-md-right</code><br>
        <code>.justify-md-stretch</code><br>
        Vertical alignment within grid areas:<br>
        <code>.align-md-top</code><br>
        <code>.align-md-middle</code><br>
        <code>.align-md-bottom</code><br>
        <code>.justify-md-stretch</code><br>
      </td>
    </tr>
    <tr>
      <td>
        <code>.grid-lg</code><br>
        <code>.grid-lg-equalize-{1...4}</code>
      </td>
      <td>
        <code>.col-{1...4}(-{2...4})</code><br>
        <code>.row-{1...4}(-{2...4})</code><br>
        Horizontal alignment within grid areas:<br>
        <code>.justify-lg-left</code><br>
        <code>.justify-lg-center</code><br>
        <code>.justify-lg-right</code><br>
        <code>.justify-lg-stretch</code><br>
        Vertical alignment within grid areas:<br>
        <code>.align-lg-top</code><br>
        <code>.align-lg-middle</code><br>
        <code>.align-lg-bottom</code><br>
        <code>.justify-lg-stretch</code><br>
      </td>
    </tr>
  </tbody>
</table>

<sup>1</sup> It is assumed that if you want to use <code>.grid-gap</code>, then you will want it to be applied at all viewport widths. (Thus, there is no <code>.grid-md-gap</code> or <code>.grid-lg-gap</code>)<br>
<sup>2</sup> `{1...4}` can be 1, 2, 3 or 4.
