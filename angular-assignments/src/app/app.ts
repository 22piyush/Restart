import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  showPara: boolean = true;
  state = '';

  count = 0;

  tasks = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ];

  filter = 'All';

  get filteredTasks() {
    if (this.filter === 'Completed') {
      return this.tasks.filter((task) => task.completed);
    }

    if (this.filter === 'Pending') {
      return this.tasks.filter((task) => !task.completed);
    }

    return this.tasks;
  }

  get completedCount() {
    return this.tasks.filter((task) => task.completed).length;
  }
}
