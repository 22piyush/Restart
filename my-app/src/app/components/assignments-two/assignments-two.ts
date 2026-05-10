import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments-two',
  imports: [],
  templateUrl: './assignments-two.html',
  styleUrl: './assignments-two.css',
})
export class AssignmentsTwo {

  task:any = [
	  { id: 1, title: 'Complete Angular assignment', completed: false },
	  { id: 2, title: 'Review pull requests', completed: true },
	  { id: 3, title: 'Prepare project report', completed: false },
	  { id: 4, title: 'Attend team meeting', completed: true },
	  { id: 5, title: 'Update documentation', completed: false },
	];
  pendingTask:any = [];
  completeTask:any = [];


  

}
