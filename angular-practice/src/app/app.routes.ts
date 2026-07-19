import { Routes } from '@angular/router';
import { RoutingHome } from './components/routing-home/routing-home';
import { RoutingAbout } from './components/routing-about/routing-about';
import { RoutingCareers } from './components/routing-careers/routing-careers';
import { RoutingContact } from './components/routing-contact/routing-contact';
import { RoutingNotFound } from './components/routing-not-found/routing-not-found';
import { uploadGuard } from './guards/upload-guard';
import { canExitGuard } from './guards/can-exit-guard';

export const routes: Routes = [
  {
    path: 'home',
    component: RoutingHome,
  },
  {
    path: 'aboutus',
    component: RoutingAbout,
    canDeactivate: [canExitGuard]
  },
  {
    path: 'careers',
    component: RoutingCareers,
    canActivate: [uploadGuard]
  },
  {
    path: 'contact',
    component: RoutingContact,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: RoutingNotFound,
  },
];
