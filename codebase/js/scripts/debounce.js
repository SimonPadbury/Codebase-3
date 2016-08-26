/*
Debounce (Utility)
*/

(function ($) {
  'use strict';
  $.fn.cb_debounce = function (fn, delay) {

    var debounceTimer = null;

    return function () {
      var context = this,
        args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };

  };
}(jQuery));
