import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbyBD4qAumQOYFqQnfh2wgxh2AK24I4law4MFo1GlHj2rirPvlZu1Ia68kFU1Lrx3uE79w/exec';
const ADMIN_PASSWORD = 'vedrithm2025';

interface Review {
  id: string; date: string; name: string; rating: number;
  text: string; productUsed: string; status: string; clientId: string;
}
interface QuizEntry {
  id: string; date: string; name: string; mobileNumber: string;
  hairType: string; scalpType: string; concerns: string;
  lifestyle: string; recommendedProduct: string; waSent: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
  <div class="admin-root">

    <!-- ── LOGIN ── -->
    <div class="login-screen" *ngIf="!authenticated">
      <div class="login-box">
        <div class="login-brand">
          <span class="brand-leaf">🌿</span>
          <span class="brand-name">Vedrithm</span>
        </div>
        <p class="login-sub">Admin Dashboard</p>
        <input
          type="password"
          class="login-input"
          placeholder="Enter admin password"
          [(ngModel)]="passwordInput"
          (keyup.enter)="tryLogin()"
          [class.shake]="loginError"
          autofocus />
        <p class="login-err" *ngIf="loginError">Incorrect password. Try again.</p>
        <button class="login-btn" (click)="tryLogin()">Enter Dashboard</button>
      </div>
    </div>

    <!-- ── DASHBOARD ── -->
    <div class="dash" *ngIf="authenticated">

      <!-- Top bar -->
      <div class="topbar">
        <div class="topbar-left">
          <span class="tb-leaf">🌿</span>
          <span class="tb-name">Vedrithm</span>
          <span class="tb-badge">Admin</span>
        </div>
        <div class="topbar-right">
          <button class="btn-sm btn-ref" (click)="loadAll()" [disabled]="loading">
            <span [class.spin]="loading">↻</span> Refresh
          </button>
          <button class="btn-sm btn-out" (click)="logout()">Logout</button>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-val sv-gold">{{ reviews.length }}</div>
          <div class="stat-lbl">Total Reviews</div>
        </div>
        <div class="stat-card">
          <div class="stat-val sv-green">{{ approvedCount }}</div>
          <div class="stat-lbl">Approved</div>
        </div>
        <div class="stat-card">
          <div class="stat-val sv-amber">{{ pendingCount }}</div>
          <div class="stat-lbl">Pending</div>
        </div>
        <div class="stat-card">
          <div class="stat-val sv-cream">{{ quizLeads.length }}</div>
          <div class="stat-lbl">Quiz Leads</div>
        </div>
        <div class="stat-card">
          <div class="stat-val sv-gold">{{ avgRating > 0 ? avgRating.toFixed(1) + ' ★' : '—' }}</div>
          <div class="stat-lbl">Avg Rating</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="tabs-row">
        <button class="tab" [class.active]="activeTab==='reviews'" (click)="activeTab='reviews'">
          Reviews
          <span class="tab-pill" *ngIf="pendingCount">{{ pendingCount }}</span>
        </button>
        <button class="tab" [class.active]="activeTab==='quiz'" (click)="activeTab='quiz'">
          Quiz Leads
          <span class="tab-pill tp-green">{{ quizLeads.length }}</span>
        </button>
      </div>

      <!-- Loading -->
      <div class="loader-wrap" *ngIf="loading">
        <div class="spinner"></div>
        <p>Loading from Google Sheets…</p>
      </div>

      <!-- Error -->
      <div class="err-banner" *ngIf="apiError && !loading">
        ⚠️ {{ apiError }}
      </div>

      <!-- ── REVIEWS PANEL ── -->
      <div class="panel" *ngIf="activeTab==='reviews' && !loading">
        <div class="filter-bar">
          <button class="filt" [class.active]="reviewFilter==='all'"      (click)="reviewFilter='all'">All ({{ reviews.length }})</button>
          <button class="filt" [class.active]="reviewFilter==='Pending'"  (click)="reviewFilter='Pending'">Pending ({{ pendingCount }})</button>
          <button class="filt" [class.active]="reviewFilter==='Approved'" (click)="reviewFilter='Approved'">Approved ({{ approvedCount }})</button>
          <button class="filt" [class.active]="reviewFilter==='Rejected'" (click)="reviewFilter='Rejected'">Rejected</button>
        </div>

        <div class="empty" *ngIf="filteredReviews.length === 0">
          <div class="empty-ico">📭</div>
          No reviews in this category.
        </div>

        <div class="cards-list">
          <div class="r-card" *ngFor="let r of filteredReviews">
            <div class="r-card-top">
              <div class="avatar">{{ initials(r.name) }}</div>
              <div class="r-meta">
                <div class="r-name">{{ r.name }}</div>
                <div class="r-date">{{ r.date }}</div>
                <div class="r-stars">
                  <span *ngFor="let s of [1,2,3,4,5]" [class.lit]="s <= r.rating">★</span>
                </div>
              </div>
              <span class="status-pill" [ngClass]="statusClass(r.status)">{{ r.status }}</span>
            </div>
            <p class="r-text">"{{ r.text }}"</p>
            <p class="r-product">✦ {{ r.productUsed }}</p>
            <div class="r-actions">
              <button class="act-approve"
                [disabled]="r.status === 'Approved' || updatingId === r.id"
                (click)="setStatus(r, 'Approved')">
                ✓ Approve
              </button>
              <button class="act-reject"
                [disabled]="r.status === 'Rejected' || updatingId === r.id"
                (click)="setStatus(r, 'Rejected')">
                ✕ Reject
              </button>
              <span class="updating-hint" *ngIf="updatingId === r.id">Saving…</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── QUIZ PANEL ── -->
      <div class="panel" *ngIf="activeTab==='quiz' && !loading">
        <div class="empty" *ngIf="quizLeads.length === 0">
          <div class="empty-ico">📋</div>
          No quiz submissions yet.
        </div>

        <div class="cards-list" *ngIf="quizLeads.length > 0">
          <div class="q-card" *ngFor="let q of quizLeads; let i = index">
            <div class="q-card-top">
              <div class="avatar av-teal">{{ initials(q.name) }}</div>
              <div class="q-meta">
                <div class="q-name">{{ q.name }}</div>
                <div class="q-phone">+91 {{ q.mobileNumber }}</div>
                <div class="q-date">{{ q.date }}</div>
              </div>
              <span class="notif-pill" [class.sent]="q.waSent === 'Yes ✅'">
                {{ q.waSent === 'Yes ✅' ? '✅ Notified' : '⏳ Pending' }}
              </span>
            </div>
            <div class="q-chips">
              <span class="chip" *ngIf="q.hairType"><label>Hair</label>{{ q.hairType }}</span>
              <span class="chip" *ngIf="q.scalpType"><label>Scalp</label>{{ q.scalpType }}</span>
              <span class="chip" *ngIf="q.lifestyle"><label>Lifestyle</label>{{ q.lifestyle }}</span>
              <span class="chip chip-wide" *ngIf="q.concerns"><label>Concerns</label>{{ q.concerns }}</span>
            </div>
            <div class="q-product">
              <span class="q-prod-lbl">Recommended</span>
              <strong>{{ q.recommendedProduct }}</strong>
            </div>
            <div class="q-actions">
              <a class="act-wa"
                [href]="waLink(q.name, q.mobileNumber, q.recommendedProduct)"
                target="_blank">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a class="act-call" [href]="'tel:+91' + q.mobileNumber">📞 Call</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Toast -->
      <div class="toast" [class.show]="toastMsg" [class.toast-err]="toastType==='error'">
        {{ toastMsg }}
      </div>

    </div>
  </div>
  `,
  styles: [`
    /* ── FULL TAKEOVER — hides navbar/footer/whatsapp from parent ── */
    :host {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 9999;
      overflow-y: auto;
    }

    .admin-root {
      min-height: 100%;
      background: #040f09;
      font-family: 'Manrope', sans-serif;
      color: #faf4e6;
    }

    /* ── LOGIN ── */
    .login-screen {
      min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      padding: 2rem;
      background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(26,74,46,.22) 0%, transparent 70%);
    }
    .login-box {
      width: 100%; max-width: 380px;
      background: #0a2318;
      border: 1px solid rgba(212,175,55,.35);
      border-radius: 16px;
      padding: 3rem 2.5rem;
      text-align: center;
      box-shadow: 0 40px 80px rgba(0,0,0,.6);
    }
    .login-brand { display: flex; align-items: center; justify-content: center; gap: .6rem; margin-bottom: .3rem; }
    .brand-leaf  { font-size: 1.6rem; }
    .brand-name  { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2rem; color: #d4af37; letter-spacing: .06em; }
    .login-sub   { font-size: .68rem; letter-spacing: .2em; text-transform: uppercase; color: rgba(250,244,230,.4); margin-bottom: 2.5rem; }
    .login-input {
      width: 100%; padding: .85rem 1.1rem;
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(212,175,55,.22);
      border-radius: 8px;
      color: #faf4e6; font-size: .9rem; font-family: inherit;
      outline: none; text-align: center; margin-bottom: .75rem;
      transition: border-color .25s;
    }
    .login-input:focus { border-color: rgba(212,175,55,.55); }
    .login-input.shake { animation: shake .4s ease; }
    @keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-8px)} 75%{transform:translateX(8px)} }
    .login-err { color: #e05c5c; font-size: .78rem; margin-bottom: .75rem; }
    .login-btn {
      width: 100%; padding: .85rem;
      background: linear-gradient(135deg, #b8941f, #d4af37);
      border: none; border-radius: 8px;
      color: #040f09; font-size: .8rem; font-weight: 700;
      letter-spacing: .12em; text-transform: uppercase;
      cursor: pointer; transition: opacity .2s, transform .2s;
    }
    .login-btn:hover { opacity: .9; transform: translateY(-1px); }

    /* ── TOPBAR ── */
    .topbar {
      position: sticky; top: 0; z-index: 100;
      background: rgba(4,15,9,.95); backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(212,175,55,.15);
      padding: .9rem 2rem;
      display: flex; align-items: center; justify-content: space-between;
    }
    .topbar-left  { display: flex; align-items: center; gap: .6rem; }
    .tb-leaf { font-size: 1.2rem; }
    .tb-name { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; color: #d4af37; letter-spacing: .05em; }
    .tb-badge {
      font-size: .6rem; letter-spacing: .18em; text-transform: uppercase;
      color: rgba(250,244,230,.4); border: 1px solid rgba(212,175,55,.18);
      border-radius: 50px; padding: .15rem .5rem;
    }
    .topbar-right { display: flex; gap: .75rem; }
    .btn-sm {
      padding: .42rem .9rem; border-radius: 6px;
      font-size: .68rem; font-weight: 600; letter-spacing: .1em; text-transform: uppercase;
      cursor: pointer; transition: all .2s;
    }
    .btn-ref { background: rgba(212,175,55,.1); border: 1px solid rgba(212,175,55,.22); color: #d4af37; }
    .btn-ref:hover { background: rgba(212,175,55,.18); }
    .btn-ref:disabled { opacity: .5; cursor: default; }
    .btn-out { background: rgba(224,92,92,.1); border: 1px solid rgba(224,92,92,.25); color: #e05c5c; }
    .btn-out:hover { background: rgba(224,92,92,.2); }
    .spin { display:inline-block; animation: sp .8s linear infinite; }
    @keyframes sp { to { transform: rotate(360deg); } }

    /* ── STATS ── */
    .stats-grid {
      display: grid; grid-template-columns: repeat(5,1fr); gap: 1rem;
      max-width: 1140px; margin: 1.75rem auto 0; padding: 0 1.5rem;
    }
    .stat-card {
      background: #0a2318; border: 1px solid rgba(212,175,55,.16);
      border-radius: 12px; padding: 1.35rem 1rem; text-align: center;
      transition: border-color .25s;
    }
    .stat-card:hover { border-color: rgba(212,175,55,.35); }
    .stat-val { font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; font-weight: 300; line-height: 1; margin-bottom: .35rem; }
    .sv-gold  { color: #d4af37; }
    .sv-green { color: #34c27a; }
    .sv-amber { color: #e8a83a; }
    .sv-cream { color: #faf4e6; }
    .stat-lbl { font-size: .61rem; letter-spacing: .18em; text-transform: uppercase; color: rgba(250,244,230,.38); }

    /* ── TABS ── */
    .tabs-row {
      display: flex; border-bottom: 1px solid rgba(212,175,55,.15);
      max-width: 1140px; margin: 1.75rem auto 0; padding: 0 1.5rem;
    }
    .tab {
      padding: .75rem 1.6rem; background: none; border: none;
      border-bottom: 2px solid transparent; margin-bottom: -1px;
      font-size: .7rem; letter-spacing: .15em; text-transform: uppercase;
      color: rgba(250,244,230,.45); cursor: pointer; transition: all .2s;
      display: flex; align-items: center; gap: .45rem;
    }
    .tab.active { color: #d4af37; border-bottom-color: #d4af37; }
    .tab:hover  { color: #faf4e6; }
    .tab-pill {
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 18px; height: 18px; border-radius: 50px; padding: 0 4px;
      background: rgba(232,168,58,.15); color: #e8a83a;
      font-size: .62rem; font-weight: 700;
    }
    .tp-green { background: rgba(52,194,122,.15); color: #34c27a; }

    /* ── PANEL ── */
    .panel { max-width: 1140px; margin: 1.5rem auto 3rem; padding: 0 1.5rem; }

    /* ── LOADER ── */
    .loader-wrap { text-align: center; padding: 4rem 2rem; color: rgba(250,244,230,.4); font-size: .82rem; }
    .spinner {
      width: 36px; height: 36px;
      border: 2px solid rgba(212,175,55,.2); border-top-color: #d4af37;
      border-radius: 50%; animation: sp .85s linear infinite;
      margin: 0 auto 1rem;
    }

    /* ── ERROR ── */
    .err-banner {
      max-width: 1140px; margin: 1.25rem auto; padding: 1rem 1.5rem;
      background: rgba(224,92,92,.07); border: 1px solid rgba(224,92,92,.28);
      border-radius: 8px; color: #e05c5c; font-size: .82rem;
    }

    /* ── FILTER BAR ── */
    .filter-bar { display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
    .filt {
      padding: .35rem .85rem; border-radius: 50px;
      font-size: .67rem; letter-spacing: .1em; text-transform: uppercase;
      background: none; border: 1px solid rgba(212,175,55,.18);
      color: rgba(250,244,230,.45); cursor: pointer; transition: all .2s;
    }
    .filt.active, .filt:hover { border-color: rgba(212,175,55,.45); color: #d4af37; background: rgba(212,175,55,.07); }

    /* ── EMPTY ── */
    .empty { text-align: center; padding: 4rem 2rem; color: rgba(250,244,230,.35); font-size: .85rem; }
    .empty-ico { font-size: 2.2rem; margin-bottom: .75rem; opacity: .5; }

    /* ── CARDS LIST ── */
    .cards-list { display: flex; flex-direction: column; gap: .85rem; }

    /* ── REVIEW CARD ── */
    .r-card {
      background: #0a2318; border: 1px solid rgba(212,175,55,.15);
      border-radius: 12px; padding: 1.4rem 1.5rem;
      animation: fadeUp .3s ease both;
      transition: border-color .25s;
    }
    .r-card:hover { border-color: rgba(212,175,55,.32); }
    @keyframes fadeUp { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
    .r-card-top { display: flex; align-items: flex-start; gap: .9rem; margin-bottom: .85rem; }
    .avatar {
      width: 42px; height: 42px; border-radius: 50%; flex-shrink: 0;
      background: linear-gradient(135deg, #0f3020, #1a4a2e);
      border: 1px solid rgba(212,175,55,.22);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: #d4af37;
    }
    .av-teal { background: linear-gradient(135deg, #0f3020, #0f4a40); }
    .r-meta  { flex: 1; }
    .r-name  { font-size: .9rem; font-weight: 600; color: #faf4e6; }
    .r-date  { font-size: .68rem; color: rgba(250,244,230,.38); margin-top: .1rem; }
    .r-stars span { color: rgba(212,175,55,.2); font-size: .85rem; }
    .r-stars span.lit { color: #d4af37; }
    .r-text    { font-size: .82rem; color: rgba(250,244,230,.7); font-style: italic; line-height: 1.75; margin-bottom: .6rem; }
    .r-product { font-size: .7rem; color: rgba(212,175,55,.55); margin-bottom: 1rem; }

    /* ── STATUS PILLS ── */
    .status-pill {
      flex-shrink: 0; padding: .28rem .75rem; border-radius: 50px;
      font-size: .62rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    }
    .sp-pending  { background: rgba(232,168,58,.1);  color: #e8a83a; border: 1px solid rgba(232,168,58,.28); }
    .sp-approved { background: rgba(52,194,122,.1);  color: #34c27a; border: 1px solid rgba(52,194,122,.28); }
    .sp-rejected { background: rgba(224,92,92,.1);   color: #e05c5c; border: 1px solid rgba(224,92,92,.28); }

    /* ── ACTION BUTTONS ── */
    .r-actions { display: flex; gap: .5rem; align-items: center; flex-wrap: wrap; }
    .act-approve, .act-reject, .act-wa, .act-call {
      padding: .38rem .9rem; border-radius: 6px;
      font-size: .65rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
      cursor: pointer; transition: all .2s; border: none; text-decoration: none;
      display: inline-flex; align-items: center; gap: .3rem;
    }
    .act-approve { background: rgba(52,194,122,.12); color: #34c27a; border: 1px solid rgba(52,194,122,.28); }
    .act-approve:hover:not(:disabled) { background: rgba(52,194,122,.25); }
    .act-approve:disabled { opacity: .35; cursor: default; }
    .act-reject  { background: rgba(224,92,92,.1);  color: #e05c5c; border: 1px solid rgba(224,92,92,.25); }
    .act-reject:hover:not(:disabled) { background: rgba(224,92,92,.22); }
    .act-reject:disabled { opacity: .35; cursor: default; }
    .act-wa   { background: rgba(37,211,102,.1); color: #25d366; border: 1px solid rgba(37,211,102,.25); }
    .act-wa:hover { background: rgba(37,211,102,.2); }
    .act-call { background: rgba(94,234,212,.1); color: #5eead4; border: 1px solid rgba(94,234,212,.25); }
    .act-call:hover { background: rgba(94,234,212,.2); }
    .updating-hint { font-size: .68rem; color: rgba(250,244,230,.4); font-style: italic; }

    /* ── QUIZ CARD ── */
    .q-card {
      background: #0a2318; border: 1px solid rgba(212,175,55,.15);
      border-radius: 12px; padding: 1.4rem 1.5rem;
      animation: fadeUp .3s ease both;
      transition: border-color .25s;
    }
    .q-card:hover { border-color: rgba(212,175,55,.32); }
    .q-card-top { display: flex; align-items: flex-start; gap: .9rem; margin-bottom: 1rem; }
    .q-meta  { flex: 1; }
    .q-name  { font-size: .92rem; font-weight: 600; color: #faf4e6; }
    .q-phone { font-size: .78rem; color: #d4af37; font-family: monospace; margin-top: .1rem; }
    .q-date  { font-size: .67rem; color: rgba(250,244,230,.35); }
    .notif-pill {
      flex-shrink: 0; padding: .28rem .75rem; border-radius: 50px;
      font-size: .62rem; font-weight: 700; letter-spacing: .08em;
      background: rgba(232,168,58,.1); color: #e8a83a; border: 1px solid rgba(232,168,58,.25);
    }
    .notif-pill.sent { background: rgba(52,194,122,.1); color: #34c27a; border-color: rgba(52,194,122,.28); }
    .q-chips { display: flex; flex-wrap: wrap; gap: .45rem; margin-bottom: 1rem; }
    .chip {
      background: rgba(212,175,55,.05); border: 1px solid rgba(212,175,55,.14);
      border-radius: 6px; padding: .4rem .7rem;
      font-size: .76rem; color: rgba(250,244,230,.7);
      display: flex; flex-direction: column; gap: .1rem;
    }
    .chip-wide { flex: 1 0 100%; }
    .chip label { font-size: .58rem; color: #d4af37; letter-spacing: .12em; text-transform: uppercase; }
    .q-product {
      background: rgba(212,175,55,.05); border: 1px solid rgba(212,175,55,.14);
      border-radius: 8px; padding: .75rem 1rem;
      font-size: .83rem; color: rgba(250,244,230,.8);
      margin-bottom: 1rem; display: flex; flex-direction: column; gap: .2rem;
    }
    .q-prod-lbl { font-size: .6rem; color: #d4af37; letter-spacing: .14em; text-transform: uppercase; }
    .q-actions { display: flex; gap: .5rem; }

    /* ── TOAST ── */
    .toast {
      position: fixed; bottom: 2rem; right: 2rem; z-index: 9999;
      padding: .8rem 1.3rem; border-radius: 10px;
      background: #0a2318; border: 1px solid rgba(52,194,122,.4); color: #34c27a;
      font-size: .78rem; font-weight: 500;
      transform: translateY(70px); opacity: 0;
      transition: all .3s cubic-bezier(.34,1.56,.64,1);
      pointer-events: none;
    }
    .toast.show { transform: none; opacity: 1; }
    .toast.toast-err { border-color: rgba(224,92,92,.45); color: #e05c5c; }

    /* ── RESPONSIVE ── */
    @media (max-width: 860px) {
      .stats-grid { grid-template-columns: repeat(3,1fr); }
    }
    @media (max-width: 560px) {
      .stats-grid { grid-template-columns: repeat(2,1fr); }
      .topbar { padding: .75rem 1rem; }
      .panel  { padding: 0 1rem; }
    }
  `]
})
export class AdminComponent implements OnInit {
  authenticated = false;
  passwordInput = '';
  loginError = false;

  activeTab: 'reviews' | 'quiz' = 'reviews';
  loading = false;
  apiError = '';

  reviews:   Review[]    = [];
  quizLeads: QuizEntry[] = [];
  reviewFilter = 'all';
  updatingId = '';

  toastMsg  = '';
  toastType = 'success';
  private toastTimer: any;

  get filteredReviews(): Review[] {
    return this.reviewFilter === 'all'
      ? this.reviews
      : this.reviews.filter(r => r.status === this.reviewFilter);
  }
  get pendingCount():  number { return this.reviews.filter(r => r.status === 'Pending').length; }
  get approvedCount(): number { return this.reviews.filter(r => r.status === 'Approved').length; }
  get avgRating(): number {
    if (!this.reviews.length) return 0;
    return this.reviews.reduce((s, r) => s + r.rating, 0) / this.reviews.length;
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (sessionStorage.getItem('vedrithm_admin') === 'true') {
      this.authenticated = true;
      this.loadAll();
    }
  }

  tryLogin() {
    if (this.passwordInput === ADMIN_PASSWORD) {
      this.authenticated = true;
      sessionStorage.setItem('vedrithm_admin', 'true');
      this.loginError = false;
      this.loadAll();
    } else {
      this.loginError = true;
      setTimeout(() => this.loginError = false, 900);
    }
  }

  logout() {
    sessionStorage.removeItem('vedrithm_admin');
    this.authenticated = false;
    this.passwordInput = '';
    this.reviews = [];
    this.quizLeads = [];
  }

  loadAll() {
    this.loading = true;
    this.apiError = '';
    let done = 0;
    const finish = () => { if (++done === 2) this.loading = false; };

    // ── Reviews ──
    this.http.get<any[]>(`${GAS_URL}?action=getAllReviews&t=${Date.now()}`).subscribe({
      next: data => {
        this.reviews = (data || []).map((r: any) => ({
          id: String(r.id || ''),
          date: String(r.date || ''),
          name: String(r.name || ''),
          rating: Number(r.rating) || 0,
          text: String(r.text || ''),
          productUsed: String(r.productUsed || ''),
          status: String(r.status || r.approved || 'Pending'),
          clientId: String(r.clientId || '')
        }));
        finish();
      },
      error: () => {
        this.apiError = 'Could not load reviews. Check your GAS deployment URL.';
        finish();
      }
    });

    // ── Quiz leads ──
    this.http.get<any[]>(`${GAS_URL}?action=getQuizLeads&t=${Date.now()}`).subscribe({
      next: data => {
        this.quizLeads = (data || []).map((q: any) => ({
          id: String(q.id || ''),
          date: String(q.date || ''),
          name: String(q.name || ''),
          mobileNumber: String(q.mobileNumber || q.mobile || ''),
          hairType: String(q.hairType || ''),
          scalpType: String(q.scalpType || ''),
          concerns: String(q.concerns || ''),
          lifestyle: String(q.lifestyle || ''),
          recommendedProduct: String(q.recommendedProduct || ''),
          waSent: String(q.waSent || '')
        }));
        finish();
      },
      error: () => { finish(); }
    });
  }

  setStatus(review: Review, status: string) {
    if (this.updatingId) return;
    this.updatingId = review.id;

    this.http.post<any>(GAS_URL, JSON.stringify({
      action: 'updateReviewStatus',
      id: review.id,
      status
    }), { headers: { 'Content-Type': 'text/plain' } }).subscribe({
      next: res => {
        this.updatingId = '';
        if (res?.success) {
          review.status = status;
          this.showToast(`Review ${status.toLowerCase()} ✓`, 'success');
        } else {
          this.showToast(res?.error || 'Update failed', 'error');
        }
      },
      error: () => {
        this.updatingId = '';
        this.showToast('Network error — check GAS URL', 'error');
      }
    });
  }

  waLink(name: string, mobile: string, product: string): string {
    const msg = `Hi ${name}! 🌿 Your recommended Vedrithm blend is *${product}*. Would you like to place an order?`;
    return `https://wa.me/91${mobile}?text=${encodeURIComponent(msg)}`;
  }

  initials(name: string): string {
    return (name || '?').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  statusClass(status: string): string {
    if (status === 'Approved') return 'status-pill sp-approved';
    if (status === 'Rejected') return 'status-pill sp-rejected';
    return 'status-pill sp-pending';
  }

  showToast(msg: string, type: 'success' | 'error') {
    this.toastMsg = msg;
    this.toastType = type;
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toastMsg = '', 3000);
  }
}
