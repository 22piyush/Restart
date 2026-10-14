import { CanActivateFn } from '@angular/router';
import { UserInformation } from '../services/user-information';
import { inject } from '@angular/core';

export const uploadGuard: CanActivateFn = (route, state) => {
  let userInformationService = inject(UserInformation);

  if (userInformationService.getUserRole() == 'trainer') {
    return true;
  } else {
    alert('You dont have access to this page');
    return false;
  }
};
