import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  productUsed: string;
  date: string;
  initials: string;
}

// ─── Static approved reviews (add real ones here as you get them) ──────────
const APPROVED_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Anjali Mehta',
    rating: 5,
    text: 'I\'ve been using Vedrithm for 6 weeks and the difference is unbelievable. My hair fall has reduced dramatically and my scalp feels so calm. The fragrance is divine — truly Ayurvedic.',
    productUsed: 'Bhringraj & Castor Base + Fenugreek Booster',
    date: 'March 2025',
    initials: 'AM'
  },
  {
    id: '2',
    name: 'Rohan Desai',
    rating: 5,
    text: 'Was sceptical at first, but this oil genuinely works. My dandruff is almost gone after 3 weeks. Light texture, absorbs fast — doesn\'t leave that greasy residue most oils do.',
    productUsed: 'Neem & Cinnamon Base + Clove Purifying Booster',
    date: 'February 2025',
    initials: 'RD'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    rating: 5,
    text: 'The quiz result was spot on for my hair type! Got the Amla & Sesame Base and my hair growth has visibly improved. The packaging is also beautiful — great as a gift.',
    productUsed: 'Amla & Sesame Base + Rosemary Growth Booster',
    date: 'January 2025',
    initials: 'PS'
  },
  {
    id: '4',
    name: 'Kavita Nair',
    rating: 4,
    text: 'Lovely oil with authentic Ayurvedic herbs. My frizz has calmed down noticeably. Would give 5 stars but I wish it came in a larger bottle. Will definitely reorder!',
    productUsed: 'Coconut & Hibiscus Base + Aloe Moisture Booster',
    date: 'March 2025',
    initials: 'KN'
  },
  {
    id: '5',
    name: 'Sunita Pillai',
    rating: 5,
    text: 'My mother-in-law recommended Ayurvedic hair oils and this is the best I\'ve found. Smell is authentic, not artificial. My premature greying has slowed noticeably in 2 months.',
    productUsed: 'Curry Leaf & Indian Nard Base + Nigella Seed Booster',
    date: 'December 2024',
    initials: 'SP'
  },
  {
    id: '6',
    name: 'Deepak Rao',
    rating: 5,
    text: 'Bought for my wife and she loves it. She says it\'s the first hair oil that doesn\'t irritate her sensitive scalp. Now her hair looks shinier and stronger after just a month.',
    productUsed: 'Coconut & Bhringraj Base + Rosemary & Amla Booster',
    date: 'January 2025',
    initials: 'DR'
  }
];

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero -->
    <section class="reviews-hero">
      <div class="reviews-hero-bg"></div>
      <div class="container">
        <span class="section-tag">Real Customers, Real Results</span>
        <h1 class="page-title">What Our <span>Community</span> Says</h1>
        <p class="page-subtitle">Honest reviews from people who've made Vedrithm part of their hair care ritual.</p>
        <div class="rating-summary">
          <div class="avg-rating">{{ avgRating.toFixed(1) }}</div>
          <div class="avg-stars">
            <span *ngFor="let s of [1,2,3,4,5]" class="star" [class.filled]="s <= Math.round(avgRating)">★</span>
          </div>
          <div class="avg-label">{{ reviews.length }} verified reviews</div>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="reviews-section">
      <div class="container">
        <div class="reviews-grid">
          <div class="review-card" *ngFor="let r of reviews; let i = index"
               [style.animation-delay]="(i * 0.08) + 's'">
            <div class="review-header">
              <div class="reviewer-avatar">{{ r.initials }}</div>
              <div class="reviewer-meta">
                <div class="reviewer-name">{{ r.name }}</div>
                <div class="review-date">{{ r.date }}</div>
              </div>
              <div class="review-stars">
                <span *ngFor="let s of [1,2,3,4,5]" class="star" [class.filled]="s <= r.rating">★</span>
              </div>
            </div>
            <p class="review-text">"{{ r.text }}"</p>
            <div class="review-product">
              <span class="product-label">✦</span>
              <span>{{ r.productUsed }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Submit Review Form -->
    <section class="submit-review-section">
      <div class="container">
        <div class="submit-box">
          <div class="submit-header">
            <span class="section-tag">Share Your Story</span>
            <h2 class="submit-title">Leave a <span>Review</span></h2>
            <p class="submit-desc">Tried Vedrithm? We'd love to hear about your experience.</p>
          </div>

          <!-- Success state -->
          <div class="success-state" *ngIf="reviewSubmitted">
            <div class="success-icon">🌿</div>
            <h3>Thank you, {{ reviewForm.name }}!</h3>
            <p>Your review has been submitted and will appear after a quick review by our team.</p>
            <button class="btn-outline" (click)="resetForm()">Submit Another Review</button>
          </div>

          <!-- Form -->
          <div class="review-form" *ngIf="!reviewSubmitted">
            <div class="form-row">
              <div class="form-group">
                <label>Your Name *</label>
                <input type="text" class="form-input" placeholder="Priya Sharma"
                       [(ngModel)]="reviewForm.name" />
              </div>
              <div class="form-group">
                <label>Product Used</label>
                <input type="text" class="form-input" placeholder="e.g. Hair Fall Formula"
                       [(ngModel)]="reviewForm.productUsed" />
              </div>
            </div>

            <div class="form-group">
              <label>Your Rating *</label>
              <div class="star-picker">
                <button *ngFor="let s of [1,2,3,4,5]"
                        class="star-btn"
                        [class.selected]="s <= reviewForm.rating"
                        (click)="reviewForm.rating = s">★</button>
                <span class="rating-label" *ngIf="reviewForm.rating">
                  {{ ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent!'][reviewForm.rating] }}
                </span>
              </div>
            </div>

            <div class="form-group">
              <label>Your Review *</label>
              <textarea class="form-input form-textarea"
                        placeholder="Share your honest experience — what changed, how long it took, what you love..."
                        [(ngModel)]="reviewForm.text"
                        rows="4"></textarea>
              <span class="char-count">{{ reviewForm.text.length }}/500</span>
            </div>

            <div class="form-error" *ngIf="formError">{{ formError }}</div>

            <button class="btn-primary submit-btn"
                    (click)="submitReview()"
                    [disabled]="submittingReview">
              <span *ngIf="!submittingReview">Submit Review</span>
              <span *ngIf="submittingReview">Submitting...</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .reviews-hero { min-height:40vh; display:flex; align-items:center; padding:8rem 0 4rem; position:relative; text-align:center; overflow:hidden; }
    .reviews-hero-bg { position:absolute; inset:0; background:radial-gradient(ellipse 70% 60% at 50% 40%,rgba(26,74,46,0.3) 0%,transparent 70%); }
    .reviews-hero .container { position:relative; z-index:1; }
    .page-title { font-family:var(--font-display); font-size:clamp(2.5rem,5vw,4.5rem); font-weight:300; color:var(--cream); margin:0.5rem 0 1.25rem; }
    .page-title span { color:var(--gold); font-style:italic; }
    .page-subtitle { max-width:520px; margin:0 auto 2rem; font-size:1rem; color:rgba(250,244,230,0.65); line-height:1.8; }
    .rating-summary { display:inline-flex; align-items:center; gap:1.25rem; background:rgba(212,175,55,0.08); border:1px solid var(--border-gold); border-radius:50px; padding:0.75rem 2rem; }
    .avg-rating { font-family:var(--font-display); font-size:2.5rem; color:var(--gold); font-weight:300; line-height:1; }
    .avg-stars, .review-stars { display:flex; gap:2px; }
    .star { color:rgba(212,175,55,0.2); font-size:1.2rem; }
    .star.filled { color:var(--gold); }
    .avg-label { font-size:0.78rem; color:rgba(250,244,230,0.5); letter-spacing:0.05em; }
    .reviews-section { padding:5rem 0; }
    .reviews-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:1.5rem; }
    .review-card { background:var(--forest-mid); border:1px solid var(--border-gold); border-radius:8px; padding:1.75rem; animation:fadeInUp 0.6s ease both; transition:border-color 0.3s ease, transform 0.3s ease; }
    .review-card:hover { border-color:rgba(212,175,55,0.4); transform:translateY(-3px); }
    .review-header { display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem; }
    .reviewer-avatar { width:44px; height:44px; border-radius:50%; background:linear-gradient(135deg,var(--gold-dark),var(--gold)); display:flex; align-items:center; justify-content:center; font-family:var(--font-display); font-size:1rem; color:var(--deep-forest); font-weight:700; flex-shrink:0; }
    .reviewer-meta { flex:1; }
    .reviewer-name { font-size:0.92rem; font-weight:600; color:var(--cream); }
    .review-date { font-size:0.72rem; color:rgba(250,244,230,0.4); margin-top:0.1rem; }
    .review-text { font-size:0.88rem; color:rgba(250,244,230,0.75); line-height:1.85; margin-bottom:1.25rem; font-style:italic; }
    .review-product { display:flex; align-items:center; gap:0.5rem; padding:0.5rem 0.75rem; background:rgba(212,175,55,0.05); border:1px solid var(--border-gold); border-radius:4px; font-size:0.75rem; color:rgba(250,244,230,0.5); }
    .product-label { color:var(--gold); }
    .submit-review-section { padding:0 0 8rem; }
    .submit-box { max-width:680px; margin:0 auto; background:var(--forest-mid); border:1px solid var(--border-gold); border-radius:8px; overflow:hidden; }
    .submit-header { padding:2.5rem 2.5rem 2rem; text-align:center; border-bottom:1px solid var(--border-gold); }
    .submit-title { font-family:var(--font-display); font-size:clamp(1.8rem,3vw,2.5rem); font-weight:300; color:var(--cream); margin:0.5rem 0 0.5rem; }
    .submit-title span { color:var(--gold); font-style:italic; }
    .submit-desc { font-size:0.88rem; color:rgba(250,244,230,0.55); }
    .review-form, .success-state { padding:2.5rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; }
    .form-group { display:flex; flex-direction:column; margin-bottom:1.5rem; position:relative; }
    .form-group label { font-size:0.72rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold); margin-bottom:0.5rem; opacity:0.8; }
    .form-input { background:var(--forest-light); border:1px solid var(--border-gold); border-radius:4px; padding:0.9rem 1.1rem; font-family:var(--font-body); font-size:0.92rem; color:var(--cream); outline:none; transition:border-color 0.3s ease; }
    .form-input::placeholder { color:rgba(250,244,230,0.3); }
    .form-input:focus { border-color:var(--gold); }
    .form-textarea { resize:vertical; min-height:120px; }
    .char-count { position:absolute; bottom:-1.25rem; right:0; font-size:0.7rem; color:rgba(250,244,230,0.3); }
    .star-picker { display:flex; align-items:center; gap:0.25rem; }
    .star-btn { background:none; border:none; cursor:pointer; font-size:2rem; color:rgba(212,175,55,0.25); transition:color 0.2s ease, transform 0.2s ease; padding:0 2px; }
    .star-btn:hover, .star-btn.selected { color:var(--gold); transform:scale(1.1); }
    .rating-label { margin-left:0.75rem; font-size:0.82rem; color:var(--gold); font-family:var(--font-display); font-style:italic; }
    .form-error { color:#e05c5c; font-size:0.82rem; margin-bottom:1rem; }
    .submit-btn { width:100%; }
    .success-state { text-align:center; padding:3rem; }
    .success-icon { font-size:3rem; margin-bottom:1rem; }
    .success-state h3 { font-family:var(--font-display); font-size:1.8rem; color:var(--gold); margin-bottom:0.75rem; }
    .success-state p { font-size:0.9rem; color:rgba(250,244,230,0.65); line-height:1.7; margin-bottom:1.75rem; }
    @media (max-width:640px) { .form-row { grid-template-columns:1fr; } .rating-summary { flex-direction:column; gap:0.5rem; } .submit-header, .review-form { padding:1.75rem; } }
    @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  `]
})
export class ReviewsComponent implements OnInit {
  //reviews: Review[] = APPROVED_REVIEWS;
  reviews: Review[] = [];
  Math = Math;

  reviewForm = { name: '', rating: 0, text: '', productUsed: '' };
  reviewSubmitted = false;
  submittingReview = false;
  formError = '';

  get avgRating(): number {
    if (!this.reviews.length) return 0;
    return this.reviews.reduce((sum, r) => sum + r.rating, 0) / this.reviews.length;
  }

  constructor(private quizService: QuizService) {}

  //ngOnInit() {}

  ngOnInit() {
  this.quizService.getReviews().subscribe(data => {
    this.reviews = data.map(r => ({
      ...r,
      initials: this.getInitials(r.name)
    }));
  });
}

getInitials(name: string): string {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
}

  submitReview() {
    this.formError = '';
    if (!this.reviewForm.name.trim()) { this.formError = 'Please enter your name.'; return; }
    if (!this.reviewForm.rating) { this.formError = 'Please select a rating.'; return; }
    if (this.reviewForm.text.trim().length < 20) { this.formError = 'Please write at least 20 characters in your review.'; return; }
    if (this.reviewForm.text.length > 500) { this.formError = 'Review must be under 500 characters.'; return; }

    this.submittingReview = true;
    this.quizService.saveReview({
      name: this.reviewForm.name,
      rating: this.reviewForm.rating,
      text: this.reviewForm.text,
      productUsed: this.reviewForm.productUsed || 'Vedrithm Herbal Hair Oil'
    }).subscribe({
      next: () => { this.reviewSubmitted = true; this.submittingReview = false; },
      error: () => { this.reviewSubmitted = true; this.submittingReview = false; } // Still show success to user
    });
  }

  resetForm() {
    this.reviewForm = { name: '', rating: 0, text: '', productUsed: '' };
    this.reviewSubmitted = false;
    this.formError = '';
  }
}
