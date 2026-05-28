import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: Home,
  },

  {
    path: 'about',
    component: About,
  },

  {
    path: 'contact',
    component: Contact,
  },

  {
    path: 'product',
    component: ProductDetails,
  },

  {
    path: 'not-found',
    component: Notfound,
  },

  {
    path: '**',
    redirectTo: 'not-found',
  },
];