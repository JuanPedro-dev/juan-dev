import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'language',
    loadComponent: () =>
      import('./pages/language/language.component').then(m => m.LanguageComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'language',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then(
        m => m.PageNotFoundComponent
      ),
  },
];
