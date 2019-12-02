---
title: "Showhide"
prev: "Activator"
prevLink: "5-components-activator.html"
next: "Dropdowns"
nextLink: "5-components-dropdowns.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#the-simplest-showhide">The Simplest Showhide</a></li>
    <li class="menu-item"><a href="#showhide-classes">Showhide Classes</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase showhides are simple <a href="5-components-activator.html">activator</a> components.</p>

## The Simplest Showhide

<div class="showhide mb-3e">
  <button class="showhide-ctrl btn caret-down">Showhide</button>
  <div class="showhide-content bg-theme-2">
    <div class="p-block">Example showhide component content</div>
  </div>
</div>

```HTML
<div class="showhide">
  <button class="showhide-ctrl btn caret-down">Showhide
  <div class="showhide-content">Example showhide component content</div>
</div>
```

<div class="mb-3e p-2e bg-theme-2"><b>Note:</b>
  <p>The showhide component has no decorative styling of its own. Showhide is exemplified in these docs by adding button styling for the controller, and a yellow background for the content.</p>
  <p class="mb-0">The showhide component doesn’t have a caret (indicator triangle) built in. If you need a caret, add it yourself by using <code>.caret-down</code> or <code>.caret-up</code>.</p>
</div>

Simply place the `.showhide-content` block before the toggle in the HTML (i.e. reverse the order of the toggle and the content) and it will be shown and hidden above the toggle.

<div class="showhide mb-3e">
  <div class="showhide-content bg-theme-2">
    <div class="p-block">Example showhide component content</div>
  </div>
  <button class="showhide-ctrl btn caret-up">Showhide above</button>
</div>

## Showhide Classes

<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.showhide</code></td>
      <td>The showhide component block</td>
    </tr>
    <tr>
      <td><code>.showhide-ctrl</code></td>
      <td>The showhide controller element</td>
    </tr>
    <tr>
      <td><code>.showhide-content</code></td>
      <td>The showhide content element</td>
    </tr>
    <tr>
      <td><code>.caret-down</code> <br>
        <code>.caret-up</code> <br>
      </td>
      <td>(Optional) indicative carets<sup>1</sup></td>
    </tr>
  </tbody>
</table>

<sup>1</sup> Instead of Codebase carets, you could also use something from an icon font or create your own graphic element.

