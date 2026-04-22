import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbyBD4qAumQOYFqQnfh2wgxh2AK24I4law4MFo1GlHj2rirPvlZu1Ia68kFU1Lrx3uE79w/exec';
const ADMIN_PASSWORD = 'vedrithm2025'; // change this

interface Review {
  id: string; date: string; name: string; rating: number;
  text: string; productUsed: string; approved: string; clientId: string;
  _localStatus?: string;
}
interface QuizEntry {
  id: string; date: string; name: string; mobile: string;
  hairType: string; scalpType: string; concerns: string;
  lifestyle: string; recommendedProduct: string; waSent: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- LOGIN SCREEN -->
    <div class="admin-login" *ngIf="!authenticated">
      <div class="login-card">
        <div class="login-logo">🌿</div>
        <h1 class="login-title">Vedrithm Admin</h1>
        <p class="login-sub">Owner access only</p>
        <div class="login-field">
          <input type="password" class="login-input" placeholder="Enter admin password"
                 [(ngModel)]="passwordInput"
                 (keyup.enter)="tryLogin()"
                 [class.shake]="loginError" />
        </div>
        <p class="login-error" *ngIf="loginError">Incorrect password. Try again.</p>
        <button class="login-btn" (click)="tryLogin()">Enter Dashboard</button>
      </div>
    </div>

    <!-- ADMIN DASHBOARD -->
    <div class="admin-dash" *ngIf="authenticated">

      <!-- Header -->
      <header class="admin-header">
        <div class="admin-header-inner">
          <div class="admin-brand">
            <span class="admin-leaf">🌿</span>
            <div>
              <h1 class="admin-title">Vedrithm Admin</h1>
              <p class="admin-tagline">Dashboard & Moderation</p>
            </div>
          </div>
          <div class="admin-header-actions">
            <button class="btn-refresh" (click)="loadData()" [disabled]="loading">
              <span [class.spin]="loading">↻</span> Refresh
            </button>
            <button class="btn-logout" (click)="logout()">Logout</button>
          </div>
        </div>
      </header>

      <!-- Stats bar -->
      <div class="stats-bar">
        <div class="stat-card">
          <div class="stat-num">{{ reviews.length }}</div>
          <div class="stat-label">Total Reviews</div>
        </div>
        <div class="stat-card">
          <div class="stat-num gold">{{ approvedCount }}</div>
          <div class="stat-label">Approved</div>
        </div>
        <div class="stat-card">
          <div class="stat-num amber">{{ pendingCount }}</div>
          <div class="stat-label">Pending</div>
        </div>
        <div class="stat-card">
          <div class="stat-num teal">{{ quizEntries.length }}</div>
          <div class="stat-label">Quiz Leads</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">{{ avgRating.toFixed(1) }}★</div>
          <div class="stat-label">Avg Rating</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="admin-tabs">
        <button class="tab-btn" [class.active]="activeTab === 'reviews'" (click)="activeTab='reviews'">
          Reviews <span class="tab-badge" *ngIf="pendingCount">{{ pendingCount }}</span>
        </button>
        <button class="tab-btn" [class.active]="activeTab === 'quiz'" (click)="activeTab='quiz'">
          Quiz Leads <span class="tab-badge teal">{{ quizEntries.length }}</span>
        </button>
      </div>

      <!-- Loading / Error -->
      <div class="admin-loading" *ngIf="loading">
        <div class="loader"></div>
        <p>Loading data from Google Sheets...</p>
      </div>
      <div class="admin-error" *ngIf="error && !loading">
        <p>⚠️ {{ error }}</p>
        <small>Make sure your Google Apps Script is deployed and GAS_URL is set correctly.</small>
      </div>

      <!-- REVIEWS TAB -->
      <div class="tab-content" *ngIf="activeTab === 'reviews' && !loading">
        <div class="filter-bar">
          <button class="filter-btn" [class.active]="reviewFilter === 'all'" (click)="reviewFilter='all'">All ({{ reviews.length }})</button>
          <button class="filter-btn" [class.active]="reviewFilter === 'Pending'" (click)="reviewFilter='Pending'">Pending ({{ pendingCount }})</button>
          <button class="filter-btn" [class.active]="reviewFilter === 'Approved'" (click)="reviewFilter='Approved'">Approved ({{ approvedCount }})</button>
          <button class="filter-btn" [class.active]="reviewFilter === 'Rejected'" (click)="reviewFilter='Rejected'">Rejected</button>
        </div>

        <div class="empty-state" *ngIf="filteredReviews.length === 0">
          <p>No reviews in this category yet.</p>
          <small>Reviews from the website will appear here once submitted.</small>
        </div>

        <div class="reviews-list">
          <div class="review-admin-card" *ngFor="let r of filteredReviews">
            <div class="rac-top">
              <div class="rac-avatar">{{ initials(r.name) }}</div>
              <div class="rac-meta">
                <div class="rac-name">{{ r.name }}</div>
                <div class="rac-date">{{ r.date }}</div>
                <div class="rac-stars">
                  <span *ngFor="let s of [1,2,3,4,5]" [class.filled]="s <= r.rating">★</span>
                </div>
              </div>
              <div class="rac-status" [ngClass]="statusClass(r)">
                {{ r._localStatus || r.approved }}
              </div>
            </div>
            <p class="rac-text">"{{ r.text }}"</p>
            <div class="rac-product">✦ {{ r.productUsed }}</div>
            <div class="rac-actions" *ngIf="(r._localStatus || r.approved) !== 'Approved' || (r._localStatus || r.approved) === 'Approved'">
              <button class="action-approve"
                      *ngIf="(r._localStatus || r.approved) !== 'Approved'"
                      (click)="moderateReview(r, 'Approved')">
                ✓ Approve
              </button>
              <button class="action-reject"
                      *ngIf="(r._localStatus || r.approved) !== 'Rejected'"
                      (click)="moderateReview(r, 'Rejected')">
                ✗ Reject
              </button>
              <button class="action-wa" (click)="openWhatsApp(r.name, '')">
                💬 WhatsApp
              </button>
            </div>
            <div class="rac-moderated" *ngIf="r._localStatus">
              <span *ngIf="r._localStatus === 'Approved'">✅ Marked Approved — update in Google Sheets</span>
              <span *ngIf="r._localStatus === 'Rejected'">❌ Marked Rejected — update in Google Sheets</span>
            </div>
          </div>
        </div>
      </div>

      <!-- QUIZ LEADS TAB -->
      <div class="tab-content" *ngIf="activeTab === 'quiz' && !loading">
        <div class="empty-state" *ngIf="quizEntries.length === 0">
          <p>No quiz submissions yet.</p>
          <small>When visitors complete the hair quiz, their details will appear here.</small>
        </div>

        <div class="quiz-list">
          <div class="quiz-admin-card" *ngFor="let q of quizEntries">
            <div class="qac-header">
              <div class="qac-avatar">{{ initials(q.name) }}</div>
              <div class="qac-meta">
                <div class="qac-name">{{ q.name }}</div>
                <div class="qac-mobile">📱 +91 {{ q.mobile }}</div>
                <div class="qac-date">{{ q.date }}</div>
              </div>
              <div class="qac-wa-status" [class.sent]="q.waSent === 'Yes ✅'">
                {{ q.waSent === 'Yes ✅' ? '✅ Notified' : '⏳ Not Sent' }}
              </div>
            </div>

            <div class="qac-details">
              <div class="qac-detail"><span>Hair</span>{{ q.hairType }}</div>
              <div class="qac-detail"><span>Scalp</span>{{ q.scalpType }}</div>
              <div class="qac-detail"><span>Lifestyle</span>{{ q.lifestyle }}</div>
              <div class="qac-detail wide"><span>Concerns</span>{{ q.concerns }}</div>
            </div>

            <div class="qac-product">
              <span class="qac-product-label">Recommended</span>
              <strong>{{ q.recommendedProduct }}</strong>
            </div>

            <div class="qac-actions">
              <button class="action-wa" (click)="openWhatsApp(q.name, q.mobile, q.recommendedProduct)">
                💬 Send WhatsApp
              </button>
              <a class="action-call" [href]="'tel:+91' + q.mobile">📞 Call</a>
            </div>
          </div>
        </div>
      </div>

      <!-- NOTE about GAS integration -->
      <div class="gas-note" *ngIf="!loading">
        <p>💡 <strong>Note:</strong> This admin reads live data from your Google Sheets via the GAS endpoint.
        Approve/Reject actions are local previews — to persist them, update the Approved column directly in Google Sheets,
        or add a <code>updateReview</code> action to your GAS backend.</p>
      </div>
    </div>
  `,
  styles: [`
    /* ── LOGIN ── */
    .admin-login {
      min-height:100vh;
      display:flex; align-items:center; justify-content:center;
      background:var(--deep-forest);
      background-image:radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,74,46,0.25) 0%, transparent 70%);
      padding:2rem;
    }
    .login-card {
      width:100%; max-width:400px;
      background:var(--forest-mid);
      border:1px solid var(--border-gold);
      border-radius:12px;
      padding:3rem 2.5rem;
      text-align:center;
      box-shadow:0 20px 60px rgba(0,0,0,0.6);
    }
    .login-logo { font-size:3rem; margin-bottom:1.25rem; }
    .login-title { font-family:var(--font-display); font-size:2rem; color:var(--cream); margin-bottom:0.25rem; }
    .login-sub { font-size:0.82rem; color:rgba(250,244,230,0.4); letter-spacing:0.1em; text-transform:uppercase; margin-bottom:2.5rem; }
    .login-field { margin-bottom:1rem; }
    .login-input {
      width:100%; padding:0.9rem 1.25rem;
      background:var(--forest-light);
      border:1px solid var(--border-gold);
      border-radius:6px;
      color:var(--cream);
      font-family:var(--font-body); font-size:1rem;
      outline:none; text-align:center;
      transition:border-color 0.3s ease;
    }
    .login-input:focus { border-color:var(--gold); }
    .login-input.shake { animation:shake 0.4s ease; }
    @keyframes shake {
      0%,100%{transform:translateX(0)} 25%{transform:translateX(-8px)} 75%{transform:translateX(8px)}
    }
    .login-error { color:#e05c5c; font-size:0.82rem; margin-bottom:1rem; }
    .login-btn {
      width:100%; padding:0.9rem;
      background:linear-gradient(135deg,var(--gold-dark),var(--gold));
      border:none; border-radius:6px;
      color:var(--deep-forest); font-family:var(--font-body);
      font-size:0.9rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase;
      cursor:pointer; transition:opacity 0.3s ease;
    }
    .login-btn:hover { opacity:0.9; }

    /* ── DASHBOARD ── */
    .admin-dash { min-height:100vh; background:var(--deep-forest); padding-bottom:4rem; }

    .admin-header {
      background:var(--forest-mid);
      border-bottom:1px solid var(--border-gold);
      padding:1.25rem 0;
      position:sticky; top:0; z-index:100;
      backdrop-filter:blur(10px);
    }
    .admin-header-inner {
      max-width:1100px; margin:0 auto; padding:0 1.5rem;
      display:flex; align-items:center; justify-content:space-between;
    }
    .admin-brand { display:flex; align-items:center; gap:1rem; }
    .admin-leaf { font-size:2rem; }
    .admin-title { font-family:var(--font-display); font-size:1.5rem; color:var(--cream); line-height:1; }
    .admin-tagline { font-size:0.72rem; color:rgba(212,175,55,0.6); letter-spacing:0.12em; text-transform:uppercase; margin-top:0.2rem; }
    .admin-header-actions { display:flex; gap:0.75rem; }
    .btn-refresh, .btn-logout {
      padding:0.5rem 1.1rem;
      border-radius:50px;
      font-family:var(--font-body); font-size:0.78rem;
      letter-spacing:0.08em; text-transform:uppercase;
      cursor:pointer; transition:all 0.3s ease;
    }
    .btn-refresh {
      background:rgba(212,175,55,0.1);
      border:1px solid var(--border-gold);
      color:var(--gold);
    }
    .btn-refresh:hover { background:rgba(212,175,55,0.2); }
    .btn-logout {
      background:rgba(224,92,92,0.1);
      border:1px solid rgba(224,92,92,0.3);
      color:rgba(224,92,92,0.8);
    }
    .btn-logout:hover { background:rgba(224,92,92,0.2); }
    .spin { display:inline-block; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    /* ── STATS ── */
    .stats-bar {
      max-width:1100px; margin:1.5rem auto 0; padding:0 1.5rem;
      display:grid; grid-template-columns:repeat(5,1fr); gap:1rem;
    }
    .stat-card {
      background:var(--forest-mid); border:1px solid var(--border-gold);
      border-radius:8px; padding:1.25rem;
      text-align:center;
    }
    .stat-num { font-family:var(--font-display); font-size:2rem; color:var(--cream); }
    .stat-num.gold { color:var(--gold); }
    .stat-num.amber { color:#f59e0b; }
    .stat-num.teal { color:#5eead4; }
    .stat-label { font-size:0.72rem; color:rgba(250,244,230,0.4); text-transform:uppercase; letter-spacing:0.1em; margin-top:0.25rem; }

    /* ── TABS ── */
    .admin-tabs {
      max-width:1100px; margin:1.5rem auto 0; padding:0 1.5rem;
      display:flex; gap:0.5rem; border-bottom:1px solid var(--border-gold);
    }
    .tab-btn {
      padding:0.6rem 1.4rem; background:transparent;
      border:none; border-bottom:2px solid transparent;
      color:rgba(250,244,230,0.5);
      font-family:var(--font-body); font-size:0.85rem;
      letter-spacing:0.08em; text-transform:uppercase;
      cursor:pointer; transition:all 0.3s ease;
      display:flex; align-items:center; gap:0.5rem;
      margin-bottom:-1px;
    }
    .tab-btn.active { color:var(--gold); border-bottom-color:var(--gold); }
    .tab-btn:hover { color:var(--cream); }
    .tab-badge {
      background:rgba(245,158,11,0.2); color:#f59e0b;
      border:1px solid rgba(245,158,11,0.3);
      border-radius:50px; padding:0.1rem 0.5rem;
      font-size:0.7rem; font-weight:700;
    }
    .tab-badge.teal { background:rgba(94,234,212,0.15); color:#5eead4; border-color:rgba(94,234,212,0.3); }

    /* ── CONTENT ── */
    .tab-content { max-width:1100px; margin:1.5rem auto 0; padding:0 1.5rem; }

    .filter-bar { display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1.25rem; }
    .filter-btn {
      padding:0.35rem 0.9rem;
      background:transparent;
      border:1px solid var(--border-gold);
      border-radius:50px;
      color:rgba(250,244,230,0.55);
      font-size:0.75rem; letter-spacing:0.08em;
      cursor:pointer; transition:all 0.25s ease;
    }
    .filter-btn.active { background:rgba(212,175,55,0.12); border-color:var(--gold); color:var(--gold); }
    .filter-btn:hover { color:var(--cream); }

    /* ── LOADING / ERROR ── */
    .admin-loading {
      max-width:1100px; margin:3rem auto; padding:0 1.5rem;
      text-align:center; color:rgba(250,244,230,0.5);
    }
    .loader {
      width:40px; height:40px; border:2px solid var(--border-gold);
      border-top-color:var(--gold); border-radius:50%;
      animation:spin 0.8s linear infinite;
      margin:0 auto 1rem;
    }
    .admin-error {
      max-width:1100px; margin:2rem auto; padding:1.5rem;
      background:rgba(224,92,92,0.08); border:1px solid rgba(224,92,92,0.3);
      border-radius:8px; color:#e05c5c; font-size:0.88rem;
    }
    .admin-error small { color:rgba(224,92,92,0.6); display:block; margin-top:0.4rem; }

    .empty-state {
      text-align:center; padding:4rem 2rem;
      color:rgba(250,244,230,0.4);
    }
    .empty-state p { font-size:1rem; margin-bottom:0.5rem; }
    .empty-state small { font-size:0.8rem; }

    /* ── REVIEW CARDS ── */
    .reviews-list { display:flex; flex-direction:column; gap:1rem; }
    .review-admin-card {
      background:var(--forest-mid); border:1px solid var(--border-gold);
      border-radius:8px; padding:1.5rem;
      transition:border-color 0.3s ease;
    }
    .review-admin-card:hover { border-color:rgba(212,175,55,0.4); }
    .rac-top { display:flex; align-items:flex-start; gap:1rem; margin-bottom:1rem; }
    .rac-avatar {
      width:42px; height:42px; border-radius:50%;
      background:linear-gradient(135deg,var(--gold-dark),var(--gold));
      display:flex; align-items:center; justify-content:center;
      font-family:var(--font-display); font-size:0.9rem;
      color:var(--deep-forest); font-weight:700; flex-shrink:0;
    }
    .rac-meta { flex:1; }
    .rac-name { font-size:0.92rem; font-weight:600; color:var(--cream); }
    .rac-date { font-size:0.72rem; color:rgba(250,244,230,0.4); margin-top:0.1rem; }
    .rac-stars span { color:rgba(212,175,55,0.2); }
    .rac-stars span.filled { color:var(--gold); }
    .rac-status {
      padding:0.25rem 0.75rem; border-radius:50px;
      font-size:0.72rem; letter-spacing:0.08em; text-transform:uppercase; font-weight:700;
    }
    .status-pending { background:rgba(245,158,11,0.15); color:#f59e0b; border:1px solid rgba(245,158,11,0.3); }
    .status-approved { background:rgba(52,211,153,0.12); color:#34d399; border:1px solid rgba(52,211,153,0.3); }
    .status-rejected { background:rgba(224,92,92,0.12); color:#e05c5c; border:1px solid rgba(224,92,92,0.3); }
    .rac-text { font-size:0.88rem; color:rgba(250,244,230,0.7); font-style:italic; line-height:1.7; margin-bottom:0.75rem; }
    .rac-product { font-size:0.75rem; color:rgba(212,175,55,0.6); margin-bottom:1rem; }
    .rac-actions { display:flex; gap:0.6rem; flex-wrap:wrap; }
    .action-approve, .action-reject, .action-wa, .action-call {
      padding:0.4rem 1rem; border-radius:50px;
      font-family:var(--font-body); font-size:0.75rem; font-weight:600;
      letter-spacing:0.06em; cursor:pointer; transition:all 0.25s ease;
      text-decoration:none; display:inline-flex; align-items:center; gap:0.3rem;
      border:none;
    }
    .action-approve { background:rgba(52,211,153,0.12); color:#34d399; border:1px solid rgba(52,211,153,0.3); }
    .action-approve:hover { background:rgba(52,211,153,0.25); }
    .action-reject { background:rgba(224,92,92,0.1); color:#e05c5c; border:1px solid rgba(224,92,92,0.25); }
    .action-reject:hover { background:rgba(224,92,92,0.2); }
    .action-wa { background:rgba(37,211,102,0.1); color:#25d366; border:1px solid rgba(37,211,102,0.25); }
    .action-wa:hover { background:rgba(37,211,102,0.2); }
    .action-call { background:rgba(94,234,212,0.1); color:#5eead4; border:1px solid rgba(94,234,212,0.25); }
    .action-call:hover { background:rgba(94,234,212,0.2); }
    .rac-moderated { font-size:0.76rem; color:rgba(250,244,230,0.4); margin-top:0.6rem; font-style:italic; }

    /* ── QUIZ CARDS ── */
    .quiz-list { display:flex; flex-direction:column; gap:1rem; }
    .quiz-admin-card {
      background:var(--forest-mid); border:1px solid var(--border-gold);
      border-radius:8px; padding:1.5rem;
    }
    .qac-header { display:flex; align-items:flex-start; gap:1rem; margin-bottom:1.25rem; }
    .qac-avatar {
      width:42px; height:42px; border-radius:50%;
      background:linear-gradient(135deg,#0f766e,#5eead4);
      display:flex; align-items:center; justify-content:center;
      font-family:var(--font-display); font-size:0.9rem;
      color:var(--deep-forest); font-weight:700; flex-shrink:0;
    }
    .qac-meta { flex:1; }
    .qac-name { font-size:0.92rem; font-weight:600; color:var(--cream); }
    .qac-mobile { font-size:0.8rem; color:rgba(250,244,230,0.5); }
    .qac-date { font-size:0.72rem; color:rgba(250,244,230,0.35); }
    .qac-wa-status {
      padding:0.25rem 0.75rem; border-radius:50px;
      font-size:0.72rem; letter-spacing:0.06em; font-weight:700;
      background:rgba(245,158,11,0.12); color:#f59e0b;
      border:1px solid rgba(245,158,11,0.3);
    }
    .qac-wa-status.sent {
      background:rgba(52,211,153,0.1); color:#34d399;
      border-color:rgba(52,211,153,0.3);
    }
    .qac-details { display:grid; grid-template-columns:repeat(3,1fr); gap:0.5rem; margin-bottom:1rem; }
    .qac-detail.wide { grid-column:1/-1; }
    .qac-detail {
      background:rgba(212,175,55,0.04); border:1px solid rgba(212,175,55,0.12);
      border-radius:6px; padding:0.5rem 0.75rem;
      font-size:0.8rem; color:rgba(250,244,230,0.7);
    }
    .qac-detail span { display:block; font-size:0.65rem; color:var(--gold); letter-spacing:0.1em; text-transform:uppercase; margin-bottom:0.15rem; }
    .qac-product {
      background:rgba(212,175,55,0.06); border:1px solid var(--border-gold);
      border-radius:6px; padding:0.75rem 1rem;
      margin-bottom:1rem; font-size:0.85rem; color:rgba(250,244,230,0.8);
    }
    .qac-product-label { display:block; font-size:0.65rem; color:var(--gold); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:0.3rem; }
    .qac-actions { display:flex; gap:0.6rem; }

    /* ── GAS NOTE ── */
    .gas-note {
      max-width:1100px; margin:2rem auto 0; padding:1rem 1.5rem;
      background:rgba(212,175,55,0.04); border:1px solid rgba(212,175,55,0.12);
      border-radius:6px; font-size:0.78rem; color:rgba(250,244,230,0.45);
      line-height:1.7;
    }
    .gas-note strong { color:rgba(212,175,55,0.7); }
    .gas-note code { background:rgba(212,175,55,0.1); padding:0.1rem 0.35rem; border-radius:3px; font-size:0.76rem; color:var(--gold); }

    @media (max-width:640px) {
      .stats-bar { grid-template-columns:repeat(3,1fr); }
      .qac-details { grid-template-columns:1fr 1fr; }
    }
  `]
})
export class AdminComponent implements OnInit {
  authenticated = false;
  passwordInput = '';
  loginError = false;

  activeTab: 'reviews' | 'quiz' = 'reviews';
  loading = false;
  error = '';

  reviews: Review[] = [];
  quizEntries: QuizEntry[] = [];
  reviewFilter: string = 'all';

  get filteredReviews(): Review[] {
    if (this.reviewFilter === 'all') return this.reviews;
    return this.reviews.filter(r => (r._localStatus || r.approved) === this.reviewFilter);
  }
  get pendingCount(): number { return this.reviews.filter(r => (r._localStatus || r.approved) === 'Pending').length; }
  get approvedCount(): number { return this.reviews.filter(r => (r._localStatus || r.approved) === 'Approved').length; }
  get avgRating(): number {
    if (!this.reviews.length) return 0;
    return this.reviews.reduce((s, r) => s + r.rating, 0) / this.reviews.length;
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const saved = sessionStorage.getItem('vedrithm_admin');
    if (saved === 'true') { this.authenticated = true; this.loadData(); }
  }

  tryLogin() {
    if (this.passwordInput === ADMIN_PASSWORD) {
      this.authenticated = true;
      sessionStorage.setItem('vedrithm_admin', 'true');
      this.loginError = false;
      this.loadData();
    } else {
      this.loginError = true;
      setTimeout(() => this.loginError = false, 1000);
    }
  }

  logout() {
    sessionStorage.removeItem('vedrithm_admin');
    this.authenticated = false;
    this.passwordInput = '';
    this.reviews = [];
    this.quizEntries = [];
  }

  loadData() {
    this.loading = true;
    this.error = '';

    // Load reviews
    this.http.get<any[]>(`${GAS_URL}?action=getReviews`).subscribe({
      next: (data) => {
        this.reviews = (data || []).map((r: any) => ({
          id: r.id || '',
          date: r.date || '',
          name: r.name || '',
          rating: Number(r.rating) || 0,
          text: r.text || '',
          productUsed: r.productUsed || '',
          approved: r.approved || 'Pending',
          clientId: r.clientId || ''
        }));
        this.loading = false;
      },
      error: () => {
        this.error = 'Could not connect to Google Sheets. Check your GAS deployment URL.';
        this.loading = false;
        // Load demo data so UI is visible
        this.loadDemoData();
      }
    });

    // Load quiz (not exposed via GET yet — use demo or add to GAS)
    // To expose quiz data, add action=getQuiz to GAS doGet()
  }

  loadDemoData() {
    this.reviews = [
      { id:'1', date:'Apr 2025', name:'Anjali Mehta', rating:5, text:'My hair fall reduced dramatically after 6 weeks of using Vedrithm. The Ayurvedic fragrance is divine!', productUsed:'Bhringraj & Castor Base + Fenugreek Booster', approved:'Pending', clientId:'', _localStatus:undefined },
      { id:'2', date:'Mar 2025', name:'Rohan Desai', rating:5, text:'Dandruff is almost gone after 3 weeks. Light texture, absorbs fast — no greasy residue.', productUsed:'Neem & Cinnamon Base + Clove Purifying Booster', approved:'Approved', clientId:'', _localStatus:undefined },
      { id:'3', date:'Mar 2025', name:'Priya Sharma', rating:4, text:'Quiz result was spot on! My hair growth has visibly improved. Beautiful packaging too.', productUsed:'Amla & Sesame Base + Rosemary Growth Booster', approved:'Pending', clientId:'', _localStatus:undefined },
    ];
    this.quizEntries = [
      { id:'q1', date:'Apr 22, 2025', name:'Neha Gupta', mobile:'9876543210', hairType:'Wavy', scalpType:'Oily', concerns:'Hair Fall, Dandruff', lifestyle:'Weekly', recommendedProduct:'Neem & Cinnamon Base + Fenugreek Booster', waSent:'Yes ✅' },
      { id:'q2', date:'Apr 21, 2025', name:'Ravi Kumar', mobile:'9988776655', hairType:'Straight', scalpType:'Dry', concerns:'Greying, Dullness', lifestyle:'Twice a week', recommendedProduct:'Curry Leaf Base + Nigella Seed Booster', waSent:'Failed ❌' },
    ];
  }

  moderateReview(review: Review, status: string) {
    review._localStatus = status;
    // TODO: POST to GAS with updateReview action to persist
  }

  openWhatsApp(name: string, mobile: string, product?: string) {
    const msg = product
      ? `Hi ${name}! 🌿 Noticed you completed the Vedrithm hair quiz. Your recommended blend is *${product}*. Would you like to place an order?`
      : `Hi ${name}! 🌿 Thank you for your Vedrithm review. We'd love to know more about your experience!`;
    const num = mobile ? `91${mobile}` : '919867368847';
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank');
  }

  initials(name: string): string {
    return (name || '').split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
  }

  statusClass(r: Review): string {
    const s = r._localStatus || r.approved;
    if (s === 'Approved') return 'rac-status status-approved';
    if (s === 'Rejected') return 'rac-status status-rejected';
    return 'rac-status status-pending';
  }
}
