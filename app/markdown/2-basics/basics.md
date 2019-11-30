---
title: "Basics"
prev: "Getting Started"
prevLink: "/1-getting-started/getting-started.html"
next: "Layout"
nextLink: "/3-layout/layout.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#headings"> Headings</a></li>
    <li class="menu-item"><a href="#paragraphs"> Paragraphs</a></li>
    <li class="menu-item"><a href="#simple-text-elements"> Simple Text Elements</a></li>
    <li class="menu-item"><a href="#lists"> Lists</a></li>
    <li class="menu-item"><a href="#horizontal-rules"> Horizontal Rules</a></li>
    <li class="menu-item"><a href="#blockquotes"> Blockquotes</a></li>
    <li class="menu-item"><a href="#tables"> Tables</a></li>
    <li class="menu-item"><a href="#form-elements">Form Elements</a></li>
    <li class="menu-item"><a href="#images-and-other-embedded-media">Images and Other Embedded Media</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase has a basic styling for various elements, applied to HTML tags directly (without CSS classes). Since v3.0 Codebase is built upon its own set of light-weight modern base styles. It no longer requires Normalize.</p>

## Headings

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

Same as for [paragraphs](#paragraphs), headings have zero top margin while the bottom margin of headings is set as equal to _one line-height of the default text_ (paragraph) size, i.e. 1.5rem.

Headings h1 to h5 are enlarged (and their line heights adjusted) for wider viewports at and above their `alt` breakpoint, which is set by the variable `$break-headers-alt`.

Headings are set to `font-weight: normal` by default, so that you can use bold on particular words for emphasis.

All these same styles are also available as `.h1` to `.h6` [block text utility classes](/4-utilities/utilities.html#block-text-utility-classes).

## Paragraphs

A simple paragraph:

Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.

As with headings, paragraphs have zero top margin, but they have a bottom margin equal to the line height of the default (paragraph) text size – thereby leaving an “empty line” gap between paragraphs.

## Simple Text Elements

<div class="grid grid-gap grid-md-equalize-2 mb-3e">
  <div>
    <i>italics</i><br><em>emphasis</em><br><b>bold</b><br><strong>strong</strong><br>
    <cite>citation</cite><br>
    <del>deleted text (strikethough)</del><br>
    <dfn title="title">definition</dfn><br>
    <abbr title="This stands for something">abbreviation</abbr><br>
    <ins>inserted text</ins><br>
    <kbd>user input</kbd><br>
    <samp>sample output</samp><br>
    <mark>marked (highlighted) text</mark><br>
    <small>small</small><br>
    Superscript: e.g. E = mc<sup>2</sup><br> Subscript: e.g. H<sub>2</sub>O<br>
  </div>
  <div>
    <var>variable or placeholder text</var><br> ndash &ndash;<br> mdash &mdash;<br><a href="">hyperlink</a><br><code>inline code</code><br>
    <address>Address</address>
    <pre>Preformatted text</pre>
	<pre><code>/* &lt;pre&gt;&lt;code&gt; */
10 print "Hello world";
20 goto 10;
Run</code></pre>
  </div>
</div>

## Lists

<div class="grid grid-gutter grid-md-equalize-3">
	<div class="col-md-1">
    <p>Ordered lists: </p>
		<ol>
			<li>List item</li>
			<li>List item
				<ol>
          <li>List item</li>
          <li>List item
            <ol>
              <li>List item</li>
            </ol>
          </li>
        </ol>
			</li>
			<li>List item</li>
		</ol>
	</div>
	<div class="col-md-2">
    <p>Unordered lists: </p>
		<ul>
			<li>List item</li>
			<li>List item
				<ul>
          <li>List item</li>
          <li>List item
            <ul>
              <li>List item</li>
            </ul>
          </li>
        </ul>
			</li>
			<li>List item</li>
		</ul>
	</div>
	<div class="col-md-3">
    <p>Definition lists:</p>
		<dl>
			<dt>Title 1</dt>
			<dd>Data 1 Lorem ipsum dolor sit amet</dd>
			<dt>Title 2</dt>
			<dd>Data 2 Lorem ipsum dolor sit amet</dd>
			<dt>Title 3</dt>
			<dd>Data 3 Lorem ipsum dolor sit amet</dd>
		</dl>
	</div>
</div>

## Horizontal Rules

The horizontal rule tag is simply styled with a thin _top border_, so that it looks the same as [border utilities](/4-utilities/utilities.html#border-utilities) and [`.table` borders](/5-components/tables.html).

<hr>

## Blockquotes

In Codebase, blockquotes receive some padding _right and left_, to give the effect of indentation. This side padding is set based upon the viewport width (i.e. in `vw`), so that it is narrower on smaller viewports.

Otherwise, blockquotes have the same as paragraph styling.

> Lorem ipsum dolor sit amet, adipiscing honestatis ius ut, nisl consulatu pro in. Imperdiet evertitur no usu, his te suavitate salutatus. Nullam ridens deterruisset an duo. Cum harum insolens ei, cum probo placerat praesent et.

## Tables

This is what a basic (classless) table looks like using Codebase:

<table class="mb-3e">
  <thead>
    <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table content 1.1</td>
      <td>Table content 2.1</td>
      <td>Table content 3.1</td>
    </tr>
    <tr>
      <td>Table content 1.2</td>
      <td>Table content 2.2</td>
      <td>Table content 3.2</td>
    </tr>
    <tr>
      <td>Table content 1.3</td>
      <td>Table content 2.3</td>
      <td>Table content 3.3</td>
    </tr>
  </tbody>
</table>

No styling is applied to the table tag, except for bottom margin below the entire table (same as for paragraphs and headings). So, there is probably nothing that will interfere with other frameworks or plugins if you use them.

For more functionality and styling, see the Codebase <a href="5-components/tables.html">table component</a>.

## Form Elements

### Input Fields

In Codebase, form elements and buttons are all, by default, inline elements.

<div class="bg-theme-2 p-2e mb-3e">
	<p>Various Codebase utility classes also work on form elements. See:</p>
	<ul>
		<li><a href="4-utilities/utilities.html#form-utilities">Form utilities</a></li>
		<li><a href="4-utilities/utilities.html#layout-utilities">Layout utilities</a></li>
	</ul>
	<p class="mb-0">You’ll also want to see <a href="5-components/buttons.html">buttons</a>, and see how to use <a href="5-components/buttons.html#buttons-and-forms">buttons and forms</a> together.</p>
</div>

<label for="text-example">Text:</label>
<input id="text-example" name="examplename" placeholder="Example text input field" type="text">

<label for="email-example">Email:</label>
<input id="email-example" name="examplename" placeholder="Example email input field" type="email">

<label for="tel-example">Tel:</label>
<input id="tel-example" name="examplename" placeholder="Example phone number input field" type="tel">

<label for="search-example">Search:</label>
<input id="search-example" name="examplename" placeholder="Example search input field" type="search">

<label for="number-example">Number:</label>
<input id="number-example" name="examplename" placeholder=" Example number input field" type="number">

<label for="date-example">Date:</label>
<input id="date-example" name="examplename" placeholder="Example date input field" type="date">

<label for="month-example">Month:</label>
<input id="month-example" name="examplename" placeholder="Example month input field" type="month">

<label for="password-example">Password:</label>
<input id="month-example" name="examplename" placeholder="Example password input field" type="password">

### Textareas

<label for="textarea-example">Textarea:</label>
<textarea id="textarea-example" name="examplename" type="password" placeholder="Example textarea" rows="4"></textarea>

### Selects

<label for="single-select-example">Single select:</label>
<select id="single-select-example" name="examplename">
	<option value="first">First option </option>
	<option value="second">Second option </option>
	<option value="third">Third option</option>
</select>

<label class="mt-3e" for="multi-select-example">Multi-select:</label>
<select id="multi-select-example" name="examplename" multiple="3">
	<option value="first">First option </option>
	<option value="second">Second option </option>
	<option value="third">Third option</option>
</select>

### Radio Boxes and Checkboxes

<form class="mb-3e">
	<input id="radio-1" name="examplename" checked="checked" type="radio">
	<label for="radio-1">Radio 1</label><br>
	<input id="radio-2" name="examplename" type="radio">
	<label for="radio-2">Radio 2</label><br>
	<input id="radio-3" name="examplename" type="radio">
	<label for="radio-3">Radio 3</label>
</form>

<form class="mb-3e">
	<input id="checkbox-1" name="examplename" checked="checked" type="checkbox">
	<label for="checkbox-1">Checkbox 1 </label><br>
	<input id="checkbox-2" name="examplename" type="checkbox">
	<label for="checkbox-2">Checkbox 2</label><br>
	<input id="checkbox-3" name="examplename" type="checkbox">
	<label for="checkbox-3">Checkbox 3</label>
</form>

## Images and Other Embedded Media

### Images

In Codebase, images are block-level elements with `max-width: 100%` so that large images are "responsive", shrinking to fit within containers (or viewports) narrower than the actual image width.

<img src="/img/image-placeholder.svg" style="width: 200px; height: 200px;" class="mb-3e" alt="Image Alt Text" />

<img src="/img/image-placeholder-large-rectangle.svg" alt="Image Alt Text" class="mb-3e" />

An image with a `<figcaption>`, all enclosed in `<figure>`:

<figure class="mb-3e">
<img src="/img/image-placeholder.svg" style="width: 100px; height: 100px;" /> 
<figcaption>Here is the caption for the image above.</figcaption>
</figure>

### Audio and Video

Audio controls:

<audio controls="">audio</audio>

Video controls:

<video controls="">video</video>

### Iframes

Iframes have their border reset to zero. No height or width is specified – that’s up to you to set for yourself according to your needs:

<iframe src="../iframe.html" height="280" width="400"></iframe>
