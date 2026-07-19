import { CanActivateFn } from '@angular/router';

export const uploadGuard: CanActivateFn = (route, state) => {
  return true;
};
