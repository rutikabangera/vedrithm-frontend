import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizService, QuizRequest, QuizResponse } from '../../services/quiz.service';

const WHATSAPP_NUMBER = '919867368847'; // ← Update with your number

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="quiz-hero">
      <div class="quiz-hero-bg"></div>
      <div class="container">
        <span class="section-tag">Personalised for You</span>
        <h1 class="page-title">Your <span>Hair Quiz</span></h1>
        <p class="page-subtitle">Answer a few simple questions and we'll blend the perfect Vedrithm formulation for your unique hair needs.</p>
      </div>
    </section>

    <section class="quiz-section">
      <div class="container">
        <div class="quiz-wrapper">

          <!-- Progress -->
          <div class="step-indicators" *ngIf="!submitted && !result">
            <div class="step-track">
              <div class="step-fill" [style.width]="progressPct + '%'"></div>
            </div>
            <div class="step-dots">
              <div class="step-dot"
                   *ngFor="let s of allStepIds; let i = index"
                   [class.done]="currentStep > i"
                   [class.active]="currentStep === i">
                <span>{{ i + 1 }}</span>
              </div>
            </div>
            <p class="step-label">Step {{ currentStep + 1 }} of {{ allStepIds.length }}</p>
          </div>

          <!-- Step 0: Name + Mobile -->
          <div class="quiz-step" *ngIf="currentStep === 0 && !submitted && !result">
            <div class="step-content name-step">
              <div class="step-icon">🌿</div>
              <h2 class="step-question">Welcome to your hair journey</h2>
              <p class="step-subtitle">Let's start with a few quick details so we can personalise your recommendation.</p>
              <div class="name-fields">
                <div class="field-group">
                  <label>Your Name</label>
                  <input type="text" class="name-input" placeholder="e.g. Priya Sharma"
                         [(ngModel)]="answers['name']" (keyup.enter)="tryNext()" />
                </div>
                <div class="field-group">
                  <label>Mobile Number</label>
                  <div class="phone-input-wrap">
                    <span class="phone-prefix">+91</span>
                    <input type="tel" class="name-input phone-input"
                           placeholder="10-digit mobile number"
                           [(ngModel)]="answers['mobileNumber']"
                           maxlength="10"
                           (keyup.enter)="tryNext()" />
                  </div>
                  <span class="field-hint" *ngIf="mobileError">{{ mobileError }}</span>
                  <span class="field-note">We'll only use your number to assist with your order — no spam, ever.</span>
                </div>
              </div>
              <button class="btn-primary" (click)="tryNext()"
                [disabled]="!answers['name'].trim() || answers['mobileNumber'].length !== 10">
                Begin the Quiz
              </button>
            </div>
          </div>

          <!-- Steps 1–3: Single-select questions (hair type, scalp, lifestyle) -->
          <div class="quiz-step" *ngIf="currentStep > 0 && currentStep <= singleSteps.length && !submitted && !result">
            <div class="step-content">
              <div class="step-greeting" *ngIf="currentStep === 1">Hi {{ answers['name'] }} 👋</div>
              <h2 class="step-question">{{ currentSingleStep?.question }}</h2>
              <p class="step-subtitle">{{ currentSingleStep?.subtitle }}</p>
              <div class="options-grid">
                <button class="option-btn"
                        *ngFor="let opt of currentSingleStep?.options"
                        [class.selected]="answers[currentSingleStep!.id] === opt.value"
                        (click)="setAnswer(currentSingleStep!.id, opt.value); tryNext()">
                  <span class="opt-emoji">{{ opt.emoji }}</span>
                  <span class="opt-label">{{ opt.label }}</span>
                  <span class="opt-check" *ngIf="answers[currentSingleStep!.id] === opt.value">✓</span>
                </button>
              </div>
              <div class="step-nav">
                <button class="btn-outline" (click)="goBack()">← Back</button>
              </div>
            </div>
          </div>

          <!-- Concerns Step: Multi-select -->
          <div class="quiz-step" *ngIf="currentStep === concernStepIndex && !submitted && !result">
            <div class="step-content">
              <h2 class="step-question">What are your hair concerns?</h2>
              <p class="step-subtitle">Select <strong>all that apply</strong> — we'll blend your oil to address every concern.</p>
              <div class="options-grid concerns-grid">
                <button class="option-btn multi-btn"
                        *ngFor="let opt of concernOptions"
                        [class.selected]="isConcernSelected(opt.value)"
                        [class.none-btn]="opt.value === 'healthy_hair'"
                        (click)="toggleConcern(opt.value)">
                  <span class="opt-emoji">{{ opt.emoji }}</span>
                  <span class="opt-label">{{ opt.label }}</span>
                  <span class="opt-check" *ngIf="isConcernSelected(opt.value)">✓</span>
                </button>
              </div>
              <div class="selected-concerns" *ngIf="selectedConcerns.length > 0 && !hasNoConcern">
                <span class="concerns-tag" *ngFor="let c of selectedConcerns">
                  {{ getConcernLabel(c) }} <span class="tag-remove" (click)="removeConcern(c)">×</span>
                </span>
              </div>
              <div class="step-nav">
                <button class="btn-outline" (click)="goBack()">← Back</button>
                <div style="flex:1"></div>
                <button class="btn-primary" (click)="tryNext()"
                        [disabled]="selectedConcerns.length === 0">
                  Get My Blend
                  <svg width="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Loading -->
          <div class="quiz-step loading-step" *ngIf="submitted && !result && !error">
            <div class="loading-inner">
              <div class="loading-leaves">
                <span class="ll">🌿</span><span class="ll">🍃</span><span class="ll">🌿</span>
              </div>
              <p class="loading-text">Crafting your personalised blend...</p>
              <div class="loading-dots"><span></span><span></span><span></span></div>
            </div>
          </div>

          <!-- Error -->
          <div class="quiz-step error-step" *ngIf="error">
            <div class="step-content" style="text-align:center">
              <div class="step-icon">⚠️</div>
              <h2 class="step-question">Something went wrong</h2>
              <p class="step-subtitle">{{ error }}</p>
              <button class="btn-primary" (click)="reset()">Try Again</button>
            </div>
          </div>

          <!-- Result -->
          <div class="quiz-result" *ngIf="result && !error">
            <div class="result-header">
              <span class="result-eyebrow">Your Personalised Blend ✦</span>
              <h2 class="result-title">{{ result.productName }}</h2>
              <p class="result-tagline">{{ result.tagline }}</p>
            </div>

            <!-- Concerns addressed badges -->
            <div class="result-concerns" *ngIf="selectedConcerns.length > 1">
              <span class="concern-badge" *ngFor="let c of selectedConcerns">
                {{ getConcernEmoji(c) }} {{ getConcernLabel(c) }}
              </span>
            </div>

           <div class="result-body">
  <div class="result-rec">
    <h3>Why This Blend?</h3>
    <p>{{ result.recommendation }}</p>
  </div>

  <div class="result-usage">
    <div class="usage-icon">💡</div>
    <div>
      <strong>Usage Tip</strong>
      <p>{{ result.usageTip }}</p>
    </div>
  </div>
</div>

<!-- ✅ Separate block -->
<div class="result-usage">
  <div class="usage-icon">💡</div>
  <div>
    <strong>Please Note</strong>
    <p>
      This blend is designed to support healthier hair and scalp over time — but consistency is key. Natural care works gradually, so visible improvements typically take 2–3 months of regular use. Pairing it with a balanced diet and healthy lifestyle will give you the best results.
      <br><br>
      If your concerns are severe or persistent, it’s always a good idea to consult a professional. If you have known sensitivities, are pregnant, or undergoing medical treatment, we recommend checking with your doctor before use.
    </p>
  </div>
</div>
            

            <!-- CTA -->
            <div class="result-cta">
              <p class="cta-intro">Interested in ordering? Tap below — we'll send you all the details on WhatsApp.</p>
              <a [href]="buildWhatsappLink()" target="_blank" class="whatsapp-order-btn">
                <svg viewBox="0 0 24 24" fill="white" width="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order on WhatsApp
              </a>
              <button class="btn-outline reset-btn" (click)="reset()">Retake Quiz</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .field-note { display:block; margin-top:0.4rem; font-size:0.7rem; color:rgba(250,244,230,0.45); line-height:1.4; }
    .quiz-hero { min-height:38vh; display:flex; align-items:center; padding:8rem 0 4rem; position:relative; text-align:center; overflow:hidden; }
    .quiz-hero-bg { position:absolute; inset:0; background:radial-gradient(ellipse 60% 60% at 50% 50%,rgba(26,74,46,0.25) 0%,transparent 70%); }
    .quiz-hero .container { position:relative; z-index:1; }
    .page-title { font-family:var(--font-display); font-size:clamp(2.5rem,5vw,4.5rem); font-weight:300; color:var(--cream); margin:0.5rem 0 1.25rem; }
    .page-title span { color:var(--gold); font-style:italic; }
    .page-subtitle { max-width:560px; margin:0 auto; font-size:1rem; color:rgba(250,244,230,0.65); line-height:1.8; }
    .quiz-section { padding:4rem 0 8rem; }
    .quiz-wrapper { max-width:700px; margin:0 auto; }
    .step-indicators { margin-bottom:3rem; }
    .step-track { width:100%; height:2px; background:var(--forest-accent); border-radius:1px; margin-bottom:1.25rem; overflow:hidden; }
    .step-fill { height:100%; background:linear-gradient(90deg,var(--gold-dark),var(--gold)); border-radius:1px; transition:width 0.5s ease; }
    .step-dots { display:flex; gap:1rem; justify-content:center; margin-bottom:0.75rem; }
    .step-dot { width:32px; height:32px; border-radius:50%; border:1px solid var(--border-gold); display:flex; align-items:center; justify-content:center; font-size:0.75rem; color:rgba(250,244,230,0.3); transition:all 0.4s ease; }
    .step-dot.done { background:var(--forest-accent); border-color:var(--gold); color:var(--gold); }
    .step-dot.active { background:var(--gold); border-color:var(--gold); color:var(--deep-forest); font-weight:700; box-shadow:0 0 15px rgba(212,175,55,0.4); }
    .step-label { text-align:center; font-size:0.75rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--text-muted); }
    .quiz-step { background:var(--forest-mid); border:1px solid var(--border-gold); border-radius:8px; padding:3rem; animation:fadeInUp 0.5s ease; }
    .step-greeting { font-size:0.8rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold); margin-bottom:0.75rem; }
    .step-icon { font-size:3rem; margin-bottom:1.25rem; text-align:center; }
    .step-question { font-family:var(--font-display); font-size:clamp(1.5rem,3vw,2.2rem); font-weight:400; color:var(--cream); margin-bottom:0.6rem; line-height:1.3; }
    .step-subtitle { font-size:0.88rem; color:rgba(250,244,230,0.6); margin-bottom:2rem; line-height:1.7; }
    .step-subtitle strong { color:var(--gold); }
    .name-step { text-align:center; }
    .name-fields { display:flex; flex-direction:column; gap:1.25rem; margin-bottom:2rem; text-align:left; }
    .field-group label { display:block; font-size:0.72rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold); margin-bottom:0.5rem; opacity:0.8; }
    .name-input { width:100%; background:var(--forest-light); border:1px solid var(--border-gold-strong); border-radius:4px; padding:0.9rem 1.25rem; font-family:var(--font-body); font-size:1rem; color:var(--cream); outline:none; transition:border-color 0.3s ease; box-sizing:border-box; }
    .name-input::placeholder { color:rgba(250,244,230,0.3); }
    .name-input:focus { border-color:var(--gold); }
    .phone-input-wrap { display:flex; align-items:center; background:var(--forest-light); border:1px solid var(--border-gold-strong); border-radius:4px; overflow:hidden; }
    .phone-input-wrap:focus-within { border-color:var(--gold); }
    .phone-prefix { padding:0.9rem 1rem; font-size:1rem; color:var(--gold); background:rgba(212,175,55,0.08); border-right:1px solid var(--border-gold); white-space:nowrap; }
    .phone-input { border:none !important; border-radius:0 !important; flex:1; }
    .field-hint { display:block; font-size:0.75rem; color:#e05c5c; margin-top:0.4rem; }
    .options-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.9rem; margin-bottom:2.5rem; }
    .concerns-grid { grid-template-columns:1fr 1fr; }
    .option-btn { display:flex; align-items:center; gap:0.75rem; padding:1rem 1.25rem; background:var(--forest-light); border:1px solid var(--border-gold); border-radius:4px; color:rgba(250,244,230,0.8); font-family:var(--font-body); font-size:0.88rem; cursor:pointer; transition:all 0.3s ease; text-align:left; position:relative; }
    .option-btn:hover { border-color:rgba(212,175,55,0.5); background:var(--forest-accent); color:var(--cream); }
    .option-btn.selected { border-color:var(--gold); background:rgba(212,175,55,0.12); color:var(--cream); box-shadow:0 0 15px rgba(212,175,55,0.15); }
    .multi-btn { user-select:none; }
    .none-btn.selected { border-color:rgba(250,244,230,0.3); background:rgba(250,244,230,0.05); }
    .opt-emoji { font-size:1.4rem; flex-shrink:0; }
    .opt-label { flex:1; line-height:1.4; }
    .opt-check { position:absolute; top:0.5rem; right:0.75rem; color:var(--gold); font-size:0.9rem; font-weight:700; }
    .selected-concerns { display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.5rem; }
    .concerns-tag { display:inline-flex; align-items:center; gap:0.4rem; padding:0.35rem 0.75rem; background:rgba(212,175,55,0.12); border:1px solid var(--gold); border-radius:20px; font-size:0.75rem; color:var(--gold); }
    .tag-remove { cursor:pointer; opacity:0.7; font-size:0.9rem; line-height:1; }
    .tag-remove:hover { opacity:1; }
    .step-nav { display:flex; align-items:center; gap:1rem; }
    .loading-step { text-align:center; }
    .loading-inner { padding:3rem 0; }
    .loading-leaves { display:flex; justify-content:center; gap:0.5rem; font-size:2rem; margin-bottom:1.5rem; }
    .ll { animation:float 1.2s ease-in-out infinite; }
    .ll:nth-child(2) { animation-delay:0.2s; } .ll:nth-child(3) { animation-delay:0.4s; }
    .loading-text { font-family:var(--font-display); font-size:1.3rem; font-style:italic; color:var(--gold); margin-bottom:1.5rem; }
    .loading-dots { display:flex; justify-content:center; gap:6px; }
    .loading-dots span { width:8px; height:8px; border-radius:50%; background:var(--gold); animation:dotBounce 1.2s ease-in-out infinite; }
    .loading-dots span:nth-child(2) { animation-delay:0.2s; } .loading-dots span:nth-child(3) { animation-delay:0.4s; }
    @keyframes dotBounce { 0%,80%,100% { transform:scale(0.6); opacity:0.4; } 40% { transform:scale(1); opacity:1; } }
    .quiz-result { background:var(--forest-mid); border:1px solid var(--border-gold); border-radius:8px; overflow:hidden; animation:fadeInUp 0.6s ease; }
    .result-header { background:linear-gradient(135deg,var(--forest-accent),var(--forest-light)); border-bottom:1px solid var(--border-gold); padding:2.5rem; text-align:center; }
    .result-eyebrow { font-size:0.7rem; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); opacity:0.8; display:block; margin-bottom:0.75rem; }
    .result-title { font-family:var(--font-display); font-size:clamp(1.4rem,3vw,2rem); color:var(--gold); margin-bottom:0.5rem; line-height:1.35; }
    .result-tagline { font-family:var(--font-display); font-style:italic; font-size:1.1rem; color:rgba(250,244,230,0.7); }
    .result-concerns { display:flex; flex-wrap:wrap; gap:0.5rem; padding:1.25rem 2.5rem 0; justify-content:center; }
    .concern-badge { padding:0.3rem 0.8rem; background:rgba(212,175,55,0.08); border:1px solid var(--border-gold); border-radius:20px; font-size:0.75rem; color:rgba(250,244,230,0.7); }
    .result-body { padding:2.5rem; }
    .result-rec h3 { font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:0.75rem; }
    .result-rec p { font-size:0.92rem; color:rgba(250,244,230,0.75); line-height:1.85; margin-bottom:2rem; }
    .result-usage { display:flex; gap:1rem; padding:1.25rem; background:rgba(212,175,55,0.05); border:1px solid var(--border-gold); border-radius:4px; }
    .usage-icon { font-size:1.5rem; flex-shrink:0; }
    .result-usage strong { display:block; font-family:var(--font-display); font-size:1rem; color:var(--gold); margin-bottom:0.3rem; }
    .result-usage p { font-size:0.85rem; color:rgba(250,244,230,0.7); line-height:1.7; margin:0; }
    .result-cta { padding:2rem 2.5rem; border-top:1px solid var(--border-gold); text-align:center; background:var(--forest-light); }
    .cta-intro { font-size:0.88rem; color:rgba(250,244,230,0.6); margin-bottom:1.25rem; }
    .whatsapp-order-btn { display:inline-flex; align-items:center; gap:0.75rem; padding:1rem 2.25rem; background:#25d366; color:white; font-family:var(--font-body); font-size:0.9rem; font-weight:700; border-radius:4px; transition:all 0.3s ease; margin-bottom:1rem; text-decoration:none; }
    .whatsapp-order-btn:hover { background:#1da851; transform:translateY(-2px); box-shadow:0 6px 20px rgba(37,211,102,0.35); }
    .reset-btn { margin-left:1rem; }
    @media (max-width:600px) { .quiz-step { padding:1.75rem; } .options-grid, .concerns-grid { grid-template-columns:1fr; } .reset-btn { margin-left:0; margin-top:0.75rem; } }
  `]
})
export class QuizComponent {
  currentStep = 0;
  submitted = false;
  result: QuizResponse | null = null;
  error: string | null = null;
  mobileError: string | null = null;

  // Multi-select concerns
  selectedConcerns: string[] = [];

  answers: { [key: string]: string } = {
    name: '', mobileNumber: '', hairType: '', scalpType: '', lifestyle: ''
  };

  // Single-select steps (hair type, scalp, lifestyle)
  singleSteps = [
    {
      id: 'hairType',
      question: 'What is your hair type?',
      subtitle: 'Choose the option that best describes your natural hair texture.',
      options: [
        { label: 'Straight & Fine', value: 'straight_fine', emoji: '➰' },
        { label: 'Straight & Thick', value: 'straight_thick', emoji: '〰️' },
        { label: 'Wavy', value: 'wavy', emoji: '〰' },
        { label: 'Curly', value: 'curly', emoji: '🌀' }
      ]
    },
    {
      id: 'scalpType',
      question: 'How would you describe your scalp?',
      subtitle: 'Your scalp condition is key to finding the right formula.',
      options: [
        { label: 'Oily Scalp', value: 'oily', emoji: '💧' },
        { label: 'Dry & Itchy', value: 'dry', emoji: '🌵' },
        { label: 'Balanced / Normal', value: 'normal', emoji: '✅' },
        { label: 'Dandruff-prone', value: 'dandruff', emoji: '❄️' }
      ]
    },
    {
      id: 'lifestyle',
      question: 'How often do you currently oil your hair?',
      subtitle: 'This helps us recommend the right usage frequency.',
      options: [
        { label: 'Rarely / Never', value: 'rarely', emoji: '😬' },
        { label: 'Once a week', value: 'weekly', emoji: '📅' },
        { label: 'Twice a week', value: 'twice_weekly', emoji: '✌️' },
        { label: 'Daily', value: 'daily', emoji: '🌟' }
      ]
    }
  ];

  // Multi-select concern options
  concernOptions = [
    { label: 'Hair Fall', value: 'hair_fall', emoji: '🍂' },
    { label: 'Slow Growth', value: 'slow_growth', emoji: '🌱' },
    { label: 'Frizz & Dryness', value: 'frizz', emoji: '⚡' },
    { label: 'Premature Greying', value: 'greying', emoji: '⬜' },
    { label: 'Dandruff', value: 'dandruff', emoji: '❄️' },
    { label: 'Dull & Lifeless Hair', value: 'dull', emoji: '🌫️' },
    { label: 'Damaged / Brittle Hair', value: 'damaged', emoji: '💔' },
    { label: 'No Concern — Just Nourishment', value: 'healthy_hair', emoji: '😌' }
  ];

  // The concerns step appears after all single steps
  get concernStepIndex(): number { return this.singleSteps.length + 1; }
  get allStepIds(): string[] { return ['intro', ...this.singleSteps.map(s => s.id), 'concerns']; }
  get progressPct(): number { return ((this.currentStep + 1) / this.allStepIds.length) * 100; }
  get currentSingleStep() { return this.currentStep > 0 && this.currentStep <= this.singleSteps.length ? this.singleSteps[this.currentStep - 1] : null; }
  get hasNoConcern(): boolean { return this.selectedConcerns.includes('healthy_hair'); }

  constructor(private quizService: QuizService) { }

  setAnswer(key: string, value: string) { this.answers[key] = value; }

  toggleConcern(value: string) {
    if (value === 'healthy_hair') {
      // "No concern" is exclusive
      this.selectedConcerns = this.selectedConcerns.includes('healthy_hair') ? [] : ['healthy_hair'];
      return;
    }
    // Remove "No concern" if a real concern is selected
    this.selectedConcerns = this.selectedConcerns.filter(c => c !== 'healthy_hair');
    const idx = this.selectedConcerns.indexOf(value);
    if (idx > -1) {
      this.selectedConcerns.splice(idx, 1);
    } else {
      this.selectedConcerns.push(value);
    }
  }

  isConcernSelected(value: string): boolean {
    return this.selectedConcerns.includes(value);
  }

  removeConcern(value: string) {
    this.selectedConcerns = this.selectedConcerns.filter(c => c !== value);
  }

  getConcernLabel(value: string): string {
    return this.concernOptions.find(o => o.value === value)?.label || value;
  }

  getConcernEmoji(value: string): string {
    return this.concernOptions.find(o => o.value === value)?.emoji || '';
  }

  tryNext() {
    if (this.currentStep === 0) {
      this.mobileError = null;
      if (!this.answers['name'].trim()) return;
      if (!/^[6-9]\d{9}$/.test(this.answers['mobileNumber'])) {
        this.mobileError = 'Please enter a valid 10-digit Indian mobile number.';
        return;
      }
      this.currentStep++;
      return;
    }
    if (this.currentStep <= this.singleSteps.length) {
      const key = this.currentSingleStep!.id;
      if (!this.answers[key]) return;
      this.currentStep++;
      return;
    }
    if (this.currentStep === this.concernStepIndex) {
      if (this.selectedConcerns.length === 0) return;
      this.submitQuiz();
    }
  }

  goBack() { if (this.currentStep > 0) this.currentStep--; }

  submitQuiz() {
    this.submitted = true;
    this.error = null;

    const payload: QuizRequest = {
      name: this.answers['name'],
      mobileNumber: this.answers['mobileNumber'],
      hairType: this.answers['hairType'],
      scalpType: this.answers['scalpType'],
      concerns: [...this.selectedConcerns],
      lifestyle: this.answers['lifestyle']
    };

    setTimeout(() => {
      this.quizService.getRecommendation(payload).subscribe({
        next: res => { this.result = res; this.submitted = false; },
        error: () => {
          this.error = 'Something went wrong. Please try again.';
          this.submitted = false;
        }
      });
    }, 1500);
  }

  buildWhatsappLink(): string {
    const name = this.answers['name'] || 'Customer';
    const mobile = this.answers['mobileNumber'];
    const product = this.result?.productName || 'Vedrithm Herbal Hair Oil';
    const concerns = this.selectedConcerns.map(c => this.getConcernLabel(c)).join(', ');
    const msg = `Hi! I'm ${name} (📞 +91 ${mobile}). I completed the Vedrithm hair quiz.\n\n✨ *My recommended blend:* ${product}\n💆 *My concerns:* ${concerns}\n\nI'm interested in ordering — please share the details!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  reset() {
    this.currentStep = 0; this.submitted = false; this.result = null;
    this.error = null; this.mobileError = null; this.selectedConcerns = [];
    this.answers = { name: '', mobileNumber: '', hairType: '', scalpType: '', lifestyle: '' };
  }
}