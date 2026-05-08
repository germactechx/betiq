(function() {
  document.getElementById('header').innerHTML =
    '<header>' +
    '  <a href="index.html" class="logo">' +
    '    <div class="logo-mark">B</div>' +
    '    <div class="logo-text">Bet<span>IQ</span></div>' +
    '    <div class="logo-badge">PRO</div>' +
    '  </a>' +
    '  <nav class="navbar">' +
    '    <a href="index.html">Dashboard</a>' +
    '    <a href="betiq-stats.html">BetIQ Stats</a>' +
    '    <a href="betiq-odds.html">Bet IQ+Odds</a>' +
    '    <a href="odds-calculator.html">Odds Calculator</a>' +
    '    <a href="match-prediction.html">Match Prediction</a>' +
    '  </nav>' +
    '  <div class="header-right">' +
    '    <div class="live-badge">' +
    '      <div class="live-dot"></div>' +
    '      LIVE' +
    '    </div>' +
    '    <div id="clockDisplay"></div>' +
    '  </div>' +
    '</header>';

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

  function updateClock() {
    var el = document.getElementById('clockDisplay');
    if (el) el.textContent = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  updateClock();
  setInterval(updateClock, 1000);
})();
