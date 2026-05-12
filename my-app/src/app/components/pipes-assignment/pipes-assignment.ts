import { Component } from '@angular/core';
import { OdinalPipe } from '../../custom_pipes/odinal-pipe';
import { FormsModule } from '@angular/forms';
import { CreditcardPipe } from '../../custom_pipes/creditcard-pipe';
import { AgePipe } from '../../custom_pipes/age-pipe';
import { SalutationPipe } from '../../custom_pipes/salutation-pipe';
import { SearchPipe } from '../../custom_pipes/search-pipe';

@Component({
  selector: 'app-pipes-assignment',
  imports: [SearchPipe ,SalutationPipe, AgePipe, CreditcardPipe, OdinalPipe, FormsModule],
  templateUrl: './pipes-assignment.html',
  styleUrl: './pipes-assignment.css',
})
export class PipesAssignment {
  num: number = 21;
  creditCard: string = '';

  age: string = '';

  employees = [
    {
      name: 'Piyush',
      gender: 'male',
    },
    {
      name: 'Priya',
      gender: 'female',
    },
    {
      name: 'Harshal',
      gender: 'male',
    },
  ];

  searchEmp:string = ''
}
