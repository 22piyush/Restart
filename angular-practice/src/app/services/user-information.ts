import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInformation {
  userRole: string = 'student';

  getUserRole() {
    return this.userRole;
  }
}
