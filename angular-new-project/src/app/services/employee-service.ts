import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getAllEmployees(values: any): any {
    return values;
  }

  getMaleEmployees(values: any): any {
    return values.filter((item: any) => item.gender === 'male');
  }

  getFemaleEmployees(values: any): any {
    return values.filter((item: any) => item.gender === 'female');
  }
}
