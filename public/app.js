(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const themeText = document.querySelector('.theme-text');
  const progress = document.querySelector('.progress span');

  toggle?.addEventListener('click', () => {
    const useLight = root.dataset.theme !== 'light';
    root.dataset.theme = useLight ? 'light' : 'dark';
    toggle.setAttribute('aria-pressed', String(useLight));
    if (themeText) themeText.textContent = useLight ? '深色' : '浅色';
  });

  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const ratio = max > 0 ? Math.min(1, scrollY / max) : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
  };
  addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const targets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 50px' });
  targets.forEach((target) => observer.observe(target));
  root.classList.add('motion-ready');
})();
