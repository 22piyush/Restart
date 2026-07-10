export class Employee {
  id: Number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  sal: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
