import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'ingredients',
    loadComponent: () => import('./pages/ingredients/ingredients.component').then(m => m.IngredientsComponent)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./pages/quiz/quiz.component').then(m => m.QuizComponent)
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews.component').then(m => m.ReviewsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
