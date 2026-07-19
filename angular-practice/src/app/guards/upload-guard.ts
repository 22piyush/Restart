import { CanActivateFn } from '@angular/router';
import { UserInformation } from '../services/user-information';
import { inject } from '@angular/core';

export const uploadGuard: CanActivateFn = (route, state) => {
  let UserInformationService = inject(UserInformation);
  if (UserInformationService.getUserRole() == 'trainer') {
    return true;
  } else {
    alert('You Dont have Access to this page');
    return false;
  }
};
