---
title: "Offcanvas Side Panels"
prev: "Megamenus"
prevLink: "5-components-megamenus.html"
next: "Cards"
nextLink: "5-components-cards.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#the-simplest-offcanvas">The Simplest Offcanvas</a></li>
    <li class="menu-item"><a href="#controlling-the-offcanvas-content-width">Controlling the Offcanvas Content Width</a></li>
    <li class="menu-item"><a href="#deactivating-an-offcanvas-component-above-a-media-query-viewport-width">Deactivating an Offcanvas Component Above a Media Query Viewport Width</a></li>
    <li class="menu-item"><a href="#offcanvas-classes">Offcanvas Classes</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase offcanvas panels are a <a href="5-components-activator.html">activator</a> components using <code>data-content-id="{identifier}"</code> for specificity.</p>

## The Simplest Offcanvas

Example 1 – click this button: <span class="offcanvas-ctrl" data-content-id="oc-example"><span class="btn btn-icon small"><span class="far fa-caret-square-left"></span></span></span>

<div class="offcanvas-content offcanvas-content-left p-3e bg-theme-2" id="oc-example" style="width:1000px">
  <div class="offcanvas-close offcanvas-close-right">
    <span class="fas fa-times"></span>
  </div>
  <h3>This is an Offcanvas Side Panel</h3>
  <p>In this simple example, no width has been specified. Therefore it will expand to the width required for its content (i.e. the text you are currently reading), up to <code class="b-thin">max-width: 1000px</code>.</p>
  <p>Click the <span class="fas fa-times"></span> icon above-right to dismiss. Alternatively, if there is any of your device screen not covered by this panel, then you can "click outside to dismiss".</p>
</div>

```HTML
<div class="offcanvas">
  <div class="offcanvas-ctrl offcanvas-ctrl-right" data-content-id="offcanvas-example">
    <span class="far fa-caret-square-left"></span>
  </div>

  <div id="offcanvas-example" class="offcanvas-content offcanvas-content-right">

    <div class="offcanvas-close offcanvas-close-left">
      <span class="fas fa-times"></span>
    </div>

    <!-- Offcanvas (e.g. sidebar) content -->

  </div>
</div>
```

You will need to specify whether the content of the offcanvas side panel is to slide in from the left or right – and you must also position its respective controller on the same side as what the content will slide in from).

You will also need to add an offcanvas control (e.g. navicon) for toggling the side panel. Be sure to set the offcanvas control code `data-control_id=""` to point to its respective offcanvas content `id=""`.

It is possible to have more than one offcanvas side panel component. But only one can be activated at any one time.

## Controlling the Offcanvas Content Width

The offcanvas content block will "stretch to fit" the width of whatever content you put inside it (up to 100% width).

You can also control the offcanvas content block width in your own stylesheet.

<p class="bg-theme-2 p-2e"><b>Note:</b> The <code>.offcanvas-content</code> slides offcanvas to a width of <span class="bold">110%</span> of the content width. The extra 10% ensures that a box-shadow on the content will also be hidden offcanvas.</p>

The following demos operate as offcanvas sidebars at all viewport widths:

Example 2 – this offcanvas side panel is only as wide as its content requires: <span class="offcanvas-ctrl mb-3e" data-content-id="oc-ex-2"><span class="btn btn-icon small"><span class="far fa-caret-square-right"></span></span></span>

<div class="offcanvas-content offcanvas-content-right bg-theme-2 p-2e" id="oc-ex-2">
  <div class="offcanvas-close offcanvas-close-left"><span class="fas fa-times"></span></div>Example 2: offcanvas side panel content.
</div>

Example 3 – this offcanvas side panel has `style="width:200px"`: <span class="offcanvas-ctrl mb-3e" data-content-id="oc-ex-3"><span class="btn btn-icon small"><span class="far fa-caret-square-right"></span></span></span>

<div class="offcanvas-content offcanvas-content-right bg-theme-2 p-2e" id="oc-ex-3" style="width:200px">
  <div class="offcanvas-close offcanvas-close-left"><span class="fas fa-times"></span></div>
  Example 3: offcanvas side panel content
</div>

Example 4 – this offcanvas side panel has `style="width:75%"`: <span class="offcanvas-ctrl mb-3e" data-content-id="oc-ex-4"><span class="btn btn-icon small"><span class="far fa-caret-square-right"></span></span></span>

<div class="offcanvas-content offcanvas-content-right bg-theme-2 p-2e" id="oc-ex-4" style="width:75%">
  <div class="offcanvas-close offcanvas-close-left"><span class="fas fa-times"></span></div>Example 4: offcanvas side panel content
</div>

## Deactivating an Offcanvas Component Above a Media Query Viewport Width

Sometimes you may require some content to be displayed using an _offcanvas_ side panel for smaller viewports but that switches to being an ordinary _on-canvas_ panel for wider viewports. This is done by adding modifier classes (and by hiding the controls on wider viewports), as in the following table:

<table class="table">
  <thead>
    <tr>
      <th>Offcanvas content</th>
      <th>Offcanvas control</th>
      <th>Offcanvas close</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.offcanvas-content</code></td>
      <td colspan="2">(Offcanvas side panel operates at all viewport widths – so you won’t want to hide the controls.)</td>
    </tr>
    <tr>
      <td><code class="nowrap">.offcanvas-content-sm</code></td>
      <td><code class="nowrap">.hide-md-up</code></td>
      <td><code class="nowrap">.hide-md-up</code></td>
    </tr>
    <tr>
      <td><code>.offcanvas-content-md</code></td>
      <td><code>.hide-lg-up</code></td>
      <td><code>.hide-lg-up</code></td>
    </tr>
  </tbody>
</table>

Example 5 – Click the icon below (if you can see this on browser widths medium-down).

<div class="offcanvas-ctrl hide-md-up mb-3e" data-content-id="oc-ex-5"><span class="btn primary btn-icon btn-sm"><span class="far fa-caret-square-left"></span></span></div>
<div class="offcanvas-content offcanvas-content-sm offcanvas-content-left p-3e primary white mb-3e" id="oc-ex-5">
  <div class="offcanvas-close offcanvas-close-right hide-md-up"><span class="fas fa-times"></span></div>
  <h3>Example 5</h3>
  <p>This colored panel operates as an offcanvas side panel at small viewport widths, but it is on-canvas (as a simple DIV within this article) for medium viewports up.</p>
  <p class="hide-md-up">In this simple example, no width has been specified for the offcanvas panel – so it will expand to the width required for its content (i.e. the text you are currently reading), up to max-width 100%. </p>
</div>

You will also need to add the appropriate class to hide the _controller_ and the _closer_ above the same viewport width.

<div class="mb-3e p-2e bg-theme-2">Another example of this browser width dependant offcanvas panel is the side menu in these docs.</div>

## Offcanvas Classes

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
      <td><code>.offcanvas-ctrl</code></td>
      <td>The <span class="nowrap">offcanvas</span> controller element.</td>
      <td>Controller alignment: <br><code class="nowrap">.offcanvas-ctrl-left</code>, <code class="nowrap">.offcanvas-ctrl-right</code></td>
    </tr>
    <tr>
      <td><code class="nowrap">.offcanvas-content</code></td>
      <td>The <span class="nowrap">offcanvas</span> content panel element.</td>
      <td>Content panel alignment: <br><code class="nowrap">.offcanvas-content-left</code>, <code class="nowrap">.offcanvas-content-right</code> <br>
        Responsive ’switches': <br>
        <code class="nowrap">.offcanvas-content-sm</code> – operates as an offcanvas side panel only on narrow viewports (below the md viewport width)<sup>1</sup> <br>
        <code class="nowrap">.offcanvas-content-md</code> – operates as an offcanvas side panel only on narrow-medium viewports (below the lg viewport width)<sup>2</sup>
      </td>
    </tr>
    <tr>
      <td><code>.offcanvas-close</code></td>
      <td>The <span class="nowrap">offcanvas</span> close-controller element (place this within the content panel).</td>
      <td>Close-controller alignment: <br><code class="nowrap">.offcanvas-close-left</code>, <code class="nowrap">.offcanvas-close-right</code></td>
    </tr>
  </tbody>
</table>

<sup>1</sup> Use `.hide-md-up` for hiding the controllers.
<sup>2</sup> Use `.hide-lg-up` for hiding the controllers.
