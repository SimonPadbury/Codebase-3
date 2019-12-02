---
title: Activator
prev: "Toggler"
prevLink: "5-components-toggler.html"
next: "Showhide"
nextLink: "5-components-showhide.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#activator-operation">Activator Operation</a></li>
    <li class="menu-item"><a href="#adding-specificity">Adding specificity</a></li>
    <li class="menu-item"><a href="#closing-from-within">Closing From Within</a></li>
    <li class="menu-item"><a href="#activator-classes">Activator Classes</a></li>
  </ul>
</div>

<p class="h4 thin">Click a control (e.g. button), and a tiny JavaScript adds or removes some <code>.is-active</code> classes. That explains the operation of most things in Codebase.</p>

Since Codebase 2 the various showhides, dropdowns, modals and offcanvas sidebars are **all controlled by one script** named `_activator.js`, that has been included within `codebase.js`.

Basic activator components need an outer _wrapper_ element (block), with a _controller_ element and a _content_ both as immediate children (and thus siblings) within the wrapper. These elements can be anything, so long as:

1. You  must give your component’s outer HTML wrapper a class name, and then _use that same class name as a prefix_ for its controller and content elements.

2. The controller must have has a class with suffix `-ctrl` and the content must have a class with suffix `-content`.

An example "thing":

```HTML
<div class="thing">
  <button class="thing-ctrl">
    Click me
  </button>
  <div class="thing-content">
    I am a thing.
  </div>
</div>
```

It doesn’t matter whether the controller element comes before or after the content element.

<div class="flexbox flexbox-gap flexbox-grow-equal pt-3e">
  <div>
    <div class="mb-3e b-thin b-gray p-1e">class="thing"
      <div class="b-thin b-gray my-1e p-1e">class="thing-ctrl"</div>
      <div class="b-thin b-gray p-1e">class="thing-content"</div>
    </div>
  </div>
  <div>
    <div class="mb-3e b-thin b-gray p-1e">class="thing"
      <div class="b-thin b-gray my-1e p-1e">class="thing-content"</div>
      <div class="b-thin b-gray p-1e">class="thing-ctrl"</div>
    </div>
  </div>
</div>

## Activator Operation

It is entirely up to you what styling you wish to add for the inactive and active states of the component, controller and content. But Codebase does contain a few examples.

<p class="bg-theme-2 p-2e">Examples of simple Codebase activator components are <a href="5-components-showhide.html">showhide</a> and <a href="5-components-dropdowns.html">dropdowns</a>.</p>

1. Click/tap an activator control `.thing-ctrl` to add class `.is-active` to all these:
    * Its `.thing` wrapper
    * The clicked `.thing-ctrl` element itself
    * Its respective `.thing-content` element
2. At the same time, _all other_ activator components, no matter what kind of thing they are, will get `.is-active` removed. (Only one activator component can be active at any time.)
3. Click/tap an activator `.thing-ctrl` again to cause the removal of the `.is-active` classes, thereby deactivating this component.
4. A click/tap anywhere outside an activator content will also deactivate the active component (this is useful for dismissing an offcanvas sidebar or a modal).
5. A click/tap an _on-page_ `<a href="#...">` tag _within_ an activator will also deactivate the active component (this is useful for dismissing an offcanvas sidebar if visiting a hyperlink target on the same webpage).
6. **Optional extra:** click/tap a `.thing-close` element within an active activator component to deactivate it. (See “Closing from within”, below.)

## Adding Specificity

Add `data-content-id="{identifier}"` to control elements in order to target particular `id="{identifier}"` content elements.

This enables the controller to be located outside the component and yet still be able to identify its respective target.

```HTML
<div class="thing">
  <div id="thing-content-2" class="thing-content">
    I am thing 2.
  </div>
</div>
<button data-content-id="thing-content-2" class="thing-ctrl">
  Click me
</button>
```

<div class="flexbox flexbox-gap flexbox-grow-equal py-3e">
  <div>
    <div class="mb-1e b-thin b-gray p-1e">class="thing"
      <div class="b-thin b-gray my-1e p-1e bg-light-teal">class="thing-content" <br>
        id="thing-content-2"
      </div>
    </div>
    <div class="mx-1e mb-3e b-thin b-gray p-1e bg-light-teal">class="thing-ctrl" <br>
      data-content-id="thing-content-2"
    </div>
  </div>
  <div>&nbsp;</div>
</div>

`data-content-id="{identifier}"` can also also allow multiple controller/content pairs to _co-exist_ within the same activator component.

<div class="flexbox flexbox-gap flexbox-grow-equal py-3e">
  <div>
    <div class="mb-3e b-thin b-gray p-1e">class="thing"
      <div class="b-thin b-gray my-1e p-1e">class="thing-ctrl" <br>
        data-content-id="thing-content-3"
      </div>
      <div class="b-thin b-gray my-1e p-1e">class="thing-content" <br>
        id="thing-content-3"
      </div>
      <div class="b-thin b-gray my-1e p-1e">class="thing-ctrl" <br>
        data-content-id="thing-content-4"
      </div>
      <div class="b-thin b-gray my-1e p-1e">class="thing-content" <br>
        id="thing-content-4"
      </div>
      <div class="b-thin b-gray my-1e p-1e">class="thing-ctrl" <br>
        data-content-id="thing-content-5"
      </div>
      <div class="b-thin b-gray mt-1e p-1e">class="thing-content" <br>
        id="thing-content-5"
      </div>
    </div>
  </div>
  <div>&nbsp;</div>
</div>

<p class="bg-theme-2 p-2e">Examples of activator components with added specificity in Codebase are <a href="5-components-modals.html">modals</a> and <a href="5-components-offcanvas.html">offcanvas</a> side panels.</p>

## Closing From Within

If for some reason you wish to have a "close" (or "dismiss") button inside your content element, you can do that. Simply add an element with class `.thing-close` inside your `.thing-content`. Clicking this element will cause the removal of is-active from the content element (and the control element, if you have one).

<p class="bg-theme-2 p-2e">Codebase <a href="5-components-modals.html">modals</a> and <a href="5-components-offcanvas.html">offcanvas</a> side panels have "close" buttons.</p>

## Activator Classes

<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Notes</th>
      <th>Active state class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.thing</code> (could be anything)</td>
      <td>The class of the activator component block</td>
      <td><code>.thing.is-active</code></td>
    </tr>
    <tr>
      <td><code>.thing-ctrl</code></td>
      <td>The activator controller element. <br> (Optional:) <code>data-content-id="identifier"</code> for added specificity.</td>
      <td><code>.thing-ctrl.is-active</code></td>
    </tr>
    <tr>
      <td><code>.thing-content</code></td>
      <td>The activator content element. <br> (Optional:) <code>id="identifier"</code>.</td>
      <td><code>.thing-content.is-active</code></td>
    </tr>
    <tr>
      <td><code>.thing-close</code></td>
      <td>(Optional:) The activator "close from within" element</td>
      <td>n/a</td>
    </tr>
  </tbody>
</table>

## Codebase Activator Components

The activator script is being used by the following components in Codebase:

<table class="table">
  <thead>
    <tr>
      <th>Component class</th>
      <th>Controller class</th>
      <th>Content class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.showhide</code></td>
      <td><code>.showhide-ctrl</code></td>
      <td><code>.showhide-content</code></td>
    </tr>
    <tr>
      <td><code>.dropdown</code></td>
      <td><code>.dropdown-ctrl</code></td>
      <td><code>.dropdown-content</code></td>
    </tr>
    <tr>
      <td><code>.offcanvas</code></td>
      <td><code>.offcanvas-ctrl</code> <sup>1</sup></td>
      <td><code>.offcanvas-content</code> <sup>2</sup></td>
    </tr>
    <tr>
      <td><code>.modal</code></td>
      <td><code>.modal-ctrl</code> <sup>1</sup></td>
      <td><code>.modal-content</code> <sup>2</sup></td>
    </tr>
  </tbody>
</table>

1. `data-content-id` is required for specificity.
2. The content element must have an `id` that matches its respective controller’s `data-content-id`.
