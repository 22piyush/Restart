export class Employee {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;

  constructor(data: any) {
    Object.assign(this, data);
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

}
