import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignments-two',
  imports: [CommonModule, FormsModule],
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
  pendingTask = new Set<any>();
  completeTask = new Set<any>();


  getTask(item:any){
    if (item.completed) {
      this.completeTask.add(item);
    } else {
      this.pendingTask.add(item);
    }


  console.log(this.completeTask);
  console.log(this.pendingTask);
  }

}
