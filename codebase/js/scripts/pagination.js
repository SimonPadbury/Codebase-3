// PAGINATION (Components)
// =======================
// • Just making the current link unfollowable.

(function ($) {

  'use strict';

  $.fn.cb_pagination = function () {
    // called by $('.pagination').cb_pagination();

    $('.pagination__current a, .pagination__current').click(function (e) {
      e.preventDefault();
    });

  };
}(jQuery));
