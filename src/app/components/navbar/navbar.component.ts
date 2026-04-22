import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <!-- MOBILE TOP QUIZ BAR (only on mobile) -->
    <div class="mobile-topbar">
      <a routerLink="/quiz" class="topbar-quiz-cta">
        <span>🌿</span>
        Take Your Free Hair Quiz
        <span class="topbar-arrow">→</span>
      </a>
    </div>

    <nav class="navbar" [class.scrolled]="scrolled" [class.menu-open]="menuOpen">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">
          <img src="assets/images/logo.jpg" alt="Vedrithm" class="logo-img" />
          <span class="logo-text">Vedrithm</span>
        </a>

        <div class="nav-links" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">Home</a>
          <a routerLink="/ingredients" routerLinkActive="active" (click)="closeMenu()">Ingredients</a>
          <a routerLink="/reviews" routerLinkActive="active" (click)="closeMenu()">Reviews</a>
          <a routerLink="/quiz" routerLinkActive="active" class="nav-quiz-btn" (click)="closeMenu()">
            🌿 Hair Quiz
          </a>
          <a [href]="whatsappUrl" target="_blank" class="nav-whatsapp" (click)="closeMenu()">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Order
          </a>
        </div>

        <button class="hamburger" (click)="menuOpen = !menuOpen" [attr.aria-label]="menuOpen ? 'Close menu' : 'Open menu'">
          <span [class.r1]="menuOpen"></span>
          <span [class.r2]="menuOpen"></span>
          <span [class.r3]="menuOpen"></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .mobile-topbar {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1100;
      background: linear-gradient(90deg, var(--forest-mid) 0%, var(--forest-accent) 50%, var(--forest-mid) 100%);
      border-bottom: 1px solid rgba(212,175,55,0.35);
    }
    .topbar-quiz-cta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 0.6rem 1rem;
      font-size: 0.8rem;
      font-family: var(--font-body);
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--gold-light) !important;
      text-decoration: none;
      text-transform: uppercase;
    }
    .topbar-arrow { transition: transform 0.2s ease; }
    .topbar-quiz-cta:hover .topbar-arrow { transform: translateX(4px); }

    .navbar { position:fixed; top:0; left:0; right:0; z-index:1000; padding:1.25rem 0; transition:all 0.4s ease; }
    .navbar.scrolled { background:rgba(10,28,16,0.95); backdrop-filter:blur(20px); padding:0.85rem 0; border-bottom:1px solid var(--border-gold); }
    .nav-container { max-width:1200px; margin:0 auto; padding:0 2rem; display:flex; align-items:center; gap:2rem; }
    .nav-logo { display:flex; align-items:center; gap:0.75rem; text-decoration:none; }
    .logo-img { width:36px; height:36px; border-radius:50%; object-fit:cover; border:1px solid var(--border-gold); }
    .logo-text { font-family:var(--font-display); font-size:1.4rem; color:var(--cream); letter-spacing:0.05em; }
    .nav-links { display:flex; align-items:center; gap:2.5rem; margin-left:auto; }
    .nav-links a { font-size:0.78rem; letter-spacing:0.15em; text-transform:uppercase; color:rgba(250,244,230,0.65); transition:color 0.3s ease; text-decoration:none; }
    .nav-links a:hover, .nav-links a.active { color:var(--cream); }

    .nav-quiz-btn {
      display:flex !important; align-items:center; gap:0.4rem;
      padding:0.5rem 1.1rem !important;
      background:rgba(212,175,55,0.1) !important;
      border:1px solid rgba(212,175,55,0.5) !important;
      border-radius:50px;
      color:var(--gold) !important;
      font-weight:600;
      transition:all 0.3s ease !important;
    }
    .nav-quiz-btn:hover {
      background:rgba(212,175,55,0.2) !important;
      border-color:var(--gold) !important;
      color:var(--gold-light) !important;
      transform:translateY(-1px);
    }
    .nav-quiz-btn.active { background:rgba(212,175,55,0.18) !important; color:var(--gold-light) !important; }

    .nav-whatsapp { display:flex; align-items:center; gap:0.5rem; padding:0.55rem 1.25rem; border:1px solid rgba(37,211,102,0.4); border-radius:50px; color:rgba(37,211,102,0.9) !important; transition:all 0.3s ease !important; }
    .nav-whatsapp:hover { background:rgba(37,211,102,0.12); border-color:rgba(37,211,102,0.7); color:#25d366 !important; }

    .hamburger { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:4px; }
    .hamburger span { display:block; width:22px; height:1.5px; background:var(--cream); transition:all 0.35s ease; transform-origin:center; }
    .hamburger span.r1 { transform:translateY(6.5px) rotate(45deg); }
    .hamburger span.r2 { opacity:0; transform:scaleX(0); }
    .hamburger span.r3 { transform:translateY(-6.5px) rotate(-45deg); }

    @media (max-width:768px) {
      .mobile-topbar { display:flex; }
      .navbar { top:33px; }
      .hamburger { display:flex; margin-left:auto; }
      .nav-links {
        position:fixed; top:33px; right:-100%; width:80%; max-width:300px;
        height:calc(100vh - 33px);
        background:var(--deep-forest);
        border-left:1px solid var(--border-gold);
        flex-direction:column; align-items:flex-start;
        padding:5rem 2rem 2rem; gap:1.5rem;
        transition:right 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
        overflow-y:auto;
      }
      .nav-links.open { right:0; box-shadow:-10px 0 40px rgba(0,0,0,0.5); }
      .nav-links a { font-size:0.9rem; }
      .nav-quiz-btn { width:100%; justify-content:center; font-size:0.85rem !important; padding:0.65rem 1.4rem !important; }
    }
    @media (min-width:769px) { .mobile-topbar { display:none; } }
  `]
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  whatsappUrl = 'https://wa.me/919867368847?text=' + encodeURIComponent('Hi! I\'d like to order Vedrithm hair oil. Can you share more details?');

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 50; }

  closeMenu() { this.menuOpen = false; }
}
