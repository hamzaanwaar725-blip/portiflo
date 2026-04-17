/* ============================================
   PORTFOLIO - Navigation & Footer Components
   Include this in every page
   ============================================ */

const NAV_HTML = `
<nav class="nav-glass">
  <div style="max-width:1200px;margin:0 auto;padding:0 1.5rem;display:flex;align-items:center;justify-content:space-between;height:68px;">
    <!-- Logo -->
    <a href="../index.html" style="text-decoration:none;display:flex;align-items:center;gap:10px;">
      <div style="width:36px;height:36px;border-radius:10px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:1rem;color:#0a0a0f;">AI</div>
      <span style="font-family:'Syne',sans-serif;font-weight:700;font-size:1.05rem;" class="logo-text">Ahsan Raza</span>
    </a>

    <!-- Desktop Nav -->
    <div class="desktop-nav" style="display:flex;align-items:center;gap:2rem;">
      <a href="../index.html" class="nav-link">Home</a>
      <a href="../pages/ai-automation.html" class="nav-link">AI Automation</a>
      <a href="../pages/ecommerce.html" class="nav-link">E-Commerce</a>
      <a href="../pages/digital-marketing.html" class="nav-link">Marketing</a>
      <a href="../pages/contact.html" class="nav-link">Contact</a>
    </div>

    <!-- Right Actions -->
    <div style="display:flex;align-items:center;gap:1rem;">
      <button id="themeToggle" style="background:none;border:none;cursor:pointer;font-size:1.2rem;padding:6px;border-radius:8px;transition:all 0.3s;" title="Toggle theme">
        <span class="theme-icon">☀️</span>
      </button>
      <a href="../pages/contact.html" class="btn-primary" style="padding:10px 22px;font-size:0.85rem;">Hire Me</a>
      <button id="hamburger" style="background:none;border:none;cursor:pointer;font-size:1.4rem;display:none;padding:4px 8px;" class="mobile-hamburger">☰</button>
    </div>
  </div>
</nav>

<!-- Mobile Menu -->
<div id="mobileMenu" class="mobile-menu" style="padding:5rem 2rem 2rem;display:flex;flex-direction:column;gap:0.5rem;">
  <button id="menuClose" style="position:absolute;top:1.5rem;right:1.5rem;background:none;border:none;font-size:1.6rem;cursor:pointer;">✕</button>
  <a href="../index.html" class="mobile-nav-link" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:700;text-decoration:none;padding:1rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">Home</a>
  <a href="../pages/ai-automation.html" class="mobile-nav-link" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:700;text-decoration:none;padding:1rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">AI Automation</a>
  <a href="../pages/ecommerce.html" class="mobile-nav-link" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:700;text-decoration:none;padding:1rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">E-Commerce</a>
  <a href="../pages/digital-marketing.html" class="mobile-nav-link" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:700;text-decoration:none;padding:1rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">Marketing</a>
  <a href="../pages/contact.html" class="mobile-nav-link" style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:700;text-decoration:none;padding:1rem 0;border-bottom:1px solid rgba(255,255,255,0.07);">Contact</a>
  <a href="../pages/contact.html" class="btn-primary" style="margin-top:2rem;text-align:center;justify-content:center;">Get In Touch</a>
</div>
`;

const FOOTER_HTML = `
<footer style="padding:4rem 1.5rem 2rem;border-top:1px solid var(--dark-border);" class="footer-gradient">
  <div style="max-width:1200px;margin:0 auto;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:3rem;margin-bottom:3rem;">
      <!-- Brand -->
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;">
          <div style="width:36px;height:36px;border-radius:10px;background:var(--accent);display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;color:#0a0a0f;">AI</div>
          <span style="font-family:'Syne',sans-serif;font-weight:700;">Ahsan Raza</span>
        </div>
        <p class="text-muted" style="font-size:0.9rem;line-height:1.7;">AI Automation Expert building intelligent solutions for modern businesses.</p>
        <div style="display:flex;gap:12px;margin-top:1.5rem;">
          <a href="#" style="width:38px;height:38px;border-radius:8px;background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.2);display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all 0.3s;" title="LinkedIn">💼</a>
          <a href="#" style="width:38px;height:38px;border-radius:8px;background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.2);display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all 0.3s;" title="Twitter">🐦</a>
          <a href="#" style="width:38px;height:38px;border-radius:8px;background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.2);display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all 0.3s;" title="GitHub">💻</a>
          <a href="https://wa.me/923001234567" target="_blank" style="width:38px;height:38px;border-radius:8px;background:rgba(37,211,102,0.1);border:1px solid rgba(37,211,102,0.2);display:flex;align-items:center;justify-content:center;text-decoration:none;transition:all 0.3s;" title="WhatsApp">📱</a>
        </div>
      </div>
      <!-- Services -->
      <div>
        <h4 style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:1rem;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);">Services</h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:0.6rem;">
          <li><a href="../pages/ai-automation.html" style="text-decoration:none;font-size:0.9rem;" class="text-muted footer-link">AI Automation</a></li>
          <li><a href="../pages/ai-automation.html" style="text-decoration:none;font-size:0.9rem;" class="text-muted footer-link">AI Chatbots</a></li>
          <li><a href="../pages/ecommerce.html" style="text-decoration:none;font-size:0.9rem;" class="text-muted footer-link">E-Commerce</a></li>
          <li><a href="../pages/digital-marketing.html" style="text-decoration:none;font-size:0.9rem;" class="text-muted footer-link">Digital Marketing</a></li>
        </ul>
      </div>
      <!-- Links -->
      <div>
        <h4 style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:1rem;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);">Quick Links</h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:0.6rem;">
          <li><a href="../index.html" style="text-decoration:none;font-size:0.9rem;" class="text-muted footer-link">Home</a></li>
          <li><a href="../pages/contact.html" style="text-decoration:none;font-size:0.9rem;" class="text-muted footer-link">Contact</a></li>
          <li><a href="../dashboard/login.html" style="text-decoration:none;font-size:0.9rem;" class="text-muted footer-link">Admin Login</a></li>
        </ul>
      </div>
      <!-- Contact -->
      <div>
        <h4 style="font-family:'Syne',sans-serif;font-weight:700;margin-bottom:1rem;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);">Contact</h4>
        <div style="display:flex;flex-direction:column;gap:0.7rem;">
          <div style="display:flex;align-items:center;gap:8px;font-size:0.9rem;" class="text-muted">
            <span>📧</span> ahsanraza@email.com
          </div>
          <div style="display:flex;align-items:center;gap:8px;font-size:0.9rem;" class="text-muted">
            <span>📱</span> +92 300 1234567
          </div>
          <div style="display:flex;align-items:center;gap:8px;font-size:0.9rem;" class="text-muted">
            <span>📍</span> Pakistan
          </div>
        </div>
      </div>
    </div>
    <div style="border-top:1px solid var(--dark-border);padding-top:2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
      <p class="text-muted" style="font-size:0.85rem;">© 2025 Ahsan Raza. All rights reserved.</p>
      <p class="text-muted" style="font-size:0.85rem;">Built with ❤️ for results</p>
    </div>
  </div>
</footer>
`;

// Inject nav and footer when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Show hamburger on mobile
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .desktop-nav { display: none !important; }
      .mobile-hamburger { display: block !important; }
    }
  `;
  document.head.appendChild(style);
});
