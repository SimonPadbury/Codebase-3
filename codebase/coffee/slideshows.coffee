# SLIDESHOWS

$.fn.cb_slideshow = ->
  # called by $('.slideshow').cb_slideshow();

  # Slideshow Arrows and Pager Setup

  $(this).prepend '<div class="slideshow__prev"><span></span></div><div class="slideshow__next"><span></span></div>'
  $(this).append '<div class="slideshow__pager-wrap" />'
  $('.slideshow__item').each ->
    $('.slideshow__pager-wrap').append '<div class="slideshow__pager" />'

  # Slideshow Variables

  slideLeftPos = $('.slideshow__inner').scrollLeft()
  slideWidth = $('.slideshow').width()
  slideTotal = $('.slideshow__inner').children().length
  slideCount = 1

  # Make Slideshow Responsive

  $(window).resize $.fn.cb_debounce((->
    slideLeftPos = $('.slideshow__inner').scrollLeft()
    slideWidth = $('.slideshow').width()
    $('.slideshow__inner').animate { scrollLeft: slideWidth * slideCount - slideWidth }, 250
  ), 250)

  # Slideshow Prev Arrow

  cb_slideshow_prev = ->
    if slideCount > 1
      $('.slideshow__inner').animate { scrollLeft: slideLeftPos - slideWidth }, {
        duration: 500
        complete: ->
          slideLeftPos = $('.slideshow__inner').scrollLeft()
          slideCount = slideCount - 1
        }
      # Reset the pager
      $('.slideshow__pager').removeClass 'is-current'
      $('.slideshow__pager:nth-of-type(' + (slideCount - 1) + ')').addClass 'is-current'
    else if $('.slideshow').hasClass('slideshow--looping') and slideCount == 1
      $('.slideshow__inner').animate { scrollLeft: slideWidth * slideTotal }, {
        duration: 500
        complete: ->
          slideLeftPos = $('.slideshow__inner').scrollLeft()
          slideCount = slideTotal
        }
      # Reset the pager
      $('.slideshow__pager').removeClass 'is-current'
      $('.slideshow__pager:nth-of-type(' + slideTotal + ')').addClass 'is-current'

  $('.slideshow__prev span').on 'click', ->
    cb_slideshow_prev()

  # Slideshow Next Arrow

  cb_slideshow_next = ->
    if slideCount < slideTotal
      $('.slideshow__inner').animate { scrollLeft: slideLeftPos + slideWidth }, {
        duration: 500
        complete: ->
          slideLeftPos = $('.slideshow__inner').scrollLeft()
          slideCount = slideCount + 1
        }
      # Reset the pager
      $('.slideshow__pager').removeClass 'is-current'
      $('.slideshow__pager:nth-of-type(' + (slideCount + 1) + ')').addClass 'is-current'
    else if $('.slideshow').hasClass('slideshow--looping') and slideCount == slideTotal
      $('.slideshow__inner').animate { scrollLeft: 0 }, {
        duration: 500
        complete: ->
          slideLeftPos = $('.slideshow__inner').scrollLeft()
          slideCount = 1
        }
      # Reset the pager
      $('.slideshow__pager').removeClass 'is-current'
      $('.slideshow__pager:nth-of-type(' + 1 + ')').addClass 'is-current'

  $('.slideshow__next span').on 'click', ->
    cb_slideshow_next()

  # Slideshow Pager

  $('.slideshow__pager:nth-of-type(' + slideCount + ')').addClass 'is-current'

  $('.slideshow__pager').on 'click', ->
    slideCount = $(this).index() + 1
    slideLeftPos = slideWidth * (slideCount - 1)
    $('.slideshow__inner').animate { scrollLeft: slideWidth * (slideCount - 1) }, 500
    # Reset the pager
    $('.slideshow__pager').removeClass 'is-current'
    $(this).addClass 'is-current'
