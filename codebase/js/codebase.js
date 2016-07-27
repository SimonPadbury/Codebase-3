// CODEBASE
// ========

/*jslint browser: true*/
/*jshint unused:false*/
/*global $, jQuery*/

(function ($) {
  'use strict';

  $(document).ready(function () {

    // Debounce

    function debounce(fn, delay) {
      var debounceTimer = null;
      return function () {
        var context = this,
          args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
          fn.apply(context, args);
        }, delay);
      };
    }

    // Reset Overlay

    $('body').wrapInner('<div class="body-inner-wrap" />');
    $('.body-inner-wrap').before('<span class="reset-overlay"></span>');

    function resetOverlay() {
      // Put everything that needs `.reset-overlay` activity in here
      $('html').removeClass('js-scroll-lock');
      $('body').removeClass('off-canvas--is-open');
      $('.reset-overlay')
        .removeClass('reset-overlay--darken')
        .removeClass('reset-overlay--is-raised')
        .removeClass('reset-overlay--is-raised-higher');
      $('.menubar').removeClass('menubar--is-open');
      if ($('.menubar__navicon').is(':visible')) {
        $('.menubar__content').slideUp();
      }
      $('.dropdown__toggle').removeClass('dropdown__toggle--is-toggled');
      $('.dropdown__content').removeClass('dropdown__content--is-revealed');
      $('.modal__wrap').removeClass('modal__wrap--is-open');
    }

    $('.reset-overlay').on('click', resetOverlay);
    $('.reset-overlay').on('touchstart', resetOverlay);
    $(window).resize(debounce(function () {
      resetOverlay();
    }, 250));

    // Menubar

    $('.menubar').wrap('<div class="menubar__has-wrap"></div>');
    $('.menubar--fixed').parent().addClass('menubar__has-wrap--is-fixed');

    if ($('.menubar').hasClass('menubar--fixed')) {
      $('body').addClass('body--menubar-is-fixed');
    }

    function MenubarNavicon(e) {
      if (!$(this).parent('.menubar').hasClass('menubar--is-open')) {
        $(this).parent('.menubar').addClass('menubar--is-open');
        $('.reset-overlay').addClass('reset-overlay--is-raised');
        $(this).siblings('.menubar__content').slideDown();
      } else {
        resetOverlay();
      }
      e.preventDefault();
    }
    $('.menubar__navicon').on('click', MenubarNavicon);
    $('.menubar__navicon').on('touchstart', MenubarNavicon);

    // Menubar Dropdowns (using dropdowns, see below)

    $('.menubar ul ul')
      .addClass('dropdown__content')
      .parent().find('>a').addClass('dropdown__toggle');
    function MenubarParentLink() {
      if ($('.reset-overlay').hasClass('reset-overlay--is-raised')) {
        location.href = $(this).attr('href');
      }
    }
    $('.menubar .dropdown__toggle').on('click', MenubarParentLink);
    $('.menubar .dropdown__toggle').on('touchstart', MenubarParentLink);

    // Pagination

    $('.pagination__item--current a, .pagination__link--current').click(function (e) {
      e.preventDefault();
    });

    // Dropdowns

    $('.dropdown__toggle').append('&nbsp;<i class="dropdown__caret fa fa-caret-down"></i>');

    function Dropdown(e) {
      e.preventDefault();
      if (!$(this).next('.dropdown__content').hasClass('dropdown__content--is-revealed')) {
        $(this).addClass('dropdown__toggle--is-toggled');
        $(this).next('.dropdown__content').addClass('dropdown__content--is-revealed');
        $('.reset-overlay').addClass('reset-overlay--is-raised');
        $('.dropdown__content').click(function (e) {
          e.stopPropagation();
        });
        $('.dropdown__content').touchstart(function (e) {
          e.stopPropagation();
        });
      } else {
        resetOverlay();
      }
    }

    $('.dropdown__toggle').on('click', Dropdown);
    $('.dropdown__toggle').on('touchstart', Dropdown);

    // Off-canvas sidebar

    $('[class*="tiny--off-canvas"]').prev().addClass('show--tiny-only');
    $('[class*="small--off-canvas"]').prev().addClass('show--small-down');
    $('[class*="medium--off-canvas"]').prev().addClass('show--medium-down');
    $('[class*="large--off-canvas"]').prev().addClass('show--large-down');

    function off_canvas_open() {
      $('html').addClass('js-scroll-lock');
      $('body').addClass('off-canvas--is-open');
      $('.reset-overlay').addClass('reset-overlay--is-raised');
      $('.tiny--off-canvas').scrollTop(0);
      $('.small--off-canvas').scrollTop(0);
      $('.medium--off-canvas').scrollTop(0);
      $('.large--off-canvas').scrollTop(0);
    }

    function off_canvas_navicon(e) {
      if (!$('body').hasClass('off-canvas--is-open')) {
        off_canvas_open();
      } else {
        resetOverlay();
      }
      e.preventDefault();
    }
    $('.off-canvas-navicon').on('click', off_canvas_navicon);
    $('.off-canvas-navicon').on('touchstart', off_canvas_navicon);

    // Forms

    $('.select--single').after('<div class="select--single-wrapper></div>');

    // Tabs

    $('.tabs__label:first-of-type').addClass('tabs__label--is-front');
    $('.tabs__label:first-of-type + .tabs__card').addClass('tabs__card--is-front');

    function TabsOperation() {
      var tab_id = $(this).attr('data-tabs');
      $(this).siblings().removeClass('tabs__label--is-front').removeClass('tabs__card--is-front');
      $(this).addClass('tabs__label--is-front');
      $("#" + tab_id).addClass('tabs__card--is-front');
    }

    $('.tabs__label').on('click', TabsOperation);
    $('.tabs__label').on('touchstart', TabsOperation);

    // .tabs-left

    var tabsLeft_minHeight = 0;

    $(".tabs--left .tabs__label").each(function () {
      tabsLeft_minHeight += $(this).outerHeight();
    });

    function tabsLeftHeight() {
      var tabsLeft_height = $('.tabs--left .tabs__card--is-front').height();
      $('.tabs--left .tabs__card--is-front .tabs__card-content').css({'min-height': tabsLeft_minHeight * 1.15});
      tabsLeft_height = $('.tabs--left .tabs__card--is-front').height();
      $('.tabs--left').height(tabsLeft_height);
    }

    tabsLeftHeight();
    $('.tabs--left .tabs__label').on('click', tabsLeftHeight);
    $('.tabs--left .tab__label').on('touchstart', tabsLeftHeight);
    $(window).resize(debounce(function () {
      tabsLeftHeight();
    }, 250));

    // Tables

    $('.table').wrap('<div class="table--wrap-outer"><div class="table--wrap-inner"></div></div>');

    function tableMore() {
      $('.table').each(function () {
        $(this).parent().parent().removeClass('table--wide');
        if ($(this).parent()[0].scrollWidth >  $('.table--wrap-inner').innerWidth()) {
          $(this).parent().parent().addClass('table--wide');
        } else {
          $(this).parent().parent().removeClass('table--wide');
        }
      });
    }

    tableMore();
    $(window).resize(debounce(function (event) {
      tableMore();
    }, 250));

    // Modals

    $('.modal').wrap('<div class="modal__wrap" />');

    function ModalWrapReset() {
      if ($(this).find('.modal').hasClass('modal--outside-dismiss')) {
        resetOverlay();
      }
    }

    function Modal(e) {
      e.preventDefault();
      $(this).blur();
      var modal_id = $(this).attr('data-modal');
      $('#' + modal_id).scrollTop(0);
      $('#' + modal_id).parent().addClass('modal__wrap--is-open');
      $('html').addClass('js-scroll-lock');
      $('.reset-overlay').addClass('reset-overlay--is-raised-higher reset-overlay--darken');
      $('.modal__close').on('click', resetOverlay);
      $('.modal__close').on('touchstart', resetOverlay);
    }
    $('.modal__open').on('click', Modal);
    $('.modal__open').on('touchstart', Modal);

  });
}(jQuery));
