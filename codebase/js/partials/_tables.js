// RESPONSIVE TABLE

(function () {
  "use strict";

  [].forEach.call(document.querySelectorAll(".table"), function(el) {

    var table = el.outerHTML,
        tableWrapped = "<div class='table--wrap-outer'><div class='table--wrap-inner'>" + table + "</div></div>";

    el.outerHTML = tableWrapped;

  });

}());
