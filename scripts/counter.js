function animateCounter(el) {
  const target   = +el.dataset.target;
  const suffix   = el.dataset.suffix || '';
  const duration = 1400;
  const start    = performance.now();

  const tick = (now) => {
    const p     = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); 
    el.textContent = Math.floor(eased * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]')
  .forEach(el => counterObserver.observe(el));
