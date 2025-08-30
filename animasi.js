// Buat observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      // Slide dari Kiri
      if (entry.target.classList.contains("slide-left")) {
        entry.target.classList.remove("opacity-0", "-translate-x-10");
        entry.target.classList.add("opacity-100", "translate-x-0");
      }

      // Slide dari Kanan
      if (entry.target.classList.contains("slide-right")) {
        entry.target.classList.remove("opacity-0", "translate-x-10");
        entry.target.classList.add("opacity-100", "translate-x-0");
      }

      // Biar animasi jalan sekali doang
      observer.unobserve(entry.target);
    }
  });
});

// Observe semua elemen dengan class .reveal
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
