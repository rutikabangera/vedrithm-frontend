import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Ingredient {
  id: number;
  name: string;
  sanskritName: string;
  emoji?: string;
  imageSlug: string;
  tag: string;
  description: string;
  originPlace: string;
  displayOrder: number;
  benefits: string[];
}

const INGREDIENTS: Ingredient[] = [
  {
    id: 1, name: 'Bhringraj', sanskritName: 'Eclipta Alba', emoji: '🌿',
    imageSlug: 'bhringraj', tag: 'Hair Growth',
    description: 'Known as the "King of Hair" in Ayurveda, Bhringraj has been revered for centuries for its remarkable ability to strengthen hair roots, prevent premature greying, and stimulate growth.',
    originPlace: 'Bengal & Tamil Nadu', displayOrder: 1,
    benefits: ['Prevents premature greying', 'Strengthens hair roots', 'Stimulates follicle activity', 'Deeply nourishes the scalp']
  },
  {
    id: 2, name: 'Amla', sanskritName: 'Emblica Officinalis', emoji: '🫐',
    imageSlug: 'amla', tag: 'Strength & Shine',
    description: 'The Indian Gooseberry is one of nature\'s richest sources of Vitamin C and antioxidants. Amla rebuilds hair protein, enhances shine, and is celebrated in ancient texts for restoring youthful vitality to hair.',
    originPlace: 'Uttar Pradesh & Himachal', displayOrder: 2,
    benefits: ['Rich in Vitamin C', 'Rebuilds hair protein bonds', 'Enhances natural shine', 'Delays greying']
  },
  {
    id: 3, name: 'Castor Oil', sanskritName: 'Ricinus Communis', emoji: '🌰',
    imageSlug: 'castor-oil', tag: 'Root Strengthening',
    description: 'Cold-pressed Castor Oil is dense in ricinoleic acid — a rare omega-9 fatty acid that penetrates the scalp deeply, improving blood circulation and dramatically reducing hair fall.',
    originPlace: 'Gujarat & Rajasthan', displayOrder: 3,
    benefits: ['Improves scalp circulation', 'Reduces hair fall', 'Thickens hair strands', 'Antibacterial properties']
  },
  {
    id: 4, name: 'Coconut Oil', sanskritName: 'Cocos Nucifera', emoji: '🥥',
    imageSlug: 'coconut-oil', tag: 'Deep Moisture',
    description: 'The foundation of Ayurvedic hair care, coconut oil penetrates the hair shaft better than any other oil, reducing protein loss, sealing moisture, and leaving hair silky and manageable.',
    originPlace: 'Kerala & Karnataka', displayOrder: 4,
    benefits: ['Penetrates the hair shaft', 'Reduces protein loss', 'Seals in moisture', 'Softens and detangles']
  },
  {
    id: 5, name: 'Neem', sanskritName: 'Azadirachta Indica', emoji: '🌱',
    imageSlug: 'neem', tag: 'Scalp Purifying',
    description: 'A powerful antibacterial and antifungal herb, Neem is Ayurveda\'s go-to remedy for dandruff, scalp inflammation, and itchiness. It purifies the scalp environment for healthier growth.',
    originPlace: 'Maharashtra & Madhya Pradesh', displayOrder: 5,
    benefits: ['Antifungal & antibacterial', 'Eliminates dandruff', 'Soothes scalp irritation', 'Purifies blocked follicles']
  },
  {
    id: 6, name: 'Hibiscus', sanskritName: 'Hibiscus Rosa-sinensis', emoji: '🌺',
    imageSlug: 'hibiscus', tag: 'Shine & Softness',
    description: 'Rich in amino acids and natural Alpha Hydroxy Acids, Hibiscus conditions the hair cuticle, tames frizz, and imparts a brilliant natural shine while preventing split ends.',
    originPlace: 'Tamil Nadu & Kerala', displayOrder: 6,
    benefits: ['Rich in amino acids', 'Tames frizz', 'Prevents split ends', 'Boosts natural shine']
  },
  {
    id: 7, name: 'Fenugreek', sanskritName: 'Trigonella Foenum-graecum', emoji: '🌾',
    imageSlug: 'fenugreek', tag: 'Hair Fall Control',
    description: 'Methi (Fenugreek) seeds are loaded with nicotinic acid and protein that directly nourishes hair follicles. It is one of the most effective natural remedies for hair thinning and excessive shedding.',
    originPlace: 'Rajasthan & Punjab', displayOrder: 7,
    benefits: ['Controls hair thinning', 'Boosts follicle protein', 'Reduces shedding', 'Conditions naturally']
  },
  {
    id: 8, name: 'Rosemary', sanskritName: 'Salvia Rosmarinus', emoji: '🌿',
    imageSlug: 'rosemary', tag: 'Growth Activator',
    description: 'Clinical studies have shown Rosemary oil to be as effective as Minoxidil for hair growth, without the side effects. It increases dermal IGF-1 — a key growth factor — and improves scalp circulation.',
    originPlace: 'Nilgiris, Tamil Nadu', displayOrder: 8,
    benefits: ['Clinically proven for growth', 'Improves scalp circulation', 'Activates dormant follicles', 'Delays hair loss']
  },
  {
    id: 9, name: 'Curry Leaves', sanskritName: 'Murraya Koenigii', emoji: '🍃',
    imageSlug: 'curry-leaves', tag: 'Anti-Greying',
    description: 'Rich in beta-carotene and proteins, Curry Leaves are a traditional remedy for premature greying. They protect melanocytes — the cells responsible for hair pigmentation.',
    originPlace: 'Karnataka & Andhra Pradesh', displayOrder: 9,
    benefits: ['Preserves hair pigmentation', 'Rich in beta-carotene', 'Strengthens hair shaft', 'Prevents premature greying']
  },
  {
    id: 10, name: 'Sesame', sanskritName: 'Sesamum Indicum', emoji: '🌱',
    imageSlug: 'sesame', tag: 'Deep Nourishment',
    description: 'Sesame oil — the base of classical Ayurvedic hair formulations — has a small molecular structure that allows it to penetrate deeply into the scalp and hair cortex, delivering lasting nourishment.',
    originPlace: 'Gujarat & Rajasthan', displayOrder: 10,
    benefits: ['Deep scalp penetration', 'Adds lasting lustre', 'Natural SPF protection', 'Balances scalp pH']
  },
  {
    id: 11, name: 'Aloe Vera', sanskritName: 'Aloe Barbadensis', emoji: '🌵',
    imageSlug: 'aloe-vera', tag: 'Moisture Sealing',
    description: 'Aloe contains proteolytic enzymes that repair dead skin cells on the scalp. Its mucilaginous polysaccharides coat the hair shaft, locking in moisture and giving hair unparalleled softness.',
    originPlace: 'Rajasthan & Gujarat', displayOrder: 11,
    benefits: ['Repairs dead scalp cells', 'Locks in moisture', 'Adds extraordinary softness', 'Balances pH naturally']
  },
  {
    id: 12, name: 'Nigella Seeds', sanskritName: 'Nigella Sativa', emoji: '🖤',
    imageSlug: 'nigella-seeds', tag: 'Scalp Healing',
    description: 'Called "Habbatus Sauda" — the seed of blessing — in ancient texts, Nigella Sativa contains Thymoquinone, a powerful compound that inhibits DHT (the hormone responsible for hair thinning) and calms inflamed scalps.',
    originPlace: 'Madhya Pradesh', displayOrder: 12,
    benefits: ['Inhibits DHT naturally', 'Calms inflamed scalp', 'Antioxidant-rich', 'Supports melanin production']
  },
  {
    id: 13, name: 'Cinnamon', sanskritName: 'Cinnamomum Verum', emoji: '🍂',
    imageSlug: 'cinnamon', tag: 'Scalp Stimulation',
    description: 'Ceylon Cinnamon is a warming circulatory stimulant that dilates blood vessels in the scalp, dramatically increasing nutrient delivery to hair follicles. Its antimicrobial properties also fight scalp fungus and bacteria.',
    originPlace: 'Kerala & Sri Lanka Border', displayOrder: 13,
    benefits: ['Boosts scalp blood flow', 'Antimicrobial action', 'Stimulates follicle activity', 'Warms and revives dull scalp']
  },
  {
    id: 14, name: 'Cloves', sanskritName: 'Syzygium Aromaticum', emoji: '🌿',
    imageSlug: 'cloves', tag: 'Purifying & Strengthening',
    description: 'Cloves are rich in eugenol — a powerful antioxidant and antiseptic that purifies the scalp, combats free radical damage to hair fibres, and strengthens the cortex of each strand from within.',
    originPlace: 'Tamil Nadu & Kerala', displayOrder: 14,
    benefits: ['Eugenol-rich antioxidant', 'Deep scalp antiseptic', 'Combats free radical damage', 'Fortifies hair cortex']
  },
  {
    id: 15, name: 'Indian Nard', sanskritName: 'Nardostachys Jatamansi', emoji: '🌸',
    imageSlug: 'indian-nard', tag: 'Rare Ayurvedic Herb',
    description: 'Jatamansi is one of the rarest and most revered herbs in Ayurvedic medicine, used since Vedic times for its profound ability to calm the mind-scalp connection, enhance pigmentation, and awaken dormant follicles.',
    originPlace: 'Himalayas, Uttarakhand', displayOrder: 15,
    benefits: ['Awakens dormant follicles', 'Enhances hair pigmentation', 'Rare Himalayan sourcing', 'Calms mind-scalp stress axis']
  }
];

@Injectable({ providedIn: 'root' })
export class IngredientService {
  getAll(): Observable<Ingredient[]> {
    return of(INGREDIENTS);
  }
}
