---
title: Layout
prev: "Basics"
prevLink: "/2-basics/basics.html"
next: "Element Grid"
nextLink: "/3-layout/element-grid.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#the-codebase-element-grid">The Codebase Element Grid</a></li>
    <li class="menu-item"><a href="#element-grid-unit-suffixes-in-utility-classes">Element Grid Unit Suffixes in Utility Classes</a></li>
  </ul>
</div>

<p class="h4 thin">In Codebase, components and utility classes are built upon a <a href="#the-codebase-element-grid">0.5rem element grid</a>. Codebase also gives you a range of <a href="3-layout/containers.html">containers</a> of different sizes, simple columnar positioning by <a href="3-layout/flexbox.html">flexbox</a>, and complex layouts can be built using a real <a href="3-layout/grid.html">CSS grid system</a>. A few more things can be found in <a href="4-utilities/utilities.html#layout-utilities">layout utilities</a>.

## The Codebase Element Grid

Codebase uses a “soft” **0.5rem element grid** for consistently positioning elements relative to each other.

This is similar in principle to various 8px grids out there (also known as 8-point or 8dp [device pixel] grids). For example:

* [SpecFM’s 8-point grid](https://spec.fm/specifics/8-pt-grid)
* [Intro to The 8-Point Grid System](https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632) by Elliot Dahl
* [Material Design’s 4dp square baseline grid](https://material.io/guidelines/layout/metrics-keylines.html)

The Codebase element grid has been deployed a follows:

1. Element grid increments of 0.5rem have been used for setting all line-heights, margins and paddings throughout Codebase.
2. By default, the base typography vertical rhythm (line-height) is set at 1.5rem (= 3 element grid units). The line heights for headers have also been set using 0.5rem increments.
3. The layout `.grid` and `.flexbox` gaps have been set at 1.5rem.
4. Decoration utilities for margins and paddings have been set using values from the 0.5rem element grid.

<img src="/img/Codebase-element-grid.svg" class="mb-3e" />

<div class="p-2e bg-theme-2">This <code class="b-thin">padding: 0.5rem 1rem;</code> is also available as the padding utility class <code class="b-thin">.p-block`.</code> See <a href="4-utilities/utilities.html#block-padding">block padding</a>.</div>

### Element Grid Unit Suffixes in Utility Classes

For various utility classes, the element grid is set using “element grid units” of 0.5rem.

<p class="center bold">1 element grid unit = 1e = 0.5rem</p>

Where element grid units have been used in utility classes (e.g. margins and paddings), these have been given the unit `e` as follows:

<table class="table">
  <thead>
    <tr>
      <th>Element grid measure</th>
      <th>Utility class suffix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0.25rem</td>
      <td><code>-He</code>*</td>
    </tr>
    <tr>
      <td>0.5rem</td>
      <td><code>-1e</code></td>
    </tr>
    <tr>
      <td>1rem</td>
      <td><code>-2e</code></td>
    </tr>
    <tr>
      <td>1.5rem</td>
      <td><code>-3e</code></td>
    </tr>
    <tr>
      <td>3rem</td>
      <td><code>-6e</code></td>
    </tr>
    <tr>
      <td>4.5rem</td>
      <td><code>-9e</code></td>
    </tr>
  </tbody>
</table>

<sup>1</sup> This half element-grid spacer is also available in [margin and padding (i.e. spacing) utility classes](/4-utilities/spacing.html).
