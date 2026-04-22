import { Component, OnInit, HostListener, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, WhatsappButtonComponent],
  template: `
    <app-navbar></app-navbar>
    <main><router-outlet></router-outlet></main>
    <app-footer></app-footer>
    <app-whatsapp-button></app-whatsapp-button>
  `,
  styles: [`main { min-height: 100vh; }`]
})
export class AppComponent implements OnInit {
  private sparkleThrottle = 0;
  private observer!: IntersectionObserver;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.initScrollReveal();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const now = Date.now();
    if (now - this.sparkleThrottle < 80) return;
    this.sparkleThrottle = now;

    const el = this.renderer.createElement('div') as HTMLElement;
    this.renderer.addClass(el, 'cursor-sparkle');
    this.renderer.setStyle(el, 'left', e.clientX + 'px');
    this.renderer.setStyle(el, 'top', e.clientY + 'px');
    // Slight random offset and color variation
    const hue = 40 + Math.random() * 20;
    this.renderer.setStyle(el, 'background', `hsl(${hue}, 80%, 60%)`);
    this.renderer.setStyle(el, 'width', (4 + Math.random() * 4) + 'px');
    this.renderer.setStyle(el, 'height', (4 + Math.random() * 4) + 'px');
    this.renderer.appendChild(this.document.body, el);
    setTimeout(() => el.remove(), 700);
  }

  private initScrollReveal() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Observe after a tick so DOM is ready
    setTimeout(() => this.observeRevealElements(), 300);
  }

  observeRevealElements() {
    const targets = this.document.querySelectorAll(
      '.benefit-card, .ingr-preview-card, .kb-item, .pillar, .teaser-card, .review-card, .ingredient-card, .prov-pillar'
    );
    targets.forEach(el => {
      el.classList.add('reveal');
      this.observer.observe(el);
    });
  }

}
