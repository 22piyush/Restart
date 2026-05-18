import { Component } from '@angular/core';
import { DataBinding } from '../../components/data-binding/data-binding';
import { Directives } from '../../components/directives/directives';
import { UserList } from '../../components/user-list/user-list';
import { CustomDirective } from '../../components/custom-directive/custom-directive';
import { PipesDemo } from '../../components/pipes-demo/pipes-demo';
import { PureImpurePipes } from '../../components/pure-impure-pipes/pure-impure-pipes';
import { ParentDemo } from '../../components/parent-demo/parent-demo';
import { Parent } from '../../components/parent/parent';
import { EmployeeCrud } from '../../components/employee-crud/employee-crud';
import { Services } from '../../components/services/services';
import { HttpDemo1 } from '../../components/http-demo1/http-demo1';
import { EmployeeCrudHttp } from '../../components/employee-crud-http/employee-crud-http';

@Component({
  selector: 'app-body',
  imports: [
    EmployeeCrudHttp,
    HttpDemo1,
    Parent,
    ParentDemo,
    DataBinding,
    Directives,
    CustomDirective,
    PipesDemo,
    PureImpurePipes,
    EmployeeCrud,
    Services
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
