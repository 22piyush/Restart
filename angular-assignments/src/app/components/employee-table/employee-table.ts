import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
  inputs: ['employees'],
})
export class EmployeeTable {
  employees: any;

  @Output()
  delete = new EventEmitter();

  deleteEmployee(id: any) {
    this.delete.emit(id);
  }
}
