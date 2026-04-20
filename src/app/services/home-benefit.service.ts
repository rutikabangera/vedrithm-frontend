import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface HomeBenefit {
  id: number;
  icon: string;
  title: string;
  description: string;
  displayOrder: number;
}

// ─── Static benefits data — previously fetched from MySQL ─────────────────
const BENEFITS: HomeBenefit[] = [
  { id: 1, icon: 'adds-shine', title: 'Adds Shine', description: 'Restores your hair\'s natural lustre with nourishing oils and herbs that seal the cuticle and reflect light beautifully.', displayOrder: 1 },
  { id: 2, icon: 'promotes-growth', title: 'Promotes Growth', description: 'Stimulates dormant follicles and improves scalp circulation, creating the ideal environment for faster, stronger hair growth.', displayOrder: 2 },
  { id: 3, icon: 'strengthens-roots', title: 'Strengthens Roots', description: 'Deeply penetrates the scalp to nourish hair bulbs, reducing breakage and anchoring each strand from the very foundation.', displayOrder: 3 },
  { id: 4, icon: 'locks-moisture', title: 'Locks Moisture', description: 'Creates a protective barrier around each strand, preventing moisture loss and keeping hair hydrated all day long.', displayOrder: 4 },
  { id: 5, icon: 'calms-scalp', title: 'Calms Scalp', description: 'Antibacterial and antifungal herbs soothe inflammation, eliminate dandruff, and restore a healthy, balanced scalp.', displayOrder: 5 },
  { id: 6, icon: 'delays-greying', title: 'Delays Greying', description: 'Melanin-preserving herbs protect pigmentation cells, helping maintain your natural hair colour for longer.', displayOrder: 6 },
];

@Injectable({ providedIn: 'root' })
export class HomeBenefitService {
  getAll(): Observable<HomeBenefit[]> {
    return of(BENEFITS);
  }
}
