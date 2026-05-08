(function() {
  var el = document.getElementById('footer');
  if (el) {
    el.outerHTML = '<footer>\n  &copy; ' + new Date().getFullYear() + ' BetIQ PRO &middot; Built for value-seekers.\n</footer>';
  }
})();
