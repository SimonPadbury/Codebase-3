---
title: "Utilities"
prev: "Grid"
prevLink: "3-layout-grid.html"
next: "Components"
nextLink: "5-components.html"
---

<p class="h4 thin">For consistency throughout Codebase, several decoration variables have been defined. These variables have also been incorporated into a set of simple utility classes that can be used to directly add consistent styling to your HTML. You can modify these variables and classes and/or add to them in accordance with the style guide or visual identity of your project.</p>

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <p class="mx-2e my-1e">On this page:</p>
  <ul class="menu">
    <li class="menu-item"><a href="#layout-utilities">Layout</a></li>
    <li class="menu-item"><a href="#spacing-utilities">Spacing</a></li>
    <li class="menu-item"><a href="#border-utilities">Borders</a></li>
    <li class="menu-item"><a href="#color-utilities">Color</a></li>
    <li class="menu-item"><a href="#text-utilities">Text</a></li>
    <li class="menu-item"><a href="#utilities-for-big-text">Big Text</a></li>
    <li class="menu-item"><a href="#form-utilities">Forms</a></li>
    <li class="menu-item"><a href="#invisibility-utilities">Invisibility</a></li>
  </ul>
</div>

<p class="bg-theme-2 p-2e"><b>Hat tip</b>: The idea for Codebase decoration utilities was inspired by <a href="https://basscss.com" target="_blank">BASCSS</a>, <a href="https://tachyons.io" target="_blank">Tachyons</a> and <a href="https://getbootstrap.com" target="_blank">Bootstrap&nbsp;4</a>’s utilities.</p>

**Notes:**

1. If you know you will never use the decoration utility classes, then you can override the `$include-css-decoration-utilities` to false (see `codebase/scss/00_default-variables/_default-variables.scss`).
2. Codebase decoration utility classes are not responsive to viewport sizes.
3. CSS nesting can cause other styling (from Codebase or your own CSS) to override decoration utility classes.

    Example – this CSS rule will be overridden by the utility class on the `<h4>`:

    ```HTML
    <style>
    h4 {
      border: 0;
    }
    </style>
    <h4 class="b-thick">Example: this h4 has a thick border</h4>
    ```

    <h4 class="b-thick">Example: this h4 has a thick border</h4>

    But this CSS rule will override the utility class on the `<h4>`:

    ```HTML
    <style>
    .infobox h4 {
      border: 0;
    }
    </style>
    <div class="infobox">
      <h4 class="b-thick">Gotcha: this h4 has no border. Why?</h4>
    </div>
    ```

    <style>
    .infobox h4 {
      border: 0;
    }
    </style>

    <div class="infobox">
      <h4 class="b-thick">Gotcha: this h4 has no border. Why?</h4>
    </div>

## Layout Utilities

### Blocks

`.block` – makes any element behave as a block element.

<span class="block bg-theme-2 p-2e">This is a <code class="b-thin">span</code> element (normally an inline element).</span>

`.inline-block` – makes any element behave as an inline-block element.
This is a div element (normally a block element).

<div class="inline-block bg-theme-2 mb-3e p-2e">This is a <code class="b-thin">div</code> element (normally a block element).</div>

### Floats

<div class="float-right">
  <div class="bg-theme-2 p-2e">This is an example of <code class="b-thin">.float-right</code></div>
</div>
<p>Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.</p>

<div class="float-left">
  <div class="bg-theme-2 p-2e">This is an example of <code class="b-thin">.float-left</code></div>
</div>
<p>Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.</p>

**Note:** These outer blocks above have `.clearfix`.

## Spacing Utilities

Codebase decoration utilities for margins and paddings have been set using a `$spacing` SCSS map, with values as follows:

<table class="table">
  <thead>
    <tr>
      <th>Spacing class suffix</th>
      <th>Value</th>
    </tr>
  </thead>
  <body>
    <tr>
      <td><code>-0</code></td>
      <td>0 (for removing margins or paddings</td>
    </tr>
    <tr>
      <td><code>-He</code></td>
      <td>0.25rem</td>
    </tr>
    <tr>
      <td><code>-1e</code></td>
      <td>0.5rem</td>
    </tr>
    <tr>
      <td><code>-2e</code></td>
      <td>1rem</td>
    </tr>
    <tr>
      <td><code>-3e</code></td>
      <td>1.5rem</td>
    </tr>
    <tr>
      <td><code>-6e</code></td>
      <td>3rem</td>
    </tr>
    <tr>
      <td><code>-9e</code></td>
      <td>4.5rem</td>
    </tr>
  </body>
</table>

Margins and paddings utility class prefixes:

<div class="grid grid-gap grid-columns-2">
  <div class="col-1 mb-3e">
    <ul>
      <li>Margins all: <code>m-*</code></li>
      <li>Margin top: <code>mt-*</code></li>
      <li>Margin right: <code>mr-*</code></li>
      <li>Margin bottom: <code>mb-*</code></li>
      <li>Margin left: <code>ml-*</code></li>
      <li>Margins top and bottom: <code>my-*</code></li>
      <li>Margins left and right: <code>mx-*</code></li>
    </ul>
    <p>Margin examples:</p>
    <div class="mb-1e b-thin">
      <div class="mr-0 bg-theme-2">.mr-0</div>
    </div>
    <div class="mb-1e b-thin">
      <div class="mr-He bg-theme-2">.mr-He</div>
    </div>
    <div class="mb-1e b-thin">
      <div class="mr-1e bg-theme-2">.mr-1e</div>
    </div>
    <div class="mb-1e b-thin">
      <div class="mr-2e bg-theme-2">.mr-2e</div>
    </div>
    <div class="mb-1e b-thin">
      <div class="mr-3e bg-theme-2">.mr-3e</div>
    </div>
    <div class="mb-1e b-thin">
      <div class="mr-6e bg-theme-2">.mr-6e</div>
    </div>
    <div class="mb-1e b-thin">
      <div class="mr-9e bg-theme-2">.mr-9e</div>
    </div>
  </div>
  <div class="col-2 mb-3e">
    <ul>
      <li>Paddings all: <code>p-*</code></li>
      <li>Padding top: <code>pt-*</code></li>
      <li>Padding right: <code>pr-*</code></li>
      <li>Padding bottom: <code>pb-*</code></li>
      <li>Padding left: <code>pl-*</code></li>
      <li>Paddings top and bottom: <code>py-*</code></li>
      <li>Paddings left and right: <code>px-*</code></li>
    </ul>
    <p>Padding examples:</p>
    <div class="mb-1e bg-theme-2 pl-0">
      <div class="b-thin">.pl-0</div>
    </div>
    <div class="mb-1e bg-theme-2 pl-He">
      <div class="b-thin">.pl-He</div>
    </div>
    <div class="mb-1e bg-theme-2 pl-1e">
      <div class="b-thin">.pl-1e</div>
    </div>
    <div class="mb-1e bg-theme-2 pl-2e">
      <div class="b-thin">.pl-2e</div>
    </div>
    <div class="mb-1e bg-theme-2 pl-3e">
      <div class="b-thin">.pl-3e</div>
    </div>
    <div class="mb-1e bg-theme-2 pl-6e">
      <div class="b-thin">.pl-6e</div>
    </div>
    <div class="mb-1e bg-theme-2 pl-9e">
      <div class="b-thin">.pl-9e</div>
    </div>
  </div>
</div>

### Horizontal Centering

`.mx-auto`

This class applies `margin-right: auto, margin-left: auto` to push an item into the center. This class also sets the element to `display:block !important` – so, you can use it to make inline elements behave as block elements.

<div class="mb-3e b-thin">
  <div class="mx-auto bg-theme-2" style="width:75%;">.mx-auto</div>
</div>

### Block Padding

Table cells (`th` and `td`), menu-item hyperlinks (`.menu-item a{}`) and megamenu parent hyperlinks already have built into them the same “block padding” – `padding: 0.5rem 1rem;`.

This same block padding is available as the utility class `.p-block`:

<div class="mb-3e b-thin p-block">This has block padding supplied by the utility class <code>.p-block</code>.</div>

(Buttons also appear to have this same block padding but they do not. The height of the default button comes entirely from its line-height.)

### Extra Line Spacing

You may sometimes need to add extra spacing above or below an element equivalent to the spacing between paragraphs (i.e. one line height, or 1.5rem).

This can be done by top or bottoms margin or padding, using the element grid suffix `-3e`:

As margins:

<div class="mb-3e b-thin">
  <div class="mt-3e bg-theme-2">.mt-3e</div>
</div>

<div class="mb-3e b-thin">
  <div class="mb-3e bg-theme-2">.mb-3e</div>
</div>

As paddings:

<div class="mb-3e bg-theme-2 pt-3e">
  <div class="b-thin p--4">.pt-3e</div>
</div>

<div class="mb-3e bg-theme-2 pb-3e">
  <div class="b-thin p--4">.pb-3e    </div>
</div>

## Border Utilities

A few simple border styles.

* borders all `b-*`
* border-top `bt-*`
* border-right `br-*`
* border-bottom `bb-*`
* border-left `bl-*`

Examples:

<div class="mb-1e p-1e b-thin b-0"> <code>.b-0</code> (0px – for removing borders)</div>

<div class="mb-1e p-1e b-thin"> <code>.b-thin</code> – 0.0625rem (1px default)</div>

<div class="mb-1e p-1e b-thick mb-3e"> <code>.b-thick</code> – 0.25rem (4px default)</div>

By default, borders are light gray. Borders can be assigned other colors in the Codebase swatch using `b-{color}` classes. See [color utilities](#color-utilities).

### Border Enhancements

For these it has been decided to drop the `.b-` prefix in order to avoid confuson when applied to borderless elements, buttons and form elements.

<div class="grid-md grid-gap grid-md-equalize-3 center">
  <div class="col-md-1 mb-3e">
    <div class="mx-auto p-1e b-thin rounded" style="width:100px;height:100px;"></div>.rounded <br> <span class="t-theme-3">border-radius<br>= 0.25rem<br>(4px default)</span>
  </div>
  <div class="col-md-2 mb-3e">
    <div class="mx-auto p-1e b-thin circle" style="width:100px;height:100px;"></div>.circle <br> <span class="t-theme-3">This will produce an ellipse if the block element is not a square.</span>
  </div>
  <div class="col-md-3 mb-3e">
    <div class="mx-auto p-1e b-thin pill" style="width:100px;">&nbsp;</div>.pill <br> <span class="t-theme-3">This will round the left and right of buttons, form elements, etc. where the content width is greater then its height.</span>
  </div>
</div>

## Color Utilities

### UI Colors

Codebase’s default variable file contains five color swatches are that are used for the Codebase UI colors (i.e. <span class="label primary">primary</span>, <span class="label secondary">secondary</span>, <span class="label success">success</span>, <span class="label warning">warning</span>, and <span class="label danger">danger</span>.

Codebase UI colors can be deployed by CSS classes of the same name: `.primary`, `.secondary`, `.success`, `.warning` and `.danger`. See [default colors](1-getting-started.html#default-colors).

These UI colours can be used for [buttons](5-components-buttons.html), [badges and labels](5-components-badges-and-labels.html) – or anything else that you need to give UI colors to.

Example using buttons:

```HTML
<button class="btn primary">Primary</button>
<button class="btn secondary">Secondary</button>
<button class="btn success">Success</button>
<button class="btn warning">Warning</button>
<button class="btn danger">Danger</button>
```

<div class="bg-theme-2 mb-3e p-2e">
  If you simply use the UI color names as classes (see above), you will automatically get text colored white. <em>This includes any descendant hyperlink</em> within any element assigned one of these UI color classes. E.g. menu items within a menu will have white text.<br><br>
  (However, the utility classes below do not automatically color the text white – their text will be its default color.)
</div>

### UI and Theme Color Utilities

These five UI color swatches plus the theme colors (a grayscale) have also been used for the Codebase decoration utility classes:

<div class="flexbox mb-1e">
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="primary p-3e">&nbsp;</div>
    <div class="m-1e center">primary</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="secondary p-3e">&nbsp;</div>
    <div class="m-1e center">secondary</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="success p-3e">&nbsp;</div>
    <div class="m-1e center">success</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="warning p-3e">&nbsp;</div>
    <div class="m-1e center">warning</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width:116px">
    <div class="danger p-3e">&nbsp;</div>
    <div class="m-1e center">danger</div>
  </div>
</div>

The default ui colors are slightly lighter for dark mode.

The primary color is also used for the default <a>hyperlink</a> color.

<div class="flexbox mb-3e">
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-1 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-1</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-2 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-2</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-3 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-3</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-4 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-4</div>
  </div>
  <div class="m-1e b-thin rounded" style="min-width: 116px">
    <div class="bg-theme-5 p-3e">&nbsp;</div>
    <div class="m-1e center">theme-5</div>
  </div>
</div>

### Applying Color Utility Classes to Elements

Codebase also has utility classes for background, border and text color.

Backgrounds: `.bg-{colorname}`:

<p class="p-2e bg-primary"><code>.bg-primary</code></p>

Borders: `.b-{colorname}` (will only do someting if your element has a border):

<p class="p-2e b-thick b-danger"><code>.b-danger</code> (and here the border has also been thickened using <code>.b-thick</code>)</p>

Text `.t-{colorname}`:

<p class="t-success t-dark"><code>.t-success</code> Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>

<table class="table">
  <thead>
    <th>Class Prefix</th>
    <th>Color Name</th>
  </thead>
  <tbody>
    <tr>
      <td style="min-width: 160px">
        <p><b>Background color</b> <code>.bg-</code></p>
        <p><b>Text color</b> <code>.t-</code></p>
        <p><b>Border color</b> <code>.b-</code></p>
      </td>
      <td>
        <code>primary</code><br>
        <code>secondary</code><br>
        <code>success</code><br>
        <code>warning</code><br>
        <code>danger</code><br>
        <code>theme-1</code><br>
        <code>theme-2</code><br>
        <code>theme-3</code><br>
        <code>theme-4</code><br>
        <code>theme-5</code>
      </td>
    </tr>
  </tbody>
</table>

### Advanced (SCSS) Users

All Codebase color utilities are here simply to get you started. You can override and improve them in your own website design as you make progress.

You need to copy (a.) the whole set of color variables and (b.) the SCSS map into your styles. Then during pre-processing, the class-builders in `codebase/scss/04_decoration/_colors.scss` will generate all the decoration utility classes for colored backgrounds, borders and text.

By overriding the color variables and the SCSS map in this way, you have complete freedom to:

* Add more color classes
* Remove classes for colors that you never use
* Change color class names
* Change color values

See [The Codebase SCSS Library](1-getting-started.html#the-codebase-scss-library).

## Text Utilities

Codebase has several simple text utility classes.

### Inline Text Utility Classes

`.bolder` <span class="bolder">Bolder text (default 900)</span>

`.bold` <span class="bold">Bold text (default 700)</span> (same as `<b>` and `<strong>`)

`.normal` <span class="bold italics">Returns text to normal weight (default 400) and removes italicization. <span class="normal">Perhaps you may find this useful</span> in some circumstances.</span>

`.thin` <span class="thin">Thin text (default 200)</span>

`.italics` <span class="italics">Italics text</span> (same as `<i>` and `<em>`)

<span class="bolder">Bolder • <span class="italics">Italics</span></span><br>
<span class="bold">Bold • <span class="italics">Italics</span></span><br>
<span class="normal">Normal • <span class="italics">Italics</span></span><br>
<span class="thin">Thin • <span class="italics">Italics</span></span>

`.uppercase` <span class="uppercase">Text in uppercase (all capitals)</span>

`.big` Big text for making <span class="big">something</span> stand out. (This class works for both inline and block elements – see [Utilities for Big Text](#utilities-for-big-text).)

`.small`  Small text for <span class="small">small print</span>.

### Block Text Utility Classes

<div class="h1"><code>.h1</code> Heading level 1</div>

<div class="h2"><code>.h2</code> Heading level 2</div>

<div class="h3"><code>.h3</code> Heading level 3</div>

<div class="h4"><code>.h4</code> Heading level 4</div>

<div class="h5"><code>.h5</code> Heading level 5</div>

<div class="h6"><code>.h6</code> Heading level 6</div>

`.left`

<p class="left">Lorem ipsum dolor sit amet...</p>

`.center`

<p class="center">Lorem ipsum dolor sit amet...</p>

`.right`

<p class="right">Lorem ipsum dolor sit amet...</p>

## Utilities for Big Text

Codebase big typography has been developed for long-read articles.

There are two ways to deploy big typography in Codebase:

### (1.) The `.big` Inline Element Class

If you want to emphasize <span class="big">some inline text</span> by increasing the font size, Codebase can do this by applying `.big` to an inline tag (e.g. `<span class="big">`).

When used inline, the `.big` class increases its inherited font size by 125%.

### (2.) The `.big` Container Element Class

Codebase can render big typography simply by wrapping any HTML within a block element (e.g. `<div>`) that has class `.big`. Everything within the wrapper will have big typography applied.

When used on a wrapper, the `.big` class increases its inheritable font size by 125% (good for paragraphs, list items, table cells etc.) and it increases heading sizes as exemplified below.

Therefore, as the default font size (1rem) in Codebase is 16px, this makes the `.big` default font size to be 20px. (You can change either of these in `codebase/scss/01_basics/__default-variables.scss`.)

<div class="grid-md grid-equalize-2 grid-gap">
  <div class="col-1">
    <p>Normal typography sizes:</p>
    <h1>Heading h1</h1>
    <h2>Heading h2</h2>
    <h3>Heading h3</h3>
    <h4>Heading h4</h4>
    <h5>Heading h5</h5>
    <h6>Heading h6</h6>
    <p>Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus.</p>
    <p>Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.</p>
  </div>
  <div class="col-2">
    <p>Big typography sizes:</p>
    <div class="big">
      <h1>Heading h1</h1>
      <h2>Heading h2</h2>
      <h3>Heading h3</h3>
      <h4>Heading h4</h4>
      <h5>Heading h5</h5>
      <h6>Heading h6</h6>
      <p>Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus.</p>
      <p>Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.</p>
    </div>
  </div>
</div>

You can also increase the font size of smaller elements `.h1` to `.h6` [block text utility classes](#block-text-utility-classes).

## Form Utilities

### Form Elements as Full-Width Blocks

Block width form element using the `.block` utility. See [Layout Utilities](#layout-utilities).

<label for="text-example">Text:</label>
<input id="text-example" class="block" name="examplename" placeholder="Example text input field" type="text">

<label for="textarea-example">Textarea:</label>
<textarea id="textarea-example" class="block" name="examplename" type="password" placeholder="Example textarea" rows="4"></textarea>

### Form Element Sizing

Sizing using the `.small` and `.big` text utility classes. See [Text Utilities](#text-utilities).

<p><code>.small</code> <input class="small" id="text-example" name="examplename" placeholder="Example text input field" type="text"></p>

<p>(Default) <input id="text-example" name="examplename" placeholder="Example text input field" type="text"></p>

<p><code>.big</code> <input class="big" id="text-example" name="examplename" placeholder="Example text input field" type="text"></p>

### Form Element Border Modifications

Border modifications using [border utilities](#border-utilities).

`.b-thick`

<p><input class="b-thick" id="text-example" name="examplename" placeholder="Example text input field" type="text"></p>

`.pill`

<p><input class="pill" id="text-example" name="examplename" placeholder="Example text input field" type="text"></p>

## Invisibility Utilities

A range of invisibility mixins and classes have been built based on the Codebase media query breakpoint variables.

<p class="center"><i class="fas fa-times"></i> = invisible (hidden) &nbsp; <i class="fas fa-check"></i> = visible</p>

<table class="table">
  <thead>
    <tr>
      <th>Mixin / Class</th>
      <th>Example</th>
      <th>sm<br><span class="normal">(&lt;= 767px)</span></th>
      <th>md<br><span class="normal">(768px-1023px)</span></th>
      <th>lg<br><span class="normal">(&gt;= 1024px)</span></th>
    </tr>
  </thead>
  <tbody>
    <tr class="bt-thick">
      <td><code>hide-sm-down</code></td>
      <td>
        <div class="hide-sm-down p-block success white invisibility-example">Example</div>
      </td>
      <td><i class="fas fa-times"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
    <tr>
      <td><code>hide-md-down</code></td>
      <td>
        <div class="hide-md-down p-block success white invisibility-example">Example</div>
      </td>
      <td><i class="fas fa-times"></i></td>
      <td><i class="fas fa-times"></i></td>
      <td><i class="fas fa-check"></i></td>
    </tr>
    <tr class="bt-thick">
      <td><code>hide-md-up</code></td>
      <td>
        <div class="hide-md-up p-block success white invisibility-example">Example</div>
      </td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-times"></i></td>
      <td><i class="fas fa-times"></i></td>
    </tr>
    <tr>
      <td><code>hide-lg-up</code></td>
      <td>
        <div class="hide-lg-up p-block success white invisibility-example">Example</div>
      </td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-check"></i></td>
      <td><i class="fas fa-times"></i></td>
    </tr>
  </tbody>
</table>

Notes:

1. **There are no Codebase** `.show-` **classes**. Therefore, if you need something to be visible only at some viewport widths and not others, then what you need to do is use the appropriate `.hide-*` class so that it will not be visible at viewport widths where you don’t want it to be.

2. If you need something to be visible only at a mid-range viewport width, then use two `.hide-*` classes: one to hide the thing at lower viewport widths and one to hide it at higher viewport widths.

E.g.:

```HTML
// A div that is ONLY visible at medium viewport widths:

<div class="hide-md-down hide-lg-up"> ... </div>
```

<p class="bg-theme-2 p-2e">For an example of where this has been done, see the <b>viewport width indicator</b> (fixed to the bottom-right corner) in these docs.</p>
