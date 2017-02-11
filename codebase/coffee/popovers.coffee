# POPOVERS

$.fn.cb_popover = ->
  # called by $(".popover").cb_popover();

  cb_popover_open = (e) ->
    e.preventDefault()

    ### jshint validthis: true ###

    $(this).blur()

    popover_id = $(this).attr("data-popover")

    $("#" + popover_id).scrollTop(0).parent().addClass "popover__wrap--is-open"

    $(".reset-overlay").addClass "reset-overlay--is-raised-higher reset-overlay--darken"

    $(".popover").click (e) ->
      e.stopPropagation()

    cb_popover_close = ->
      $(".popover__wrap").removeClass "popover__wrap--is-open"
      $(".reset-overlay").removeClass "reset-overlay--is-raised-higher reset-overlay--darken"

    $(".popover__wrap--is-open").on "click", cb_popover_close
    $(".popover__close").on "click", cb_popover_close

    popover_id = null

  $(this).wrap "<div class='popover__wrap' />"
  $(".popover__open").on "click", cb_popover_open
