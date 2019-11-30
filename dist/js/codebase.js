"use strict";!function(){function t(){sessionStorage.setItem("codebase","dark"),document.body.classList.remove("light"),document.body.classList.add("dark")}function c(){sessionStorage.setItem("codebase","light"),document.body.classList.remove("dark"),document.body.classList.add("light")}[].forEach.call(document.querySelectorAll("#theme-toggle"),function(e){e.addEventListener("click",function(e){e.stopPropagation(),"dark"===sessionStorage.getItem("codebase")?c():"light"===sessionStorage.getItem("codebase")&&t()})}),"dark"===sessionStorage.getItem("codebase")?t():"light"===sessionStorage.getItem("codebase")?c():window.matchMedia("(prefers-color-scheme: dark)").matches?t():(window.matchMedia("(prefers-color-scheme: light)").matches,c())}(),function(){function t(){[].forEach.call(document.querySelectorAll(".megamenu"),function(e){e.classList.contains("megamenu-offcanvas-is-open")&&(e.classList.remove("megamenu-offcanvas-is-open"),[].forEach.call(document.querySelectorAll(".submenu-is-revealed"),function(e){e.classList.remove("submenu-is-revealed")}))})}[].forEach.call(document.querySelectorAll(".megamenu"),function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),document.body.addEventListener("click",function(){t()}),window.addEventListener("resize",function(){t()}),[].forEach.call(document.querySelectorAll(".megamenu-navicon"),function(e){e.addEventListener("click",function(e){e.stopPropagation();var t="#"+this.dataset.megamenuId;document.body.querySelector(t).classList.toggle("megamenu-offcanvas-is-open")})}),[].forEach.call(document.querySelectorAll(".megamenu-close"),function(e){e.addEventListener("click",function(){t()})}),[].forEach.call(document.querySelectorAll(".submenu-toggle"),function(e){e.addEventListener("click",function(){this.parentNode.classList.toggle("submenu-is-revealed")})})}(),[].forEach.call(document.querySelectorAll("[data-toggle-id]"),function(e){e.addEventListener("click",function(e){e.stopPropagation();var t="#"+this.getAttribute("data-toggle-id"),c=this.getAttribute("data-toggle-class");document.body.querySelector(t).classList.toggle(c)})}),[].forEach.call(document.querySelectorAll("[class*=-ctrl]"),function(e){e.addEventListener("click",function(e){e.stopPropagation(),"a"===e.target.nodeName.toLowerCase()&&(e.target.classList.contains("is-active")||e.preventDefault());for(var t=this.getAttribute("class").split(" "),c=0;c<t.length;c++)t[c]=t[c].split("-");var o,n="."+(t=[].concat.apply([],t))[t.indexOf("ctrl")-1]+"-content",a="#"+this.dataset.contentId;function s(){for(var e=document.querySelectorAll(".is-active"),t=0;t<e.length;t++)e[t].classList.remove("is-active")}"#undefined"==a?this.classList.contains("is-active")?s():(s(),this.classList.add("is-active"),this.parentNode.classList.add("is-active"),this.parentNode.querySelector(n).classList.add("is-active")):this.classList.contains("is-active")?s():(s(),this.classList.add("is-active"),document.body.querySelector(a).parentNode.classList.add("is-active"),document.body.querySelector(a).classList.add("is-active")),document.body.addEventListener("click",function(e){s()}),o=window.innerWidth,window.addEventListener("resize",function(){window.innerWidth!==o&&s()}),[].forEach.call(document.querySelectorAll('[class*="-content"]'),function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),[].forEach.call(document.querySelectorAll('[class*="-close"]'),function(e){e.addEventListener("click",function(e){"a"===e.target.nodeName.toLowerCase()&&e.preventDefault(),s()})}),[].forEach.call(document.querySelectorAll('a[href*="#"]'),function(e){e.addEventListener("click",function(){s()})},!1)})}),[].forEach.call(document.querySelectorAll(".table"),function(e){var t="<div class=table-wrap>"+e.outerHTML+"</div>";e.outerHTML=t});
//# sourceMappingURL=codebase.js.map