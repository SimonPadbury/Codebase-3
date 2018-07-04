// CODEBASE LOAD PARTIAL
// =====================

/* eslint-env browser */
/* jshint browser: true */

(function () {
  
    "use strict";
  
    // Document Ready
    document.addEventListener('DOMContentLoaded', function () {
  
      [].forEach.call(document.querySelectorAll('[data-load-partial]'), function (el) {
  
        var
          loadPartial = el.getAttribute('data-load-partial'),
          xhr = new XMLHttpRequest();
  
        xhr.open('GET', loadPartial);
        xhr.onreadystatechange = function () {
          if (this.readyState !== 4) {
            return; // 4 = the XHR request is complete
          }
          if (this.status !== 200) {
            return; // 200 = the XHR status is OK (successful)
          }
  
          el.innerHTML = this.responseText; // get the response data as a string (text), and deliver the into `this` element itself
        };
        xhr.send();
  
      });
  
    }, false);
  
  }());