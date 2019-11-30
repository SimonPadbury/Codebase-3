---
title: Toggler
prev: "Components that use JS"
prevLink: "/5-components/components-that-use-js.html"
next: "Activator"
nextLink: "/5-components/activator.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#form-elements-as-full-width-blocks">Setting Up a Toggler</a></li>
    <li class="menu-item"><a href="#toggler-attributes">Toggler Attributes</a></li>
  </ul>
</div>

<p class="h4 thin">The Codebase toggler is a simple JavaScript that adds/removes a CSS class of your choice from the toggler target element.</p>

`codebase.css` carries no styling for the Toggler component. It’s all up to you.

The following example has a little CSS embedded near here in the HTML, in a `<style>` tag – to show you the toggler in operation:

<style>
  #toggle-ex-1 {
    transition: all 1s;
  }
  #toggle-ex-1.is-toggled {
    letter-spacing: 5px;
    background: yellow;
  }  
</style>

<div class="flexbox flexbox-gap mb-3e">
  <div><b class="btn btn-lg primary" data-toggle-id="toggle-ex-1" data-toggle-class="is-toggled">Click me</b></div>
  <div class="b-thin b-thin p-block" id="toggle-ex-1">Toggler target example 1</div>
</div>

Here is another example – this time, the toggler is situated _within the target block_. But in this case you can’t un-toggle it, because the orange block will have disappeared:

<style>
  #toggle-ex-2 {
    height: 72px;
    margin-bottom: 1.5rem;
    transition: all 0.6s;
  }
  #toggle-ex-2.is-toggled {
    height: 0;
    margin-bottom: 0;
    overflow: hidden;
  }
  [data-toggle-id="toggle-ex-2"]:hover {
    cursor: pointer
  }
  [data-toggle-id="toggle-ex-2"].is-toggled {
    display: none
  }  
</style>

<div class="bl-heavy warning" id="toggle-ex-2">
  <span class="float-right p-1e" data-toggle-id="toggle-ex-2" data-toggle-class="is-toggled">Dismiss <span class="fas fa-times"></span>
  </span>
  <div class="p-3e">Toggler target example 2</div>
</div>

(You will need to refresh your browser to make the element above appear again.)

One more toggler example – this time, a Codebase utility background color class is being added/removed from the target element:

<div class="flexbox flexbox-gap mb-3e">
  <div><b class="btn success" data-toggle-id="toggle-ex-3" data-toggle-class="success">Click me</b></div>
  <div class="b-thin b-thin p-block" id="toggle-ex-3">Toggler target example 3</div>
</div>

## Setting Up a Toggler

```HTML
<span data-toggle-id="your-id" data-toggle-class="your-class">Click me</span>
<div id="your-id">
  This target DIV will be toggled (i.e. it will have "your-class" added/removed)
</div>
```

1. Assign your chosen `id="your-id"` to the target element (and apply your styles through that ID)
2. "Connect" the toggler element to the target element using `data-target-id="your-id"`
3. Choose the toggler class that you want applied to the target element using `data-target-class="your-class"`

For styling the two "states" of the toggler target element, you can use e.g.:

```CSS
#your-id { }
#your-id.your-class { }
```

<p class="bg-theme-2 p-2e"><b>Note:</b> You can’t put two classes in <code class="b-thin">data-toggle-class=""</code> separated by a space or a dot. And you can’t use more than one <code class="b-thin">data-toggle-class=""</code> in a Toggler.</p>

That’s all there is to the Codebase toggler. Unlike the Codebase [activator](../5-components/activator.html), toggler has no “click outside to dismiss”, and no “toggling one causes un-toggling of others”. But you can toggle more than one toggler on a page at the same time. Example:

<style>
  [data-toggle-id="ex-q1"],
  [data-toggle-id="ex-q2"],
  [data-toggle-id="ex-q3"] {
    position: relative;
    margin: -0.25rem;
  }
  #ex-q1,
  #ex-q2,
  #ex-q3 {
    height: 0;
    padding: 0 0.5rem;
    transition: all 0.3s;
    overflow: hidden;
  }
  #ex-q1.is-toggled,
  #ex-q2.is-toggled,
  #ex-q3.is-toggled {
    height: 3em;
    //border-top: 0.0625rem solid #d5d5d5;
    padding: 1rem 0.5rem 0;
  }
</style>

<div class="b-thin bb-0 mb-3e">
  <div class="p-1e">
    1. What is the answer to question one?
    <span class="float-right btn small caret-down" data-toggle-id="ex-q1" data-toggle-class="is-toggled">Reveal</span>
  </div>

  <div id="ex-q1" class="bb-thin">
    Answer to question one.
  </div>

  <div class="p-1e">
    2. What is the answer to question two?
    <span class="float-right btn small caret-down" data-toggle-id="ex-q2" data-toggle-class="is-toggled">Reveal</span>
  </div>

  <div id="ex-q2" class="bb-thin">
    Answer to question two.
  </div>

  <div class="p-1e">
    3. What is the answer to question three?
    <span class="float-right btn small caret-down" data-toggle-id="ex-q3" data-toggle-class="is-toggled">Reveal</span>
  </div>

  <div id="ex-q3" class="bb-thin">
    Answer to question Three.
  </div>
</div>

## Toggler Attributes

<table class="table">
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>data-toggle-id=""</code></td>
      <td>Put this in the toggler controller tag. Assign the ID of the target (i.e. the thing being toggled).</td>
    </tr>
    <tr>
      <td><code>id=""</code></td>
      <td>The toggler target content ID. Add your own styles to the toggled state of the target, and/or use <code class="nowrap">data-toggle-class=""</code>.<sup>1</sup></td>
    </tr>
    <tr>
      <td><code class="nowrap">data-toggle-class=""</code></td>
      <td>Put this in the toggler controller tag. Choose the CSS class that you wish to add/remove on the target. Add your own styles if necessary.</td>
    </tr>
  </tbody>
</table>

<sup>1</sup> If you use `data-toggle-class=""`, that CSS class can be a Codebase class, or one of your own.
