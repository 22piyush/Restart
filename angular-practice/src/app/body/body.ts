import { Component } from '@angular/core';
import { DataBinding } from '../components/data-binding/data-binding';
import { DirectivesDemo } from '../components/directives-demo/directives-demo';
import { UserList } from '../components/user-list/user-list';
import { CustomDirectives } from '../components/custom-directives/custom-directives';
import { AngularPipes } from '../components/angular-pipes/angular-pipes';
import { Categories } from '../components/categories/categories';
import { LifeCycle } from '../components/life-cycle/life-cycle';
import { ServiceDemo } from '../components/service-demo/service-demo';

@Component({
  selector: 'app-body',
  imports: [DataBinding, DirectivesDemo, UserList, CustomDirectives, AngularPipes, Categories, LifeCycle, ServiceDemo],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
