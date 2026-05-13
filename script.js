const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // stagger children
        const cards = e.target.querySelectorAll('.cert-card, .skill-tag');
        cards.forEach((c, i) => {
          c.style.transitionDelay = `${i * 0.04}s`;
          c.style.opacity = '0';
          c.style.transform = 'translateY(15px)';
          setTimeout(() => {
            c.style.transition = 'all .4s';
            c.style.opacity = '1';
            c.style.transform = 'none';
          }, i * 40 + 200);
        });
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));