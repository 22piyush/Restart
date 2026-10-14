import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformation {
  userRole: string = 'traine';

  getUserRole() {
    return this.userRole;
  }
}
