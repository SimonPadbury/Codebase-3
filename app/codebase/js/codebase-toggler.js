// CODEBASE TOGGLER

/* eslint-env browser */
/* jshint browser: true */

(function () {
  'use strict';

  [].forEach.call(document.querySelectorAll('[data-toggle-id]'), function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      // Get Toggle ID
      var toggleID = '#' + this.getAttribute('data-toggle-id');
      var toggleClasses = this.getAttribute('data-toggle-class');
      // The Toggler
      document.body.querySelector(toggleID).classList.toggle(toggleClasses);
    });
  });

}());