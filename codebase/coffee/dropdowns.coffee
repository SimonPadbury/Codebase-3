# DROPDOWNS

$.fn.cb_dropdown_toggle = ->
  # called by $(".dropdown__toggle").cb_dropdown_toggle()

  cb_dropdown_close = ->
    $(".dropdown__toggle").removeClass "dropdown__toggle--is-toggled"
    $(".dropdown__content").removeClass("dropdown__content--is-revealed")
    $(".reset-overlay").removeClass("reset-overlay--is-raised")

  cb_dropdown = (e) ->
    if $(".reset-overlay").hasClass("reset-overlay--is-raised")
      cb_dropdown_close
    else
      if $(".dropdown__toggle").hasClass("dropdown__toggle--is-toggled")
        cb_dropdown_close
      else
        e.preventDefault()

        ### jshint validthis: true ###

        $(this).addClass("dropdown__toggle--is-toggled").next(".dropdown__content").addClass "dropdown__content--is-revealed"

        $(".reset-overlay").addClass "reset-overlay--is-raised"
        $(".reset-overlay--is-raised").on("click", cb_dropdown_close)

        $(".dropdown__content").click((e) ->
          e.stopPropagation()
        )

  $(this).on("click", cb_dropdown)
