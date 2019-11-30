/* eslint-env browser */
/* jshint browser: true */

// DARK / LIGHT THEME

(function () {
  'use strict';

  [].forEach.call(document.querySelectorAll('#theme-toggle'), function(el) {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      themeToggle()
    });
  });

  function themeDark() {
    sessionStorage.setItem("codebase", "dark");
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }
  
  function themeLight() {
    sessionStorage.setItem("codebase", "light");
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  }
  
  function themeToggle() {
    if ( sessionStorage.getItem('codebase') === 'dark' ) {
      themeLight();
    } else
    if ( sessionStorage.getItem('codebase') === 'light' ) {
      themeDark();
    }
  }
  
  function themePref() {
    if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
      themeDark();
    } else
    if ( window.matchMedia('(prefers-color-scheme: light)').matches ) {
      themeLight();
    } else {
      // Default is light
      themeLight();
    }
  }
  
  function themeInit() {
    if ( sessionStorage.getItem('codebase') === 'dark' ) {
      themeDark();
    } else
    if ( sessionStorage.getItem('codebase') === 'light' ) {
      themeLight();
    } else {
      themePref();
    }
  }
  
  themeInit();

}());