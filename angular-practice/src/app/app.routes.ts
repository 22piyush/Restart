import { Routes } from '@angular/router';
import { Home } from './components/routing/home/home';
import { Careers } from './components/routing/careers/careers';
import { Notfound } from './components/routing/notfound/notfound';
import { uploadGuard } from './guards/upload-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
{
  path: 'aboutus',
  loadComponent: () =>
    import("./components/routing/aboutus/aboutus")
      .then((m) => m.Aboutus),
},
  {
    path: 'careers',
    component: Careers,
    canActivate: [uploadGuard],
  },
  {
    path: '**',
    component: Notfound,
  },
];
