(function() {
  var el = document.getElementById('footer');
  if (el) {
    el.outerHTML = '<footer>\n  &copy; ' + new Date().getFullYear() + ' BetIQ  &middot; Built for value-seekers.\n</footer>';
  }
})();
