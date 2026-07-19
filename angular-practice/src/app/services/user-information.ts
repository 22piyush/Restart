import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformation {
  userRole: string = 'tainer';

  getUserRole() {
    return this.userRole;
  }
}
