import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface SiteConfig {
  whatsappNumber: string;
  brandTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  brandStory: string;
  instagramUrl: string;
}

@Injectable({ providedIn: 'root' })
export class SiteConfigService {
  private readonly apiUrl = 'https://vedrithm-backend-1.onrender.com/api/config/public';
  private config$ = new BehaviorSubject<SiteConfig>(this.defaults());

  constructor(private http: HttpClient) {}

  /** Call once at app boot */
  load(): Observable<SiteConfig> {
    return this.http.get<SiteConfig>(this.apiUrl).pipe(
      tap(cfg => this.config$.next(cfg))
    );
  }

  get snapshot(): SiteConfig {
    return this.config$.value;
  }

  get stream(): Observable<SiteConfig> {
    return this.config$.asObservable();
  }

  /** Build WhatsApp URL with optional message */
  whatsappUrl(message: string): string {
    const num = this.config$.value.whatsappNumber;
    return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
  }

  private defaults(): SiteConfig {
    return {
      whatsappNumber: '919867368847',
      brandTagline: 'Ancient Ayurvedic wisdom for modern hair care',
      heroTitle: 'Rooted in Nature. Nourished by Vedas.',
      heroSubtitle: 'A sacred blend of 8 time-honoured Ayurvedic herbs, cold-pressed to restore your hair\'s natural vitality.',
      brandStory: 'Vedrithm was born from a deep reverence for India\'s ancient Ayurvedic heritage.',
      instagramUrl: 'https://instagram.com/vedrithm'
    };
  }
}
