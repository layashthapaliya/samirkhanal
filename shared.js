/* shared.js — nav behaviour, fade-in, active link */
(function () {
  /* ── hamburger ── */
  const ham = document.getElementById('navHam');
  const nl  = document.getElementById('navLinks');
  if (ham && nl) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      nl.classList.toggle('open');
    });
    nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      ham.classList.remove('open'); nl.classList.remove('open');
    }));
  }

  /* ── active link ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ── intersection fade-in ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fi').forEach(el => obs.observe(el));
})();
