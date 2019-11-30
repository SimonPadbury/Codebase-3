---
title: "Buttons"
prev: "Dropdowns"
prevLink: "/5-components/dropdowns.html"
next: "Badges and Labels"
nextLink: "/5-components/badges-and-labels.html"
---

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <ul class="menu small">
    <li class="menu-item"><a href="#default-buttons">Default Buttons</a></li>
    <li class="menu-item"><a href="#button-colors">Button Colors</a></li>
    <li class="menu-item"><a href="#button-states">Button States</a></li>
    <li class="menu-item"><a href="#small-default-and-large-buttons">Small, Default and Large Buttons</a></li>
    <li class="menu-item"><a href="#buttons-with-icons">Buttons with Icons</a></li>
    <li class="menu-item"><a href="#buttons-with-dropdowns">Buttons with Dropdowns</a></li>
    <li class="menu-item"><a href="#buttons-and-forms">Buttons and Forms</a></li>
  </ul>
</div>

<p class="h4 thin">Codebase button classes can be applied to button tags, input-button tags and hyperlink anchor tags.</p>

## Default Buttons

<button class="btn" type="submit">Button</button> – button `.btn`

<input class="btn" value="Input" type="submit"> – input button `.btn`

<a class="btn" href="#/">Hyperlink</a> – hyperlink `.btn`

Block width button using the `.block` layout utility. See [layout utilities](../4-utilities/layout.html).

<button class="btn block">Block width button</button>

## Button Colors

<button class="btn">Default</button> – `.btn`

<button class="btn primary">Primary</button> – `.btn.primary`

<button class="btn secondary">Secondary</button> – `.btn.secondary`

<button class="btn warning">Warning</button> – `.btn.warning`

<button class="btn success">Success</button> – `.btn.success`

<button class="btn danger">Danger</button> – `.btn.danger`

## Button States

Normal / `:hover` `:focus` `:active` `.btn-active` / `:disabled` `.btn-disabled`

<button class="btn">Default</button>
<button class="btn btn-active">Default active</button>
<button class="btn btn-disabled" aria-disabled="true">Default disabled</button>

<button class="btn primary">Primary</button>
<button class="btn primary btn-active">Primary active</button>
<button class="btn primary btn-disabled" aria-disabled="true">Primary disabled</button>

<button class="btn secondary">Secondary</button>
<button class="btn secondary btn-active">Secondary active</button>
<button class="btn secondary btn-disabled" aria-disabled="true">Secondary disabled</button>

<button class="btn success">Success</button>
<button class="btn success btn-active">Success active</button>
<button class="btn success btn-disabled" aria-disabled="true">Success disabled</button>

<button class="btn warning">Warning</button>
<button class="btn warning btn-active">Warning active</button>
<button class="btn warning btn-disabled" aria-disabled="true">Warning disabled</button>

<button class="btn danger">Danger</button>
<button class="btn danger btn-active">Danger active</button>
<button class="btn danger btn-disabled" aria-disabled="true">Danger disabled</button>

## Small, Default and Large Buttons

Add `.small` for a smaller button, or `.big` for a bigger button. See [text utilities](../4-utilities/text.html).

<a class="btn primary small" href="#/">Small</a> <a class="btn primary" href="#/">Default</a> <a class="btn primary big" href="#/">Big</a>

<p class="mt-3e mr-2e bg-theme-2 p-2e">The smaller form button size has been designed for fitting within menus and menubars. In that context, give it a margin class <code>.m-1e</code> to position it correctly.</p>

## Buttons with Icons

Icons (characters, pictograms or emojis) can be included in buttons:

<button class="btn success"><i class="fas fa-check"></i> OK</button>
<button class="btn secondary"><i class="fas fa-folder"></i> Archive</button>
<button class="btn primary">Go <i class="fas fa-arrow-right"></i></button>
<button class="btn warning">Really <i class="fas fa-question-circle"></i></button>
<button class="btn danger">Reset <i class="fas fa-times"></i></button>
<button class="btn">Menu <i class="fas fa-bars"></i></button>

_Examples in these docs use [Font Awesome](https://fontawesome.com) icons._

### Square Icon Buttons

`.btn-icon` – ensures you get square buttons when only a single character, symbol or icon is present within the button:

<button class="btn success btn-icon"><i class="fas fa-check"></i></button>
<button class="btn secondary btn-icon"><i class="fas fa-folder"></i></button>
<button class="btn primary btn-icon"><i class="fas fa-arrow-right"></i></button>
<button class="btn warning btn-icon"><i class="fas fa-question-circle"></i></button>
<button class="btn danger btn-icon"><i class="fas fa-times"></i></button>
<button class="btn btn-icon"><i class="fas fa-bars"></i></button>

Add `.big` for a larger icon button (both the button and the icon are made big):

<button class="btn success btn-icon big"><i class="fas fa-check"></i></button>
<button class="btn secondary btn-icon big"><i class="fas fa-folder"></i></button>
<button class="btn primary btn-icon big"><i class="fas fa-arrow-right"></i></button>
<button class="btn warning btn-icon big"><i class="fas fa-question-circle"></i></button>
<button class="btn danger btn-icon big"><i class="fas fa-times"></i></button>
<button class="btn btn-icon big"><i class="fas fa-bars"></i></button>

### Rounded Icon Buttons

<button class="btn pill">Example</button> <code>.btn.pill</code>

Using `.btn-icon` together with `.pill` yields a circular button:

<button class="btn pill success btn-icon"><i class="fas fa-check"></i></button>
<button class="btn pill secondary btn-icon"><i class="fas fa-folder"></i></button>
<button class="btn pill primary btn-icon"><i class="fas fa-arrow-right"></i></button>
<button class="btn pill warning btn-icon"><i class="fas fa-question-circle"></i></button>
<button class="btn pill danger btn-icon"><i class="fas fa-times"></i></button>
<button class="btn pill btn-icon"><i class="fas fa-bars"></i></button>

## Buttons with Dropdowns

The dropdown component can be used with buttons. See the <a href="dropdown/">dropdown component</a> for explanation.

<div class="dropdown mb-3e">
  <button class="btn dropdown-ctrl">Example</button><span class="dropdown-content">Example dropdown component content</span>
</div>

## Buttons and Forms

Codebase buttons and form elements play well together:

<form class="mb-3e">
  <input id="signup-example-1" name="examplename" placeholder="Name" type="text">
  <input id="signup-example-2" name="examplename" placeholder="Email" type="email">
  <button class="btn" type="submit">
    Signup
  </button>
</form>

```HTML
<form class="mb-3e">
  <input id="signup-example-1" name="examplename" placeholder="Name" type="text">
  <input id="signup-example-2" name="examplename" placeholder="Email" type="email">
  <button class="btn" type="submit">
    Signup
  </button>
</form>
```

<form class="mb-3e">
  <input class="pill" id="search-example-1" name="examplename" placeholder="Search..." type="search">
  <button class="btn btn-icon pill" type="submit">
    <span class="fas fa-search"></span>
  </button>
</form>

Use a `.small` search input and `.small` button for fitting a search form into a [navbar](../5-components/navbars.html#incorporating-inline-form-elements-and-buttons):

<form class="mb-3e">
  <input class="small" id="search-example-2" name="examplename" placeholder="Search..." type="search">
  <button class="btn btn-icon small" type="submit">
    <span class="fas fa-search"></span>
  </button>
</form>

Both form element and buttons can have `.block` [layout utility](../3-layout/layout-utilities.html) so you can do things such as this:

<div style="max-width: 300px; margin: 0 auto 1.5rem;">
  <form>
    <input class="mb-1e block" id="signup-example-3" name="examplename" placeholder="Name" type="text">
    <input class="mb-1e block"  id="signup-example-4" name="examplename" placeholder="Email" type="email">
    <button class="btn block" type="submit">
      Signup
    </button>
  </form>
</div>

```HTML
<form>
  <input class="mb-1e block" id="signup-example-3" name="examplename" placeholder="Name" type="text">
  <input class="mb-1e block"  id="signup-example-4" name="examplename" placeholder="Email" type="email">
  <button class="btn block" type="submit">
    Signup
  </button>
</form>
```

In the example above, `.mb-1e` bottom padding has also been added to the form inputs. See [spacing utilities](../4-utilities/spacing.html).
