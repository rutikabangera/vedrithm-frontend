import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-ornament">
        <div class="line"></div>
        <span class="leaf">🌿</span>
        <div class="line"></div>
      </div>

      <div class="footer-content container">
        <div class="footer-brand">
          <img src="assets/images/logo.jpg" alt="Vedrithm" class="footer-logo" />
          <h3>VEDRITHM</h3>
          <p>Ancient Ayurvedic wisdom,<br>crafted for modern hair care.</p>
          <div class="social-links">
            <a href="https://wa.me/919867368847?text=Hi!%20I%20want%20to%20order%20Vedrithm" target="_blank" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://instagram.com/vedrithm" target="_blank" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <h4>Navigate</h4>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/ingredients">Ingredients</a></li>
            <li><a routerLink="/quiz">Find Your Oil</a></li>
            <li><a routerLink="/reviews">Reviews</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Get In Touch</h4>
          <p>We'd love to hear from you.<br>Reach us on WhatsApp for orders & queries.</p>
          <a href="https://wa.me/919867368847?text=Hi%2C%20I%20want%20to%20order%20Vedrithm%20Herbal%20Hair%20Oil"
             target="_blank" class="whatsapp-cta">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order on WhatsApp
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 Vedrithm. All rights reserved. Rooted in Ayurveda, crafted in India.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer { background: var(--forest-mid); border-top: 1px solid var(--border-gold); padding-top: 4rem; }
    .footer-ornament { display: flex; align-items: center; gap: 1rem; padding: 0 2rem 3rem; max-width: 1200px; margin: 0 auto; }
    .footer-ornament .line { flex: 1; height: 1px; background: linear-gradient(to right, transparent, var(--border-gold)); }
    .footer-ornament .line:last-child { background: linear-gradient(to left, transparent, var(--border-gold)); }
    .leaf { font-size: 1.2rem; }
    .footer-content { max-width: 1200px; margin: 0 auto; padding: 0 2rem 3rem; display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 4rem; }
    .footer-logo { width: 52px; height: 52px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-gold); margin-bottom: 1rem; }
    .footer-brand h3 { font-family: var(--font-body); font-size: 0.75rem; letter-spacing: 0.3em; color: var(--gold); margin-bottom: 0.6rem; }
    .footer-brand p { font-size: 0.82rem; color: rgba(250,244,230,0.45); line-height: 1.7; margin-bottom: 1.25rem; }
    .social-links { display: flex; gap: 0.75rem; }
    .social-links a { width: 36px; height: 36px; border: 1px solid var(--border-gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: rgba(250,244,230,0.4); transition: all 0.3s ease; }
    .social-links a svg { width: 16px; height: 16px; }
    .social-links a:hover { color: var(--gold); border-color: var(--gold); background: rgba(212,175,55,0.08); }
    .footer-links h4, .footer-contact h4 { font-family: var(--font-body); font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; opacity: 0.7; }
    .footer-links ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.6rem; }
    .footer-links ul li a { font-size: 0.85rem; color: rgba(250,244,230,0.5); text-decoration: none; transition: color 0.3s ease; }
    .footer-links ul li a:hover { color: var(--cream); }
    .footer-contact p { font-size: 0.82rem; color: rgba(250,244,230,0.45); line-height: 1.7; margin-bottom: 1.25rem; }
    .whatsapp-cta { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.65rem 1.25rem; background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.3); border-radius: 4px; font-size: 0.78rem; font-weight: 600; color: #25d366; text-decoration: none; transition: all 0.3s ease; }
    .whatsapp-cta:hover { background: rgba(37,211,102,0.18); border-color: rgba(37,211,102,0.6); }
    .footer-bottom { border-top: 1px solid var(--border-gold); padding: 1.5rem 2rem; text-align: center; }
    .footer-bottom p { font-size: 0.75rem; color: rgba(250,244,230,0.25); letter-spacing: 0.08em; }
    @media (max-width: 768px) { .footer-content { grid-template-columns: 1fr; gap: 2.5rem; } }
  `]
})
export class FooterComponent {}
