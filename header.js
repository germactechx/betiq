(function() {
  document.getElementById('header').innerHTML =
    '<header>' +
    '  <a href="index.html" class="logo">' +
    '    <div class="logo-mark">B</div>' +
    '    <div class="logo-text">Bet<span>IQ</span></div>' +
    '    <div class="logo-badge">PRO</div>' +
    '  </a>' +
    '  <nav class="navbar" id="mainNav">' +
    '    <a href="index.html">Dashboard</a>' +
    '    <a href="betiq-stats.html">BetIQ Stats</a>' +
    '    <a href="match-prediction.html">Match Prediction</a>' +
    '    <a href="odds-calculator.html">Odds Calculator</a>' +
    '    <a href="value-finder.html">Value Finder</a>' +
    '  </nav>' +
    '  <div class="header-right">' +
    '    <div class="live-badge">' +
    '      <div class="live-dot"></div>' +
    '      LIVE' +
    '    </div>' +
    '    <div id="clockDisplay"></div>' +
    '  </div>' +
    '  <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">' +
    '    <span class="ham-line"></span>' +
    '    <span class="ham-line"></span>' +
    '    <span class="ham-line"></span>' +
    '  </button>' +
    '</header>';

  // Active link
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var nav = document.querySelector('#header .navbar');
  if (nav) {
    var links = nav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('href') === page) {
        links[i].classList.add('active');
      }
    }
  }

  // Hamburger toggle
  var toggle = document.getElementById('navToggle');
  var navbar = document.getElementById('mainNav');
  if (toggle && navbar) {
    toggle.addEventListener('click', function() {
      var isOpen = navbar.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close nav when a link is clicked (mobile UX)
    var navLinks = navbar.querySelectorAll('a');
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].addEventListener('click', function() {
        navbar.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!toggle.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Clock
  function updateClock() {
    var el = document.getElementById('clockDisplay');
    if (el) el.textContent = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  updateClock();
  setInterval(updateClock, 1000);
})();
