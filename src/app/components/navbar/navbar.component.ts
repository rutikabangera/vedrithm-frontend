import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled" [class.menu-open]="menuOpen">
      <div class="nav-inner">
        <a routerLink="/" class="brand">
          <img src="assets/images/logo.jpg" alt="Vedrithm Logo" class="brand-logo" />
          <span class="brand-name">VEDRITHM</span>
        </a>

        <ul class="nav-links" [class.open]="menuOpen">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="menuOpen=false">Home</a></li>
          <li><a routerLink="/ingredients" routerLinkActive="active" (click)="menuOpen=false">Ingredients</a></li>
          <li><a routerLink="/quiz" routerLinkActive="active" (click)="menuOpen=false">Find Your Oil</a></li>
          <li>
            <a href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Vedrithm%20Herbal%20Hair%20Oil"
               target="_blank" class="btn-nav-cta" (click)="menuOpen=false">
              Buy Now
            </a>
          </li>
        </ul>

        <button class="hamburger" (click)="menuOpen=!menuOpen" [class.open]="menuOpen" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 1.5rem 2rem;
      transition: all 0.4s ease;
      background: transparent;
    }
    nav.scrolled {
      background: rgba(5, 22, 16, 0.97);
      backdrop-filter: blur(20px);
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--border-gold);
      box-shadow: 0 4px 30px rgba(0,0,0,0.4);
    }
    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
    }
    .brand-logo {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      object-fit: cover;
      border: 1px solid var(--border-gold);
    }
    .brand-name {
      font-family: var(--font-display);
      font-size: 1.4rem;
      font-weight: 600;
      letter-spacing: 0.25em;
      color: var(--gold);
      background: linear-gradient(135deg, var(--gold-pale), var(--gold));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      list-style: none;
    }
    .nav-links a {
      font-family: var(--font-body);
      font-size: 0.78rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(250, 244, 230, 0.75);
      text-decoration: none;
      transition: color 0.3s ease;
      position: relative;
      padding-bottom: 4px;
    }
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0;
      width: 0; height: 1px;
      background: var(--gold);
      transition: width 0.3s ease;
    }
    .nav-links a:hover,
    .nav-links a.active {
      color: var(--gold);
    }
    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }
    .btn-nav-cta {
      padding: 0.6rem 1.4rem !important;
      background: linear-gradient(135deg, var(--gold), var(--gold-dark)) !important;
      color: var(--deep-forest) !important;
      border-radius: 2px;
      font-weight: 700 !important;
      letter-spacing: 0.1em !important;
    }
    .btn-nav-cta::after { display: none !important; }
    .btn-nav-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 15px rgba(212,175,55,0.35); }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      padding: 4px;
      cursor: pointer;
    }
    .hamburger span {
      display: block;
      width: 24px; height: 2px;
      background: var(--gold);
      border-radius: 1px;
      transition: all 0.3s ease;
    }
    .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.open span:nth-child(2) { opacity: 0; }
    .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .nav-links {
        position: fixed;
        top: 0; right: -100%;
        width: 75%; max-width: 320px;
        height: 100vh;
        background: var(--forest-mid);
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        padding: 2rem;
        border-left: 1px solid var(--border-gold);
        transition: right 0.4s ease;
      }
      .nav-links.open { right: 0; }
      .nav-links a { font-size: 1rem; }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 60;
  }
}
