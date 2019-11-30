---
title: Tables
prev: "Cards"
prevLink: "/5-components/cards.html"
next: "Modals"
nextLink: "/5-components/modals.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#table-variations">Table Variations</a></li>
    <li class="menu-item"><a href="#codebase-tables-are-responsive">Codebase Tables Are Responsive</a></li>
    <li class="menu-item"><a href="#table-classes">Table Classes</a></li>
  </ul>
</div>

<p class="h4 thin">The Codebase <code>.table</code> class expands tables to 100% width and adds some padding and a border around every table cell.</p>

Also, all table cells have their content vertical-aligned to the top, and aligned left for LTR or right for RTL.

`.table`

<table class="table">
  <thead>
    <tr>
      <th>Table Header 1
      </th>
      <th>Table Header 2
      </th>
      <th>Table Header 3
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1
      </td>
      <td>Table content 2.1
      </td>
      <td>Table content 3.1
      </td>
    </tr>
    <tr>
      <td>Table content 1.2
      </td>
      <td>Table content 2.2
      </td>
      <td>Table content 3.2
      </td>
    </tr>
    <tr>
      <td>Table content 1.3
      </td>
      <td>Table content 2.3
      </td>
      <td>Table content 3.3
      </td>
    </tr>
    <tr>
      <td>Table content 1.4
      </td>
      <td>Table content 2.4
      </td>
      <td>Table content 3.4
      </td>
    </tr>
  </tbody>
</table>

## Table Variations

The following table modifier classes can be used separately or in combination:

`.table.table-borderless` – removes all the borders (but you can put borders on cells of your choice by [border utility classes](../4-utilities/borders.html)):

<table class="table table-borderless">
  <thead>
    <tr>
      <th>Table Header 1
      </th>
      <th>Table Header 2
      </th>
      <th>Table Header 3
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1
      </td>
      <td>Table content 2.1
      </td>
      <td>Table content 3.1
      </td>
    </tr>
    <tr>
      <td>Table content 1.2
      </td>
      <td>Table content 2.2
      </td>
      <td>Table content 3.2
      </td>
    </tr>
    <tr>
      <td>Table content 1.3
      </td>
      <td>Table content 2.3
      </td>
      <td>Table content 3.3
      </td>
    </tr>
    <tr>
      <td>Table content 1.4
      </td>
      <td>Table content 2.4
      </td>
      <td>Table content 3.4
      </td>
    </tr>
  </tbody>
</table>

`.table.table-compact` – provides less padding in table cells:

<table class="table table-compact">
  <thead>
    <tr>
      <th>Table Header 1
      </th>
      <th>Table Header 2
      </th>
      <th>Table Header 3
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1
      </td>
      <td>Table content 2.1
      </td>
      <td>Table content 3.1
      </td>
    </tr>
    <tr>
      <td>Table content 1.2
      </td>
      <td>Table content 2.2
      </td>
      <td>Table content 3.2
      </td>
    </tr>
    <tr>
      <td>Table content 1.3
      </td>
      <td>Table content 2.3
      </td>
      <td>Table content 3.3
      </td>
    </tr>
    <tr>
      <td>Table content 1.4
      </td>
      <td>Table content 2.4
      </td>
      <td>Table content 3.4
      </td>
    </tr>
  </tbody>
</table>

`.table.table-striped` – applies a **transparent white tint** and a **transparent black tint** to alterating rows:

<table class="table table-striped">
  <thead>
    <tr>
      <th>Table Header 1
      </th>
      <th>Table Header 2
      </th>
      <th>Table Header 3
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1
      </td>
      <td>Table content 2.1
      </td>
      <td>Table content 3.1
      </td>
    </tr>
    <tr>
      <td>Table content 1.2
      </td>
      <td>Table content 2.2
      </td>
      <td>Table content 3.2
      </td>
    </tr>
    <tr>
      <td>Table content 1.3
      </td>
      <td>Table content 2.3
      </td>
      <td>Table content 3.3
      </td>
    </tr>
    <tr>
      <td>Table content 1.4
      </td>
      <td>Table content 2.4
      </td>
      <td>Table content 3.4
      </td>
    </tr>
  </tbody>
</table>

`.table.table-nowrap` – prevents table content wrapping in _every_ table cell:

<table class="table table-nowrap">
  <thead>
    <tr>
      <th>Table Header 1
      </th>
      <th>Table Header 2
      </th>
      <th>Table Header 3
      </th>
      <th>Table Header 4
      </th>
      <th>Table Header 5
      </th>
      <th>Table Header 6
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1
      </td>
      <td>Table content 2.1
      </td>
      <td>Table content 3.1
      </td>
      <td>Table content 4.1
      </td>
      <td>Table content 5.1
      </td>
      <td>Table content 6.1
      </td>
    </tr>
    <tr>
      <td>Table content 1.2
      </td>
      <td>Table content 2.2
      </td>
      <td>Table content 3.2
      </td>
      <td>Table content 4.2
      </td>
      <td>Table content 5.2
      </td>
      <td>Table content 6.2
      </td>
    </tr>
    <tr>
      <td>Table content 1.3
      </td>
      <td>Table content 2.3
      </td>
      <td>Table content 3.3
      </td>
      <td>Table content 4.3
      </td>
      <td>Table content 5.3
      </td>
      <td>Table content 6.3
      </td>
    </tr>
    <tr>
      <td>Table content 1.4
      </td>
      <td>Table content 2.4
      </td>
      <td>Table content 3.4
      </td>
      <td>Table content 4.4
      </td>
      <td>Table content 5.4
      </td>
      <td>Table content 6.4
      </td>
    </tr>
  </tbody>
</table>

## Codebase Tables Are Responsive

If you add class `.table` to a `<table>`, then `codebase.js` will add `<div class="table-wrap">` around the table. This wrapper’s CSS works to enable responsive overflow by horizontal scrolling – if required by a table being wider than the available width.

Example: a wide table that is horizontally scrollable at all screen widths:

<table class="table">
  <thead>
    <tr>
      <th>Table Header 1
      </th>
      <th>Table Header 2
      </th>
      <th>Table Header 3
      </th>
      <th>Table Header 4
      </th>
      <th>Table Header 5
      </th>
      <th>Table Header 6
      </th>
      <th>Table Header 7
      </th>
      <th>Table Header 8
      </th>
      <th>Table Header 9
      </th>
      <th>Table Header 10
      </th>
      <th>Table Header 11
      </th>
      <th>Table Header 12
      </th>
      <th>Table Header 13
      </th>
      <th>Table Header 14
      </th>
      <th>Table Header 15
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1
      </td>
      <td>Table content 2.1
      </td>
      <td>Table content 3.1
      </td>
      <td>Table content 4.1
      </td>
      <td>Table content 5.1
      </td>
      <td>Table content 6.1
      </td>
      <td>Table content 7.1
      </td>
      <td>Table content 8.1
      </td>
      <td>Table content 9.1
      </td>
      <td>Table content 10.1
      </td>
      <td>Table content 11.1
      </td>
      <td>Table content 12.1
      </td>
      <td>Table content 13.1
      </td>
      <td>Table content 14.1
      </td>
      <td>Table content 15.1
      </td>
    </tr>
    <tr>
      <td>Table content 1.2
      </td>
      <td>Table content 2.2
      </td>
      <td>Table content 3.2
      </td>
      <td>Table content 4.2
      </td>
      <td>Table content 5.2
      </td>
      <td>Table content 6.2
      </td>
      <td>Table content 7.2
      </td>
      <td>Table content 8.2
      </td>
      <td>Table content 9.2
      </td>
      <td>Table content 10.2
      </td>
      <td>Table content 11.2
      </td>
      <td>Table content 12.2
      </td>
      <td>Table content 13.2
      </td>
      <td>Table content 14.2
      </td>
      <td>Table content 15.2
      </td>
    </tr>
    <tr>
      <td>Table content 1.3
      </td>
      <td>Table content 2.3
      </td>
      <td>Table content 3.3
      </td>
      <td>Table content 4.3
      </td>
      <td>Table content 5.3
      </td>
      <td>Table content 6.3
      </td>
      <td>Table content 7.3
      </td>
      <td>Table content 8.3
      </td>
      <td>Table content 9.3
      </td>
      <td>Table content 10.3
      </td>
      <td>Table content 11.3
      </td>
      <td>Table content 12.3
      </td>
      <td>Table content 13.3
      </td>
      <td>Table content 14.3
      </td>
      <td>Table content 15.3
      </td>
    </tr>
  </tbody>
</table>

## Table Classes

<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.table</code></td>
      <td>The responsive table component block. Apply this class only to <code>&lt;table&gt;</code> tags.</td>
    </tr>
    <tr>
      <td><code>.table-rows</code></td>
      <td>Adds a top border to every table body row.</td>
    </tr>
    <tr>
      <td><code>.table-grid</code></td>
      <td>Adds a border around every table cell.</td>
    </tr>
    <tr>
      <td class="nowrap"><code>.table-striped</code></td>
      <td>Applies a white tint and a black tint to alternating rows.</td>
    </tr>
    <tr>
      <td><code>.table-compact</code></td>
      <td>Sets the table cell padding to 0.25rem (= &half; <a href="../codebase/3-layout/element-grid.html">element grid unit</a>).</td>
    </tr>
    <tr>
      <td><code>.table-nowrap</code></td>
      <td>Prevents white-space wrapping (in every table cell).<sup>1</sup></td>
    </tr>
  </tbody>
</table>

<sup>1</sup> If you require nowrap only on some table cells and not others, you can use the text utility class `.nowrap` applied to the `th` or `td` where you need it.
