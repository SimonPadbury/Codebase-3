/* eslint-env browser */
/* jshint browser: true */

// CODEBASE TABS

(function () {
  'use strict';

  // Add `.is-front` to first tab label and first Tab Panel in each tab set
  [].forEach.call(document.querySelectorAll('.tab__label:first-of-type'), function(el) {
    el.classList.add('is-front');
    var frontCardId = el.dataset.tabId;
    document.getElementById(frontCardId).classList.add('is-front');
  });

  // TABS CONTROL

  [].forEach.call(document.querySelectorAll('.tab__label'), function(el) {
    el.addEventListener('click', function(e) {

      e.stopPropagation();

      var tabId = '#' + this.dataset.tabId;
      var tabGroup;

      if ( el.parentNode.classList.contains('tabs') ) {
        tabGroup = el.parentNode;
      } else {
        tabGroup = el.parentNode.parentNode;
      }

      if ( !(this.classList.contains('is-front')) ) {

        // Reset other tabs (in this tab set)
        var isFront = tabGroup.querySelectorAll('.is-front');
        for (var i = 0; i < isFront.length; i++) {
          if ( e !== isFront ) {
            isFront[i].classList.remove('is-front');
          }
        }

        // Make this clicked tab to be front
        this.classList.add('is-front');
        document.body.querySelector(tabId).classList.add('is-front');

      }

    });

  });

}());