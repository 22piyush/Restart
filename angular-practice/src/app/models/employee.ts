export class Employee {
  id!: Number;
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  sal!: number;

  constructor(data: any) {
    Object.assign(this, data);
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  yearlySal() {
    return this.sal * 12;
  }
}
