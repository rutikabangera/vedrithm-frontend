import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-themed-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ts-wrap" [class.ts-open]="open">
      <button type="button" class="ts-trigger" (click)="toggle()" [attr.aria-expanded]="open">
        <span class="ts-value" [class.ts-placeholder]="!selectedLabel">
          {{ selectedLabel || placeholder }}
        </span>
        <span class="ts-chevron" [class.ts-chevron-up]="open">&#9662;</span>
      </button>
      <div class="ts-dropdown" *ngIf="open" role="listbox">
        <button type="button" class="ts-option ts-option-placeholder" (click)="select(null)" role="option">
          {{ placeholder }}
        </button>
        <button type="button"
                class="ts-option"
                *ngFor="let opt of options"
                [class.ts-selected]="value === opt.value"
                (click)="select(opt)"
                role="option"
                [attr.aria-selected]="value === opt.value">
          <span class="ts-opt-label">{{ opt.label }}</span>
          <span class="ts-check" *ngIf="value === opt.value">✦</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .ts-wrap { position:relative; width:100%; font-family:var(--font-body); }

    .ts-trigger {
      width:100%;
      display:flex; align-items:center; justify-content:space-between;
      background:var(--forest-light);
      border:1px solid var(--border-gold);
      border-radius:4px;
      padding:0.9rem 1.1rem;
      color:var(--cream);
      font-family:var(--font-body);
      font-size:0.92rem;
      cursor:pointer;
      text-align:left;
      transition:border-color 0.3s ease, background 0.3s ease;
      outline:none;
    }
    .ts-trigger:hover { border-color:rgba(212,175,55,0.5); }
    .ts-open .ts-trigger { border-color:var(--gold); background:var(--forest-accent); border-bottom-left-radius:0; border-bottom-right-radius:0; }

    .ts-placeholder { color:rgba(250,244,230,0.35); }

    .ts-chevron {
      color:var(--gold);
      font-size:0.9rem;
      flex-shrink:0;
      margin-left:0.5rem;
      transition:transform 0.25s ease;
      display:inline-block;
    }
    .ts-chevron-up { transform:rotate(180deg); }

    .ts-dropdown {
      position:absolute;
      top:100%; left:0; right:0;
      background:var(--forest-accent);
      border:1px solid var(--gold);
      border-top:none;
      border-bottom-left-radius:4px;
      border-bottom-right-radius:4px;
      z-index:500;
      max-height:280px;
      overflow-y:auto;
      box-shadow:0 12px 40px rgba(0,0,0,0.6);
      animation:tsSlide 0.18s ease both;
    }
    @keyframes tsSlide {
      from { opacity:0; transform:translateY(-6px); }
      to   { opacity:1; transform:translateY(0); }
    }

    .ts-dropdown::-webkit-scrollbar { width:4px; }
    .ts-dropdown::-webkit-scrollbar-track { background:var(--forest-mid); }
    .ts-dropdown::-webkit-scrollbar-thumb { background:var(--border-gold); border-radius:2px; }

    .ts-option {
      width:100%;
      display:flex; align-items:center; justify-content:space-between;
      padding:0.75rem 1.1rem;
      background:transparent;
      border:none;
      border-bottom:1px solid rgba(212,175,55,0.1);
      color:rgba(250,244,230,0.75);
      font-family:var(--font-body);
      font-size:0.88rem;
      cursor:pointer;
      text-align:left;
      transition:background 0.2s ease, color 0.2s ease;
    }
    .ts-option:last-child { border-bottom:none; }
    .ts-option:hover { background:rgba(212,175,55,0.1); color:var(--cream); }
    .ts-option.ts-selected { color:var(--gold); background:rgba(212,175,55,0.07); }
    .ts-option-placeholder { color:rgba(250,244,230,0.35); font-style:italic; font-size:0.82rem; }

    .ts-check { color:var(--gold); font-size:0.7rem; flex-shrink:0; }
    .ts-opt-label { flex:1; }
  `]
})
export class ThemedSelectComponent {
  @Input() options: SelectOption[] = [];
  @Input() value: string = '';
  @Input() placeholder: string = 'Select an option...';
  @Output() valueChange = new EventEmitter<string>();

  open = false;

  get selectedLabel(): string {
    const found = this.options.find(o => o.value === this.value);
    return found ? found.label : '';
  }

  toggle() { this.open = !this.open; }

  select(opt: SelectOption | null) {
    this.value = opt ? opt.value : '';
    this.valueChange.emit(this.value);
    this.open = false;
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: Event) {
    if (!(e.target as HTMLElement).closest('app-themed-select')) {
      this.open = false;
    }
  }
}
