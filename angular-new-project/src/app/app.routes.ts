import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product-details/product-details';
import { Child1 } from './components/child1/child1';
import { Child2 } from './components/child2/child2';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: Home,
    children: [
      {
        path: 'child1',
        component: Child1,
      },

      {
        path: 'child2',
        component: Child2,
      },
    ],
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
