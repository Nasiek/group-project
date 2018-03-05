document.addEventListener("DOMContentLoaded", function(event) {
  // OVERLAY: Cache reference to sidebar nav
  var sNav = document.querySelector(".snav");

  var debouncedScroll = debounce(function() {
    var scroll = window.scrollY;
    if (scroll >= 117) {
      sNav.classList.add("fixed");
    } else {
      sNav.classList.remove("fixed");
    }
  }, 10);
  window.addEventListener("scroll", debouncedScroll);

  // Debounce Feature (performance consideration)
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  debouncedScroll();
});
