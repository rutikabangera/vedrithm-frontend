import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ingredient {
  id: number;
  name: string;
  sanskritName: string;
  /** @deprecated Use imageSlug instead — kept for legacy compatibility */
  emoji: string;
  /** Slug that maps to an inline SVG illustration, e.g. "coconut-oil" */
  imageSlug: string;
  tag: string;
  description: string;
  originPlace: string;
  displayOrder: number;
  benefits: string[];
}

@Injectable({ providedIn: 'root' })
export class IngredientService {
  private readonly apiUrl = 'https://vedrithm-backend-1.onrender.com/api/ingredients';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiUrl);
  }
}
