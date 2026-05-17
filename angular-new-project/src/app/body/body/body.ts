import { Component } from '@angular/core';
import { DataBinding } from '../../components/data-binding/data-binding';
import { Directives } from '../../components/directives/directives';
import { UserList } from '../../components/user-list/user-list';
import { CustomDirective } from '../../components/custom-directive/custom-directive';
import { PipesDemo } from '../../components/pipes-demo/pipes-demo';
import { PureImpurePipes } from '../../components/pure-impure-pipes/pure-impure-pipes';

@Component({
  selector: 'app-body',
  imports: [DataBinding, Directives, CustomDirective, PipesDemo, PureImpurePipes],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
