import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'news-detail/:id',
    loadComponent: () => import('./news-detail/news-detail.page').then( m => m.NewsDetailPage)
  },
];
