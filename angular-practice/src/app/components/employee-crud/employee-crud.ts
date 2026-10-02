import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-crud',
  imports: [CommonModule],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css',
})
export class EmployeeCrud {
  employeeService = inject(EmployeeService);

  employees$: Observable<any> | null = null;

  fetchEmployee() {
    this.employees$ = this.employeeService.getAllEmployees();
    console.log(this.employees$);
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      console.log(`Employee with ID ${id} deleted successfully.`);
      // Refresh the employee list after deletion
      this.fetchEmployee();
    });
  }

  addEmployee(name: string, email: string) {
    const empData = { name, email };
    this.employeeService.addEmployee(empData).subscribe((response) => {
      console.log('Employee added successfully:', response);
      // Refresh the employee list after adding a new employee
      this.fetchEmployee();
    });
  }

  editEmployee(id: any, name: string, email: string) {
    const empData = { name, email };
    this.employeeService.updateEmployee(id, empData).subscribe((response) => {
      console.log(`Employee with ID ${id} updated successfully:`, response);
      // Refresh the employee list after updating an employee
      this.fetchEmployee();
    });
  }
}
