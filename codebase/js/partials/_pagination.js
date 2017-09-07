// PAGINATION

(function () {
  "use strict";

  [].forEach.call(document.querySelectorAll(".pagination__current"), function(el) {
    el.addEventListener("click", function(e) {

      e.preventDefault();

    });
  });

  [].forEach.call(document.querySelectorAll(".pagination__current a"), function(el) {
    el.addEventListener("click", function(e) {

      e.preventDefault();

    });
  });

}());
