---
title: Cards
prev: "Offcanvas"
prevLink: "/5-components/offcanvas.html"
next: "Tables"
nextLink: "/5-components/tables.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#the-simplest-card">The Simplest Card</a></li>
    <li class="menu-item"><a href="#horizontal-or-vertical-cards">Horizontal or Vertical Cards</a></li>
    <li class="menu-item"><a href="#adding-a-header-footer-and-multiple-sections">Adding a Header, Footer, and Multiple Sections</a></li>
    <li class="menu-item"><a href="#card-overlay">Card Overlay</a></li>
    <li class="menu-item"><a href="#cards-with-constrained-height">Cards with Constrained Height</a></li>
    <li class="menu-item"><a href="#cards-can-be-nested">Cards Can Be Nested</a></li>
    <li class="menu-item"><a href="#card-classes">Card Classes</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase cards are a flexbox implementation of Nicole Sullivan’s <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/" target="_blank">media objects</a>, with some added features for a wide range of applications.</p>

## The Simplest Card

<div class="card">
  <a class="card-image card-image-left" href="#/">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="96" height="96" style="max-width: 100%; height: auto; background: #eee">
      <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
      <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
    </svg>
  </a>
  <div class="card-body">
    <h4>Card Title</h4>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
  </div>
</div>

<p class="bg-theme-2 p-2e"><b>Note:</b> Codebase cards have no decorative styling – you are free to add your own, or use Codebase <a href="4-utilities/utilities.html">utility classes</a> for margin, border, padding, background color, etc.</p>

```HTML
<div class="card">

  <a href="" class="card-image card-image-left">
    <img src="" alt="">
  </a>

  <div class="card-body">
    <h4>Card Title</h4>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>

</div>
```

Card images can have `.card-image-left` or `.card-image-right`. This changes the flexbox order of the image. However, if your card image spans the whole width of the card, then you don’t need these modifier classes.

## Horizontal or Vertical Cards

By default, cards display their main content (the image and the body) arranged horizontally, as 'columns'. But if your card image is wide enough, or if the card width is (constrained) narrow enough, then the card columns wrap to become rows.

<div class="grid grid-gap">
  <div class="col-md-1">
    <div class="card b-thin rounded">
      <a class="card-image" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="300" height="200" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg>
      </a>
      <div class="card-body p-2e">
        <h4 class="card-title">Card Title</h4>
        <div class="card-text">
          <p>
            Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-2">
    <div class="card b-thin rounded">
      <a class="card-image" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="300" height="200" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg>
      </a>
      <div class="card-body p-2e">
        <h4 class="card-title">Card Title</h4>
        <div class="card-text">
          <p>
            Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card b-thin rounded">
      <a class="card-image" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="300" height="200" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg>
      </a>
      <div class="card-body p-2e">
        <h4 class="card-title">Card Title</h4>
        <div class="card-text">
          <p>
            Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

```HTML
<div class="card">

  <a href="" class="card-image">
    <img src="" alt="">
  </a>

  <div class="card-body">
    <h4>Card Title</h4>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>

</div>
```

Also, you can force card layout to become vertical even if your card image is too narrow, by adding the modifier class `.card-vertical` to the component container.

<div class="card card-vertical b-thin rounded-1e p-2e">
  <a class="card-image" href="#/">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="250" height="125" style="max-width: 100%; height: auto; background: #eee">
      <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
      <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
    </svg>
  </a>
  <div class="card-body">
    <h4>Card Title</h4>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
  </div>
</div>

Additionally, for vertically arranged cards (accomplished by either mothod above) you can set `.card-image-top` or `.card-image-bottom` – instead of setting `.card-image-left` or `.card-image-right`.

<div class="grid grid-gap">
  <div class="col-md-1">
    <div class="card card-vertical b-thin p-2e">
      <a class="card-image card-image-top" href="#/">
        <svg class="mt-2e b-circle" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="125" height="125" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg>
      </a>
      <div class="card-body">
        <h4>Card Title</h4>
        <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
      </div>
    </div>
  </div>
  <div class="col-md-2">
    <div class="card card-vertical b-thin p-2e">
      <a class="card-image card-image-bottom" href="#/">
        <svg class="mb-2e b-circle" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="125" height="125" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg>
      </a>
      <div class="card-body">
        <h4>Card Title</h4>
        <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
      </div>
    </div>
  </div>
</div>

## Adding a Header, Footer, and Multiple Sections

Codebase cards can easily accommodate headers and footers, using `.card-header` and `.card-footer`.

<div class="grid grid-gap">
  <div class="col-md-1">
    <div class="card b-thin rounded">
      <div class="card-header bb-thin p-block">Header</div>
        <a class="card-image card-image-right" href="#/">
          <svg class="m-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="96" height="96" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line></svg>
        </a>
      <div class="card-body m-2e">
        <h4>Card Title</h4>
        <p>Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
      </div>
      <div class="card-footer bt-thin p-block">Footer</div>
    </div>
  </div>
  <div class="col-md-2">
    <div class="card b-thin rounded" style="max-width: 400px">
      <div class="card-header bb-thin p-block">Header</div><a class="card-image" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="400" height="200" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg></a>
      <div class="card-body p-2e">
        <h4>Card Title</h4>
        <p>Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. </p>
      </div>
      <div class="card-footer bt-thin p-block">Footer</div>
    </div>
  </div>
</div>

```HTML
<div class="card">

  <div class="card-header">Header</div>

  <a href="" class="card-image card-image-right" >
    <img src="" alt="">
  </a>

  <div class="card-body">
    <h4>Card Title</h4>
    <p>Lorem ipsum dolor sit amet...</p>
  </div>

  <div class="card-footer">Footer</div>

</div>
```

If your require multiple mid-sections within your card, comply use a few `.card-section` classed elements instead of one `.card-body`.

<div class="grid">
  <div class="col-md-2-3">
    <div class="card card-vertical b-thin rounded" style="max-width: 400px">
      <div class="card-header bb-thin p-block">Header</div>
      <div class="card-section bb-thin p-2e">
        <h4 class="mb-0">Card Title</h4>
      </div>
      <div class="card-section bb-thin p-2e">
        Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in.
      </div>
      <div class="card-section bb-thin p-2e">
        Imperdiet evertitur no usu, his te suavitate salutatus.
      </div>
      <div class="card-section bb-thin p-2e">
        Nullam ridens deterruisset an duo.
      </div>
      <div class="card-section p-2e">
        Cum harum insolens ei, cum probo placerat praesent et.
      </div>
      <div class="card-footer bt-thin p-block">Footer</div>
    </div>
  </div>
</div>

## Card Overlay

The class `.card-overlay` can be used to insert a block of (e.g. text) on a layer over the other content within the card (e.g. over the image).

<div class="grid grid-gap">
  <div class="col-md-1">
    <p><code>.card-overlay-top</code></p>
    <div class="card" style="max-width: 400px"><a class="card-image" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="400" height="400" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg></a>
      <div class="card-overlay card-overlay-top">Card overlay text (top)</div>
    </div>
  </div>
  <div class="col-md-2">
    <p><code>.card-overlay-middle</code></p>
    <div class="card" style="max-width: 400px"><a class="card-image" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="400" height="400" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg></a>
      <div class="card-overlay card-overlay-middle">Card overlay text (middle)</div>
    </div>
  </div>
  <div class="col-md-3">
    <p><code>.card-overlay-bottom</code></p>
    <div class="card" style="max-width: 400px"><a class="card-image" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="400" height="400" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg></a>
      <div class="card-overlay card-overlay-bottom">Card overlay text (bottom)</div>
    </div>
  </div>
</div>

Notes on usage of the card overlay:

1. The card overlay must have less/smaller content than the other content that it is overlaying. (In these examples above: an image is being overlayed by text – too much text would stick out beyond the image.)
2. If you need to use the card overlay with the header header and/or footer, be aware of the fact that the overlay will overlay the header and/or footer too. If this is a problem for your design, then you need to **add an extra container around the overlay**, and give it CSS `position: relative`. (But exclude the header and/or footer from this extra container.)

## Cards With Constrained Height

If the height of a card is constrained (by a stated height on itself or on a container), then the `.card-body` has auto overflow scrolling (vertical). (**Note:** `.card-section` does not have this same behavior.)

<div class="grid">
  <div class="col-md-2">
    <div class="card card-vertical b-thin" style="height: 335px; max-width: 400px">
      <div class="card-header bb-thin p-block">Header</div>
      <div class="card-body p-2e">
        <h4>This Card has a Scrollable Body</h4>
        <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim.</p>
        <p>Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
        <p>Movet voluptaria voluptatum has at, qui cu timeam ancillae democritum. Ad veniam detraxit his. In est bonorum fabulas deleniti, eam ex soluta verear albucius. Sale aperiri repudiandae eu cum, at cum sint dicunt. Prima tibique constituto cum ne, quidam dolorem detraxit pro no, sea an aeque zril.</p>
        <p>Et ponderum tacimates vim. Laudem ornatus intellegam no cum. Porro omittantur pro te. Iisque mandamus ei eum. Pri idque iudico appetere ex. Has no altera veritus civibus.</p>
        <p>At civibus aliquando usu. Vide libris has ut, eum illum luptatum ad. Quando scripta nusquam est te. Eleifend principes pertinacia sed cu, vix ut meis diceret salutandi, ea inermis ocurreret voluptatibus eam. Ei vidisse conclusionemque eam, vix eros mediocrem at. Graeco laboramus te mea, ius fabellas consequat voluptatum et.</p>
      </div>
      <div class="card-footer bt-thin p-block">Footer</div>
    </div>
  </div>
</div>

## Cards Can Be Nested

There may be some circumstances where you need to "nest" cards – or place smaller card(s) "inside" a bigger card. As Codebase cards are media objects, you would expect to be able to do this and you can, easily.

<div class="card mt-6e">
  <a class="card-image card-image-left pr-1e" href="#/">
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="96" height="96" style="max-width: 100%; height: auto; background: #eee">
      <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
      <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
    </svg>
  </a>
  <div class="card-body">
    <h4 class="mb-1e">Card Title</h4>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
    <div class="card">
      <a class="card-image card-image-left pr-1e" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="96" height="96" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg>
      </a>
      <div class="card-body">
        <h4 class="mb-1e">Card Title</h4>
        <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
      </div>
    </div>
    <div class="card">
      <a class="card-image card-image-left pr-1e" href="#/">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="96" height="96" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg>
      </a>
      <div class="card-body">
        <h4 class="mb-1e">Card Title</h4>
        <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
      </div>
    </div>
  </div>
</div>

```HTML
<div class="card">

  <a href="" class="card-image card-image-left" >
    <img src="" alt="Square Thumbnail">
  </a>

  <div class="card-body">
    <h4>Card Title</h4>
    <p>Lorem ipsum dolor sit amet...</p>
    
    <!-- Place nested `.card` here ... -->
    
  </div>

</div>
```

## Card Classes

<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Explanation</th>
      <th>Modifiers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.card</code></td>
      <td>
        <the>card component wrapper</the>
      </td>
      <td><code>.card-vertical</code> for vertical alignment of elements in the card body</td>
    </tr>
    <tr>
      <td><code>.card-image</code></td>
      <td>
        <the>card image class can be applied to the image itself, or to an anchor (hyperlink) wrapper.</the>
      </td>
      <td><code>.card-left</code> or <code>.card-right</code> <br> for cards with horizontally arranged body <br>
        <code>.card-top</code> or <code>.card-bottom</code> <br> for cards with vertically arranged body
      </td>
    </tr>
    <tr>
      <td><code>.card-header</code></td>
      <td>Card header</td>
      <td></td>
    </tr>
    <tr>
      <td><code>.card-body</code></td>
      <td>Card body. For the main text content of the card.</td>
      <td></td>
    </tr>
    <tr>
      <td><code>.card-section</code></td>
      <td>Alternative for card body. Use when you reqire a "multi-segmented" card.</td>
      <td></td>
    </tr>
    <tr>
      <td><code>.card-footer</code></td>
      <td>Card footer</td>
      <td></td>
    </tr>
    <tr>
      <td class="nowrap"><code>.card-overlay</code></td>
      <td></td>
      <td><code>.card-overlay-top</code>, <code>.card-overlay-top</code> or <code>.card-overlay-bottom</code> for positioning the content of the overlay</td>
    </tr>
  </tbody>
</table>

