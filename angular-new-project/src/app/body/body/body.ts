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

@Component({
  selector: 'app-body',
  imports: [
    Parent,
    ParentDemo,
    DataBinding,
    Directives,
    CustomDirective,
    PipesDemo,
    PureImpurePipes,
    EmployeeCrud
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
