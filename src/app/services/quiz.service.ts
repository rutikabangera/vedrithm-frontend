import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface QuizRequest {
  name: string;
  hairType: string;
  scalpType: string;
  concerns: string[];
}

export interface QuizResponse {
  productName: string;
  tagline: string;
  recommendation: string;
  keyIngredients: string[];
  usageTip: string;
}

@Injectable({ providedIn: 'root' })
export class QuizService {
  private apiUrl = '/api/quiz';

  constructor(private http: HttpClient) {}

  getRecommendation(request: QuizRequest): Observable<QuizResponse> {
    return this.http.post<QuizResponse>(`${this.apiUrl}/recommend`, request);
  }
}
