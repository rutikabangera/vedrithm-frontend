import { Injectable } from '@angular/core';

export interface SiteConfig {
  whatsappNumber: string;
  brandTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  brandStory: string;
  instagramUrl: string;
}

// ─── All config is now static — no backend needed ─────────────────────────
// Edit these values directly and redeploy to Cloudflare Pages.
const CONFIG: SiteConfig = {
  whatsappNumber: '919867368847',
  brandTagline: 'Ancient Ayurvedic wisdom for modern hair care',
  heroTitle: 'Rooted in Nature. Nourished by Vedas.',
  heroSubtitle: 'A sacred blend of 8 time-honoured Ayurvedic herbs, cold-pressed to restore your hair\'s natural vitality.',
  brandStory: 'Vedrithm was born from a deep reverence for India\'s ancient Ayurvedic heritage.',
  instagramUrl: 'https://instagram.com/vedrithm'
};

@Injectable({ providedIn: 'root' })
export class SiteConfigService {
  get snapshot(): SiteConfig { return CONFIG; }

  whatsappUrl(message: string): string {
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
