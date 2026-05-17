import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [FormsModule],
  templateUrl: './services.html',
})
export class Services {
  employeeService = inject(EmployeeService);

  allEmployees = [
    {
      name: 'Piyush',
      gender: 'male',
      dept: 'IT',
      email: 'piyush@gmail.com',
    },
    {
      name: 'Harshal',
      gender: 'male',
      dept: 'IT',
      email: 'harshal@gmail.com',
    },
    {
      name: 'Diksha',
      gender: 'female',
      dept: 'HR',
      email: 'diksha@gmail.com',
    },
  ];

  employees: any[] = [];

  selectEmp: string = 'all';

  ngOnInit() {
    this.employees = this.allEmployees;
  }

  filterEmployees() {
    if (this.selectEmp == 'all') {
      this.employees = this.employeeService.getAllEmployees(this.allEmployees);
    }

    if (this.selectEmp == 'male') {
      this.employees = this.employeeService.getMaleEmployees(this.allEmployees);
    }

    if (this.selectEmp == 'female') {
      this.employees = this.employeeService.getFemaleEmployees(this.allEmployees);
    }
  }
}
