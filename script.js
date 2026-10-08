/* ═══════════════════════════════════════════════
   NerdConnects — Clean & Simple Client Script
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Mobile Menu Toggle ──
  const toggleBtn = document.querySelector('.navbar__toggle');
  const navLinks = document.querySelector('.navbar__links');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // ── Accessible FAQ Accordion ──
  const faqRows = document.querySelectorAll('.faq-row, .faq-item');
  faqRows.forEach(function (row) {
    const questionBtn = row.querySelector('.faq-question-btn, .faq-item__question');
    if (questionBtn) {
      questionBtn.addEventListener('click', function () {
        const isCurrentlyOpen = row.classList.contains('open');
        // Close others in same group
        faqRows.forEach(function (other) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-question-btn, .faq-item__question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isCurrentlyOpen) {
          row.classList.add('open');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ── Simple Guide Search / Filter (if present) ──
  const searchInput = document.getElementById('search-guides');
  const guideCards = document.querySelectorAll('.guide-card');
  if (searchInput && guideCards.length) {
    searchInput.addEventListener('input', function () {
      const term = searchInput.value.toLowerCase().trim();
      guideCards.forEach(function (card) {
        const text = card.textContent.toLowerCase();
        if (!term || text.indexOf(term) !== -1) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

});
