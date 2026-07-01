import { Component } from '@angular/core';
import { DataBinding } from '../components/data-binding/data-binding';
import { DirectivesDemo } from '../components/directives-demo/directives-demo';
import { UserList } from '../components/user-list/user-list';
import { CustomDirectives } from '../components/custom-directives/custom-directives';
import { AngularPipes } from '../components/angular-pipes/angular-pipes';
import { ParentDemo } from '../components/parent-demo/parent-demo';

@Component({
  selector: 'app-body',
  imports: [DataBinding, DirectivesDemo, UserList, CustomDirectives, AngularPipes, ParentDemo],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
