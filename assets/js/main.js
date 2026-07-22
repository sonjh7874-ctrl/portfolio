/* nav shadow on scroll */
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* mobile menu toggle */
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav ul');
if (menuBtn && navList) {
  menuBtn.addEventListener('click', () => navList.classList.toggle('open'));
  navList.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navList.classList.remove('open'))
  );
}

/* reveal on scroll */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

/* lightbox for figures */
const lb = document.createElement('div');
lb.className = 'lb';
lb.innerHTML = '<button class="x" aria-label="닫기">esc ✕</button><img alt="">';
document.body.appendChild(lb);
const lbImg = lb.querySelector('img');
const closeLb = () => { lb.classList.remove('open'); lbImg.src = ''; };
document.querySelectorAll('figure img').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    lb.classList.add('open');
  });
});
lb.addEventListener('click', closeLb);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
