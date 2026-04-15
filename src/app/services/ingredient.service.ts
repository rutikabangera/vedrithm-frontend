import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ingredient {
  id: number;
  name: string;
  sanskritName: string;
  emoji?: string; // ✅ fixed
  imageSlug: string;
  tag: string;
  description: string;
  originPlace: string;
  displayOrder: number;
  benefits: string[];
}

@Injectable({ providedIn: 'root' })
export class IngredientService {
  //private readonly apiUrl = 'https://vedrithm-backend-1.onrender.com/api/ingredients';

  private readonly apiUrl = 'http://localhost:8080/api/ingredients';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.apiUrl);
  }
}
