# SHOWHIDE

# (1.) Showhide Toggle (togger is outside, as a sibling below or above `showhide__content`)

$.fn.cb_showhide_toggle = ->
  # called by $(".showhide__toggle").cb_showhide_toggle()

  cb_showhide = ->

    ### jshint validthis: true ###

    if $(this).closest(".showhide").hasClass("showhide--is-resettable")
      if !$(".reset-overlay").hasClass("reset-overlay--is-raised")
        $(".reset-overlay").addClass "reset-overlay--is-raised"
      else
        $(".reset-overlay").removeClass "reset-overlay--is-raised"
      $(this).closest(".showhide__content").addClass "showhide__content--is-revealed"

    $(this).toggleClass "showhide__toggle--is-toggled"

    # Showhide accordion

    if $(this).closest(".showhide").hasClass("showhide--accordion")
      $(this)
        .next(".showhide__content").slideToggle(300).toggleClass("showhide__content--is-revealed")
        .siblings(".showhide__content").slideUp(300).removeClass("showhide__content--is-revealed")
        .siblings(".showhide__toggle").removeClass "showhide__toggle--is-toggled"
    else
      $(this)
      .siblings(".showhide__content").slideToggle(300).toggleClass "showhide__content--is-revealed"

    $(".reset-overlay--is-raised").click ->
      $(".showhide__toggle").removeClass "showhide__toggle--is-toggled"
      $(".showhide__content").removeClass("showhide__content--is-revealed").slideUp 300
      $(".reset-overlay").removeClass("reset-overlay--is-raised")

  $(".showhide--show-start > .showhide__content").addClass("showhide__content--is-revealed").css {"display": "block"}
  $(this).on("click", cb_showhide)

# (2.) Showhide Dismiss (toggle is a child of `showhide__content`)

$.fn.cb_showhide_dismiss = ->
  # called by $(".showhide__dismiss").cb_showhide_dismiss()

  cb_showhide_dismiss_x = ->

    ### jshint validthis: true ###

    $(this).closest(".showhide__content").slideUp(300).removeClass "showhide__content--is-revealed"
    return

  $(this).on("click", cb_showhide_dismiss_x)
