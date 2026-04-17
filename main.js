/* ============================================
   PORTFOLIO - Main JavaScript
   Handles: Dark/Light Mode, Animations,
   Mobile Menu, Scroll Effects, Form
   ============================================ */

// ---- Theme Management ----
const ThemeManager = {
  init() {
    const saved = localStorage.getItem('theme') || 'dark';
    this.setTheme(saved);
  },

  setTheme(theme) {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    this.updateToggleUI(theme);
  },

  toggle() {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  },

  updateToggleUI(theme) {
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(icon => {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
  }
};

// ---- Mobile Menu ----
const MobileMenu = {
  isOpen: false,

  toggle() {
    this.isOpen = !this.isOpen;
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    if (menu) menu.classList.toggle('open', this.isOpen);
    if (hamburger) hamburger.textContent = this.isOpen ? '✕' : '☰';
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  },

  close() {
    this.isOpen = false;
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    if (menu) menu.classList.remove('open');
    if (hamburger) hamburger.textContent = '☰';
    document.body.style.overflow = '';
  }
};

// ---- Scroll Animations ----
const ScrollAnimator = {
  observer: null,

  init() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Animate progress bars
          const bars = entry.target.querySelectorAll('.progress-fill');
          bars.forEach(bar => {
            const width = bar.dataset.width;
            if (width) bar.style.width = width + '%';
          });
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => {
      this.observer.observe(el);
    });
  },

  // Also trigger for progress bars in separate sections
  initProgressBars() {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector('.progress-fill');
          if (bar) {
            setTimeout(() => {
              bar.style.width = bar.dataset.width + '%';
            }, 200);
          }
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-progress-item').forEach(el => {
      barObserver.observe(el);
    });
  }
};

// ---- Navbar Scroll Effect ----
const NavbarManager = {
  init() {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav-glass');
      if (nav) {
        if (window.scrollY > 50) {
          nav.style.boxShadow = document.body.classList.contains('dark')
            ? '0 1px 40px rgba(0,0,0,0.4)'
            : '0 1px 40px rgba(0,0,0,0.08)';
        } else {
          nav.style.boxShadow = 'none';
        }
      }

      // Active nav links
      this.updateActiveLinks();
    });
  },

  updateActiveLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href*="#"]');
    let current = '';

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < 120) current = section.id;
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }
};

// ---- Contact Form ----
const ContactForm = {
  init() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = '<span>Sending...</span>';
      btn.disabled = true;

      // Simulate send (replace with Firebase/EmailJS in production)
      await new Promise(r => setTimeout(r, 1500));

      btn.innerHTML = '✓ Message Sent!';
      btn.style.background = '#10b981';
      form.reset();

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
  }
};

// ---- Counter Animation ----
const CounterAnimation = {
  init() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          this.animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  },

  animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = current + suffix;

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }
};

// ---- Typing Effect (Hero) ----
const TypingEffect = {
  roles: [
    'AI Automation Expert',
    'AI Agent Builder',
    'E-commerce Specialist',
    'Digital Marketer'
  ],
  current: 0,
  charIndex: 0,
  isDeleting: false,

  init() {
    const el = document.getElementById('typingText');
    if (!el) return;
    this.el = el;
    this.type();
  },

  type() {
    const role = this.roles[this.current];
    const speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting) {
      this.el.textContent = role.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === role.length) {
        this.isDeleting = true;
        setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.el.textContent = role.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.current = (this.current + 1) % this.roles.length;
      }
    }
    setTimeout(() => this.type(), speed);
  }
};

// ---- Smooth Page Transitions ----
document.querySelectorAll('a[href]').forEach(link => {
  if (link.href.includes('#')) return; // skip anchor links
  if (link.target === '_blank') return;
  // Allow normal navigation for multi-page
});

// ---- Initialize Everything ----
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  ScrollAnimator.init();
  ScrollAnimator.initProgressBars();
  NavbarManager.init();
  ContactForm.init();
  CounterAnimation.init();
  TypingEffect.init();

  // Global click handlers
  document.addEventListener('click', (e) => {
    if (e.target.id === 'themeToggle' || e.target.closest('#themeToggle')) {
      ThemeManager.toggle();
    }
    if (e.target.id === 'hamburger' || e.target.closest('#hamburger')) {
      MobileMenu.toggle();
    }
    if (e.target.id === 'menuClose' || e.target.closest('#menuClose')) {
      MobileMenu.close();
    }
    if (e.target.classList.contains('mobile-menu')) {
      MobileMenu.close();
    }
    // Close menu on mobile nav link click
    if (e.target.classList.contains('mobile-nav-link')) {
      MobileMenu.close();
    }
  });
});

// ---- Expose to global scope ----
window.ThemeManager = ThemeManager;
window.MobileMenu = MobileMenu;
