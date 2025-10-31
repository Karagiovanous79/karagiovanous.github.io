// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Smooth fade-in on load
window.addEventListener('load', () => {
  document.body.style.opacity = 1;
});

