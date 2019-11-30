// CODEBASE MEGAMENU

/* eslint-env browser */
/* jshint browser: true */

(function () {
  'use strict';

  function megamenuReset() {
    //e.preventDefault();
    [].forEach.call(document.querySelectorAll('.megamenu'), function(el) {
      if (el.classList.contains('megamenu-offcanvas-is-open')) {
        el.classList.remove('megamenu-offcanvas-is-open');

        [].forEach.call(document.querySelectorAll('.submenu-is-revealed'), function(el) {
          el.classList.remove('submenu-is-revealed');
        });
      }
    });
  }

  // `.megamenu` stopPropagation (so not to click <body> and thereby reset itself)
  [].forEach.call(document.querySelectorAll('.megamenu'), function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
  
  // Click outside to reset megamenu
  function clickOutside() {
    document.body.addEventListener('click', function () {
      megamenuReset();
    });
  }
  clickOutside();

  // Window resize resets megamenu (e.g. switching phone or tablet orientation)
  function windowResize() {
    window.addEventListener('resize', function () {
      megamenuReset();
    });
  }
  windowResize();

  // Megamenu navicon (offcanvas mode)
  [].forEach.call(document.querySelectorAll('.megamenu-navicon'), function(e) {
    e.addEventListener('click', function(el) {
      
      el.stopPropagation();

      var megamenuId = "#" + this.dataset.megamenuId;

      document.body.querySelector(megamenuId).classList.toggle('megamenu-offcanvas-is-open');
    });
  });

  // Megamenu close (offcanvas mode)
  [].forEach.call(document.querySelectorAll('.megamenu-close'), function(e) {
    e.addEventListener('click', function() {
      megamenuReset();
    });
  });

  // Megamenu submenu toggle (small viewports)

  [].forEach.call(document.querySelectorAll('.submenu-toggle'), function(el) {
    el.addEventListener('click', function() {
      this.parentNode.classList.toggle('submenu-is-revealed');
    });
  });

}());