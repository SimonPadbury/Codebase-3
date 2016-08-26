/*
Slideshow (Component)
*/

(function ($) {
  'use strict';
  $.fn.cb_slideshow = function () {
    // called by $('.slideshow').cb_slideshow();

    // Slideshow Arrows and Pager Setup
    $(this).prepend('<div class="slideshow__prev"><span></span></div><div class="slideshow__next"><span></span></div>');
    $(this).append('<div class="slideshow__pager-wrap" />');
    $('.slideshow__item').each(function(){
      $('.slideshow__pager-wrap').append('<div class="slideshow__pager" />');
    });

    // Slideshow Variables

    var slideLeftPos = $('.slideshow__inner').scrollLeft(),
      slideWidth = $('.slideshow').width(),
      slideTotal = $('.slideshow__inner').children().length,
      slideCount = 1;

    // Make Slideshow Responsive

    $(window).resize($.fn.cb_debounce(function () {
      slideLeftPos = $('.slideshow__inner').scrollLeft();
      slideWidth = $('.slideshow').width();
      $('.slideshow__inner').animate({
        scrollLeft: (slideWidth * slideCount) - slideWidth
      }, 250);
    }, 250));

    // Slideshow Prev Arrow

    function cb_slideshow_prev() {
      if (slideCount > 1) {
        $('.slideshow__inner').animate({
          scrollLeft: slideLeftPos - slideWidth
        }, {
          duration: 500,
          complete: function () {
            slideLeftPos = $('.slideshow__inner').scrollLeft();
            slideCount--;
          }
        });
        // Reset the pager
        $('.slideshow__pager').removeClass('is-current');
        $('.slideshow__pager:nth-of-type(' + (slideCount - 1) + ')').addClass('is-current');
      }
    }

    $('.slideshow__prev span').on('click', function () {
      cb_slideshow_prev();
    });

    // Slideshow Next Arrow

    function cb_slideshow_next() {
      if (slideCount < (slideTotal)) {
        $('.slideshow__inner').animate({
          scrollLeft: slideLeftPos + slideWidth
        }, {
          duration: 500,
          complete: function () {
            slideLeftPos = $('.slideshow__inner').scrollLeft();
            slideCount++;
          }
        });
        // Reset the pager
        $('.slideshow__pager').removeClass('is-current');
        $('.slideshow__pager:nth-of-type(' + (slideCount + 1) + ')').addClass('is-current');
      }
    }

    $('.slideshow__next span').on('click', function () {
      cb_slideshow_next();
    });

    // Slideshow Pager

    $('.slideshow__pager:nth-of-type(' + (slideCount) + ')').addClass('is-current');

    $('.slideshow__pager').on('click', function () {
      slideCount = $(this).index() + 1;
      slideLeftPos = slideWidth * (slideCount - 1);
      $('.slideshow__inner').animate({
        scrollLeft: slideWidth * (slideCount - 1)
      }, 500);
      // Reset the pager
      $('.slideshow__pager').removeClass('is-current');
      $(this).addClass('is-current');
    });

  };
}(jQuery));
