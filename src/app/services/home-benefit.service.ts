import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HomeBenefit {
  id: number;
  icon: string;
  title: string;
  description: string;
  displayOrder: number;
}

@Injectable({ providedIn: 'root' })
export class HomeBenefitService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<HomeBenefit[]> {
    //return this.http.get<HomeBenefit[]>('https://vedrithm-backend-1.onrender.com/api/benefits');
    return this.http.get<HomeBenefit[]>('http://localhost:8080/api/benefits');

    
  }
}
