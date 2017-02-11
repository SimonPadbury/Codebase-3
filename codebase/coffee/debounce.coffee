# DEBOUNCE

$.fn.cb_debounce = (fn, delay) ->
  debounceTimer = null
  ->
    context = this
    args = arguments
    clearTimeout debounceTimer

    debounceTimer = setTimeout((->
      fn.apply context, args
    ), delay)
