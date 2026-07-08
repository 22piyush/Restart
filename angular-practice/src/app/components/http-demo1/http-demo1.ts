import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';

@Component({
  selector: 'app-http-demo1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  employeeService = inject(EmployeeService);

  employees: any[] = [];

  employee: any = {
    title: '',
    price: '',
    category: '',
  };

  isEdit = false;
  editId: number = 0;

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (res: any) => {
        this.employees = res;
        console.log(this.employees);
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  saveEmployee() {
    if (this.isEdit) {
      this.employeeService.updateEmployee(this.editId, this.employee).subscribe(() => {
        alert('Updated Successfully');
        this.fetchEmployees();
        this.resetForm();
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        alert('Added Successfully');
        this.fetchEmployees();
        this.resetForm();
      });
    }
  }

  editEmployee(emp: any) {
    this.employee = { ...emp };
    this.editId = emp.id;
    this.isEdit = true;
  }

  deleteEmployee(id: number) {
    if (confirm('Delete Employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        alert('Deleted Successfully');
        this.fetchEmployees();
      });
    }
  }

  resetForm() {
    this.employee = {
      title: '',
      price: '',
      category: '',
    };

    this.isEdit = false;
    this.editId = 0;
  }
}
