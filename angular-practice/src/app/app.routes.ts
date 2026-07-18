import { Routes } from '@angular/router';
import { RoutingHome } from './components/routing-home/routing-home';
import { RoutingAbout } from './components/routing-about/routing-about';
import { RoutingCareers } from './components/routing-careers/routing-careers';
import { RoutingContact } from './components/routing-contact/routing-contact';

export const routes: Routes = [
  {
    path: 'home',
    component: RoutingHome,
  },
  {
    path: 'aboutus',
    component: RoutingAbout,
  },
  {
    path: 'careers',
    component: RoutingCareers,
  },
  {
    path: 'contact',
    component: RoutingContact,
  },
//   {
//     path: 'contact',
//     component: RoutingContact,
//   },
];
