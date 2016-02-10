// CODEBASE
// ========

/* jslint browser: true */
/* global $, jQuery */

(function ($) {
  "use strict";
  $(document).ready(function () {

    // Reset overlay

    $('body').prepend('<span class="reset-overlay"></span>');

    function reset_overlay() {
      // Put everything that needs .reset-overlay activity in here
      $('.reset-overlay').removeClass('reset-overlay-is-active');
      $('.menubar').removeClass('menubar-is-open');
      $('.menubar').animate({scrollTop: 0}, 600);
      $('.menubar-parent').removeClass('menubar-parent-is-toggled');
      $('.menubar ul').removeClass('menubar-dropdown-is-revealed');
      $('.button-dropdown').removeClass('button-dropdown-is-revealed');
    }

    $('.reset-overlay').click(function () {
      reset_overlay();
    });

    $(window).resize(function () {
      reset_overlay();
    });

    // Menubar

    $('.menubar').prepend('<span class="menubar-toggle"><i class="mega-octicon octicon-three-bars"></i></span>');
    $('.menubar-toggle').click(function () {
      $(this).closest('.menubar').toggleClass('menubar-is-open');
      $('.reset-overlay').toggleClass('reset-overlay-is-active');
    });
    if ($('.menubar').hasClass('menubar-fixed')) {
      $('body').css('padding-top', '50px');
    } 

    // Menubar dropdowns

    $('.menubar ul ul').parent().find('>a').addClass('menubar-parent').append('&nbsp;<i class="octicon octicon-triangle-down"></i>');
    $('.menubar-parent').click(function (e) {
      if (!$(this).hasClass('menubar-parent-is-toggled')) {
        e.preventDefault();
        $('.reset-overlay').addClass('reset-overlay-is-active');
        $(this).toggleClass('menubar-parent-is-toggled').siblings('ul').toggleClass('menubar-dropdown-is-revealed');
      }
    });

    // Pagination
    
    $('.pagination .current a, .pagination .current').click(function (e) {
      e.preventDefault();
    });
    
    // Button dropdowns

    $('.button-dropdown').append('&nbsp;<i class="octicon octicon-triangle-down"></i>');
    $('.button-dropdown').click(function (e) {
      e.preventDefault();
      if (!$(this).hasClass('button-dropdown-is-revealed')) {
        $(this).addClass('button-dropdown-is-revealed');
        $('.reset-overlay').addClass('reset-overlay-is-active');
      } else {
        reset_overlay();
      }
    });
    $('.button-dropdown span').click(function (e) {
      e.stopPropagation();
    });

    // Tabs

    $('.tab-label:first-of-type').addClass('is-front');
    $('.tab-label:first-of-type + .tab-card').addClass('is-front');

    $('.tab-label').click(function () {
      var tab_id = $(this).attr('data-tab');

      $(this).siblings().removeClass('is-front');

      $(this).addClass('is-front');
      $("#" + tab_id).addClass('is-front');
    });

    // tabs-left

    var biggestHeight = '0';

    $('.tabs-left .tab-card').each(function () {
      if ($(this).height() > biggestHeight) {
        biggestHeight = $(this).height();
      }
    });
    
    $('.tabs-left').height(biggestHeight);

    /*
    if ($('.tabs').hasClass('tabs-left')) {
      var tabContentHeight = 0;
      $.each($('.tabs-left').children('.tab-card'), function() {
        tabContentHeight += $(this).height();
      });
      $('.tabs-left').height(tabContentHeight);
    }
    */

  });
}(jQuery));
