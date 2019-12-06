---
title: Modals
prev: "Tables"
prevLink: "5-components-tables.html"
---

<p class="h4 thin">Codebase modals are a <a href="5-components-activator.html">activator</a> components using <code>data-content-id="{identifier}"</code> for specificity.</p>

<div class="on-page-toc b-thin rounded mb-3e py-1e">
  <p class="mx-2e my-1e">On this page:</p>
  <ul class="menu">
    <li class="menu-item"><a href="#the-simplest-modal">The Simplest Modal</a></li>
    <li class="menu-item"><a href="#modals-expand-to-fit-any-size-content">Modals Expand to Fit Any Size Content</a></li>
    <li class="menu-item"><a href="#integrating-a-card-into-a-modal">Integrating a Card into a Modal</a></li>
    <li class="menu-item"><a href="#integrating-a-css-grid-system-into-a-modal">Integrating a CSS Grid System into a Modal</a></li>
    <li class="menu-item"><a href="#scrollable-modal-with-fixed-header--footer">Scrollable Modal with Fixed Header / Footer</a></li>
    <li class="menu-item"><a href="#full-cover-modal">Full-Cover Modal</a></li>
    <li class="menu-item"><a href="#modal-classes">Modal Classes</a></li>
  </ul>
</div>

The modal’s content has no styling of its own – style it how you want.** At minimum, give it a background color and some padding. Maybe incorporate a Codebase card, layout system or tab system. It’s all up to you.

Modals can be dismissed (deactivated) by "click/tap outside to dismiss" and/or by a `.modal-close` element situated inside the modal content element.

<p class="bg-theme-2 p-2e">The modal’s semi-transparent backdrop is a huge CSS box shadow on the modal content – it is not a separate layer. Hat tip:  <a href="https://medium.com/@jotavejv/how-to-create-a-simple-overlay-that-works-anywhere-ae23456d3e8">João Victor’s Medium article</a>, "How to create a simple overlay that works anywhere".</p>

## The Simplest Modal

<div class="modal">
  <div class="modal-content p-2e bg-theme-2" id="modal-example-1">
  <p>Lorem ipsum dolor sit amet usu in odio gubergren conclusionemque.</p>
  <div class="right"><a class="modal-close">Close</a></div>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-1">Modal example 1</button> – the simplest modal

```HTML
<div class="modal">
  <div class="modal-content" id="modal-example-1">
    <p>
      Lorem ipsum dolor sit amet usu in odio gubergren conclusionemque.
    </p>
    <div class="right">
      <a class="modal-close">Close</a>
    </div>
  </div>
</div>
<button class="btn modal-ctrl" data-content-id="modal-example-1">Modal example 1</button>
```

## Modals Expand to Fit Any Size Content

If you don’t use any modal constraint classes (as described below), then you get a modal that will take the width of its content, out to the max-width of the viewport and 85% of the viewport height this viewport height restriction allows for the  browser bar, where it is on-screen.

By default, modals have their `.modal-content` CSS set to `overflow: auto`, so that extra long text and/or table content will automatically allow scrolling.

However, modal images that are too tall will always be responsively scaled down to maximum 70% of the viewport height (image width/height proportions are retained). This max-height ensures that images can be entirely displayed within the modal and also allow a little room for a short image title on a single line of text. (This provides a very simple "lightbox" setup.)

<div class="modal">
  <div class="modal-content m-3e b-thin p-2e bg-theme-1" id="modal-example-2a">
    <svg class="mb-1e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="500" height="1000" style="max-width: 100%; height: auto; background: #eee">
      <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
      <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
    </svg><b>Image Title</b><a class="modal-close float-right">Close</a>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-2a">Modal example 2a</button> – modal with a tall narrow image

<div class="modal">
  <div class="modal-content m-3e b-thin p-2e bg-theme-1" id="modal-example-2b">
    <svg class="mb-1e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="1500" height="300" style="max-width: 100%; height: auto; background: #eee">
      <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
      <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
    </svg><b>Image Title</b><a class="modal-close float-right">Close</a>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-2b">Modal example 2b</button> – modal with a short wide image

<div class="modal">
  <div class="modal-content m-3e b-thin p-2e bg-theme-1" id="modal-example-2c">
    <svg class="mb-1e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="1600" height="900" style="max-width: 100%; height: auto; background: #eee">
      <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
      <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
    </svg><b>Image Title</b><a class="modal-close float-right">Close</a>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-2c">Modal example 2c</button> – modal with a gigantic image

You can constrain the modal content width by adding a CSS `width` or `max-width`. And Codebase modals can be optionally constrained to a narrow width using classes `.container.container-sm`.

<div class="modal">
  <div class="modal-content container container-sm mt-3e m-2e p-2e bg-theme-2" id="modal-example-2d">
    <span class="modal-close float-right fas fa-times"></span>
    <h3>Lots of Text</h3>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
    <p>Movet voluptaria voluptatum has at, qui cu timeam ancillae democritum. Ad veniam detraxit his. In est bonorum fabulas deleniti, eam ex soluta verear albucius. Sale aperiri repudiandae eu cum, at cum sint dicunt. Prima tibique constituto cum ne, quidam dolorem detraxit pro no, sea an aeque zril.</p>
    <p>Et ponderum tacimates vim. Laudem ornatus intellegam no cum. Porro omittantur pro te. Iisque mandamus ei eum. Pri idque iudico appetere ex. Has no altera veritus civibus.</p>
    <p>At civibus aliquando usu. Vide libris has ut, eum illum luptatum ad. Quando scripta nusquam est te. Eleifend principes pertinacia sed cu, vix ut meis diceret salutandi, ea inermis ocurreret voluptatibus eam. Ei vidisse conclusionemque eam, vix eros mediocrem at. Graeco laboramus te mea, ius fabellas consequat voluptatum et.</p>
    <p>No vidit errem nemore est, usu quem omnes definitionem eu, modo movet suscipiantur no duo. Ex eum accumsan principes, constituam reprehendunt an has. Ea eos nostro oportere, ei qui simul definitiones. Tritani argumentum sit te, veri novum aliquam ne quo, nec rebum graecis delectus ei.</p>
    <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
    <p>Movet voluptaria voluptatum has at, qui cu timeam ancillae democritum. Ad veniam detraxit his. In est bonorum fabulas deleniti, eam ex soluta verear albucius. Sale aperiri repudiandae eu cum, at cum sint dicunt. Prima tibique constituto cum ne, quidam dolorem detraxit pro no, sea an aeque zril.</p>
    <p>Et ponderum tacimates vim. Laudem ornatus intellegam no cum. Porro omittantur pro te. Iisque mandamus ei eum. Pri idque iudico appetere ex. Has no altera veritus civibus.</p>
    <p>At civibus aliquando usu. Vide libris has ut, eum illum luptatum ad. Quando scripta nusquam est te. Eleifend principes pertinacia sed cu, vix ut meis diceret salutandi, ea inermis ocurreret voluptatibus eam. Ei vidisse conclusionemque eam, vix eros mediocrem at. Graeco laboramus te mea, ius fabellas consequat voluptatum et.</p>
    <p>No vidit errem nemore est, usu quem omnes definitionem eu, modo movet suscipiantur no duo. Ex eum accumsan principes, constituam reprehendunt an has. Ea eos nostro oportere, ei qui simul definitiones. Tritani argumentum sit te, veri novum aliquam ne quo, nec rebum graecis delectus ei.</p>
    <p class="center"><button class="modal-close btn btn-link">Close</button></p>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-2d">Modal example 2d</button> Narrow modal with a lot of text, and <code>.container.container-sm</code>.

## Integrating a Card into a Modal

Codebase modals come with (almost) no styling of their own – so you can do whatever you like with them. If you require a block header, body and footer then you can easily integrate a Codebase card (or media object).

<div class="modal">
  <div class="modal-content container container-sm b-thin rounded card bg-theme-1" id="modal-example-3">
    <div class="card-header p-1e bt-thick b-warning bg-theme-2">
      <h4 class="m-0">Modal / Card header</h4>
    </div>
    <div class="card-body p-block">
      <p class="mt-2e">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="card-footer p-block warning">
      <div class="float-right modal-close uppercase">Dismiss</div>
    </div>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-3">Modal example 3</button> – narrow modal integrating a card plus some extra styling.

```HTML
</div class="modal">
  <div id="modal-example-3" class="modal-content container container-sm card">
    <div class="card-header">
      Card header content
    </div>
    <div class="card-body">
      Card body content
    </div>
    <div class="card-footer">
      Card footer content
      <span class="modal-close float-right uppercase">Dismiss</span>
    </div>
  </div>
</div>
<button class="modal-ctrl btn" data-content-id="modal-example-3">Modal example 3</button>
```

## Integrating a CSS Grid System into a Modal

You can also put a [grid](3-layout-grid.html) into a modal (with or without incorporating it into a card).

Also, if you need to constrain the modal container width, you can do add a [container](3-layout-containers.html) of your choice.

<div class="modal">
  <div class="modal-content mx-2e b-thin rounded bg-theme-1 container container-xl card" id="modal-example-4">
    <div class="card-header bb-thin p-block"><span class="modal-close float-right mt-1e fas fa-times"></span>
      <h4 class="mb-0">Modal / Card Header</h4>
    </div>
    <div class="card-body p-2e grid grid-gap grid-md-equalize-2">
      <div class="col-md-1">
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="800" height="600" style="max-width: 100%; height: auto; background: #eee">
          <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
          <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
        </svg>
      </div>
      <div class="col-md-2">
        <h2>Image Title</h2>
        <p>Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
        <p>
          <button class="btn btn-primary">Activate</button>
          <button class="btn btn-info">Delete</button>
        </p>
      </div>
    </div>
    <div class="card-footer bt-thin p-2e">
      <div class="right">
        <button class="btn btn-info btn-sm modal-close right">Cancel</button>
      </div>
    </div>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-4">Modal example 4</button> – modal with a grid system inside a card

```HTML
</div class="modal">
  <div id="modal-example-4" class="modal-content container card">
    <div class="card-header">
      <span class="modal-close float-right">&times;</span>
      Card header content
    </div>
    <div class="card-body flexbox flexbox-gap">
      <div class="flex-item-md-span-6">
        <!-- First flex-item content -->
      </div>
      <div class="flex-item-md-span-6">
        <!-- Second flex-item content -->
      </div>
    </div>
    <div class="card-footer">
      Card footer content
    </div>
  </div>
</div>
<button class="modal-ctrl btn" data-content-id="modal-example-4">Modal example 4</button>
```

## Scrollable Modal with Fixed Header / Footer

The Codebase modal modifier class `.modal-fix` is designed to work with the use of a Codebase card in the modal. .modal-fix prevents the modal’s default overflow scrolling and enables card header to be fixed to the top and/or and footer to be fixed to the bottom of the modal – and the card body is allowed to have overflow scrolling.

`.modal-fix` is what you need when your modal contains a lot of text or table data.

<div class="modal">
  <div class="modal-content modal-content-fix container container-sm b-thin rounded bg-theme-2" id="modal-example-5">
    <div class="card card-vertical">
      <div class="card-header p-block bb-thin bg-white"><a class="modal-close float-right">Done</a>
        <h4 class="mb-0">Header</h4>
      </div>
      <div class="card-body">
        <p class="p-block">Lorem ipsum dolor sit amet, vis in blandit singulis, an unum doming facilisi vim. Facete aliquam bonorum id quo, ex labore tincidunt mel, usu no quod liberavisse. Ex sea dolorum insolens assueverit, sed ut harum latine dignissim. Vis cibo vidit ea, eu duo debet platonem explicari, pro ex graece meliore. Illum graeci inciderint mei et, ei decore nostro vim.</p>
        <style>
          .tracks {
            width: 100%;
          }
          .tracks img {
            position: relative;
            margin: 0.25rem 0.5rem;
          }
          .tracks .info {
            padding-right: 0.5rem;
          }
        </style>
        <table class="table table-borderless bt-thin tracks">
          <tbody>
            <tr class="bb-thin">
              <td>1
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>2
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>3
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>4
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>5
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>6
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>7
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>8
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>9
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>10
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>11
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
            <tr class="bb-thin">
              <td>12
              </td>
              <td>
                <svg class="float-left mr-2e" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" width="72" height="72" style="max-width: 100%; height: auto; background: #eee">
                  <line x2="100%" y2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                  <line y1="100%" x2="100%" style="stroke: #ccc; stroke-width: 2px; stroke-linecap: round;"></line>
                </svg> <b>Lorem ipsum dolor sit amet</b> <br> <span class="small">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span> 
              </td>
              <td class="big"><i class="fas fa-cloud-download-alt"></i></td>
              <td class="big"><i class="fas fa-play-circle"></i></td>
              <td class="big"><i class="fas fa-comment"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-5">Modal example 5</button> – modal with a card inside.

## Full-Cover Modal

If you require a modal to cover the entire window, add `.modal-content-cover`.

<div class="modal">
  <div class="modal-content modal-content-cover bg-theme-1" id="modal-example-6">
    <div class="container container-xl px-2e">
      <span class="modal-close float-right fas fa-times"></span>
      <h2 class="mt-3e">Full-Cover Modal</h2>
      <hr>
      <div class="grid grid-gap">
        <div class="col-md-1">
          <h4>Department 1
          </h4>
          <ul class="menu mb-3e">
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
          </ul>
        </div>
        <div class="col-md-2">
          <h4>Department 2
          </h4>
          <ul class="menu mb-3e">
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4>Department 3
          </h4>
          <ul class="menu mb-3e">
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Department 4
          </h4>
          <ul class="menu mb-3e">
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
          </ul>
        </div>
        <div>
          <h4>Department 5
          </h4>
          <ul class="menu mb-3e">
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
          </ul>
        </div>
        <div>
          <h4>Department 6
          </h4>
          <ul class="menu mb-3e">
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
            <li class="menu-item"><a href="">Link</a></li>
          </ul>
        </div>
      </div>
      <p class="center"><span class="modal-close btn primary">Close</span></p>
    </div>
  </div>
</div>

<button class="btn btn-sm modal-ctrl" data-content-id="modal-example-6">Modal example 6</button> – full cover modal

## Modal Classes

The table below includes only classes for the modal itself. For card classes see card. For flexbox layout classes see flexbox classes.

<table class="table">
  <thead>
    <tr>
      <th>Class</th>
      <th>Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.modal</code></td>
      <td>The modal block. Also serves as the modal backdrop.</td>
    </tr>
    <tr>
      <td><code>.modal-ctrl</code><sup>1</sup> <br> <code class="nowrap">data-content-id="{ID}"</code></td>
      <td>Opening control (e.g. button) <br> <code>{ID}</code> = the ID of the modal content to be opened</td>
    </tr>
    <tr>
      <td><code>.modal-close</code></td>
      <td>(Optional) modal close control, to be placed within the modal content element.</td>
    </tr>
    <tr>
      <td><code>.modal-content</code><sup>2</sup></td>
      <td>The modal itself. (A unique ID is also required, of your choice – see <code>data-content-id="{ID}"</code> above.)</td>
    </tr>
    <tr>
      <td><code>.modal-content-fix</code></td>
      <td>(Optional) if a <code>.card</code> is being used in a modal, this class will fix <code>.card-header</code> and/or <code>.card-footer</code> while the <code>.card-body</code> remains vertically scrollable. Ideal for use with constrained-width modals that have a lot of content. </td>
    </tr>
    <tr>
      <td><code>.modal-content-cover</code></td>
      <td>(Optional) full cover</td>
    </tr>
  </tbody>
</table>

<sup>1</sup> **Note:** Do not put the `.modal-ctrl` _inside_ the `.modal` container, because `.modal` is styled for use as the backdrop.

<sup>2</sup> By default the modal content width is unconstrained – so the width becomes whatever the content needs ("expand to fit"). You can constrain modal content widths with e.g. `.container.container-sm`.
