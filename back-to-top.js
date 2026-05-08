(function() {
  var btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
  btn.style.cssText = 'position:fixed;bottom:32px;right:32px;z-index:999;width:44px;height:44px;border-radius:50%;border:1px solid var(--border);background:var(--surface);color:var(--muted);cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.4);transition:opacity 0.25s,transform 0.25s,color 0.2s;opacity:0;transform:translateY(8px)';
  document.body.appendChild(btn);

  btn.onmouseenter = function() { btn.style.color = 'var(--cyan)'; btn.style.borderColor = 'rgba(0,212,255,0.3)'; };
  btn.onmouseleave = function() { btn.style.color = 'var(--muted)'; btn.style.borderColor = 'var(--border)'; };
  btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        if (window.scrollY > 400) {
          btn.style.display = 'flex';
          btn.style.opacity = '1';
          btn.style.transform = 'translateY(0)';
        } else {
          btn.style.opacity = '0';
          btn.style.transform = 'translateY(8px)';
          setTimeout(function() { if (window.scrollY <= 400) btn.style.display = 'none'; }, 250);
        }
        ticking = false;
      });
      ticking = true;
    }
  });
})();
