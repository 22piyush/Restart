import { Routes } from '@angular/router';
import { Home } from './components/routing/home/home';
import { Aboutus } from './components/routing/aboutus/aboutus';
import { Careers } from './components/routing/careers/careers';
import { Notfound } from './components/routing/notfound/notfound';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'aboutus',
    component: Aboutus,
  },
  {
    path: 'careers',
    component: Careers,
  },
  {
    path: '**',
    component: Notfound,
  },
];
