import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',

  inputs:['employees'],
  outputs:['deleteEmp']
})
export class EmployeeTable {

  employees:any = [];

  deleteEmp = new EventEmitter<number>();

  deleteEmployee(id:number){
    this.deleteEmp.emit(id);
  }

}