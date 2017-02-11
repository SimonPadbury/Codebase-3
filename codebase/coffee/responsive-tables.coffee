# RESPONSIVE TABLES
# • `.table--wrap-outer.table--wide`: adds an inset shadow to indicate that
# there is more table available (horizontally) that what can be seen.
# • `.table--wrap-inner`: the horizontal scrolling container.

$.fn.cb_table_wide = ->
  # called from within $(".table").cb_table();

  $(".table").each ->
    $(this).parent().parent().removeClass "table--wide"

    if $(this).parent()[0].scrollWidth - 1 > $(".table--wrap-inner").innerWidth()
      $(this).parent().parent().addClass "table--wide"
    else
      $(this).parent().parent().removeClass "table--wide"

$.fn.cb_table = ->
  # called by $(".table").cb_table();

  $(this).wrap "<div class='table--wrap-outer'><div class='table--wrap-inner' /></div>"

  $.fn.cb_table_wide()

  $(window).resize $.fn.cb_debounce((->
    $.fn.cb_table_wide()
  ), 250)
