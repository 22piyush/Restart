import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  imports: [],
  templateUrl: './subject-demo.html',
  styleUrl: './subject-demo.css',
})
export class SubjectDemo {

  ngOnInit() {
    this.subject_demo();
  }

  subject_demo() {
    let mySubject = new Subject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
  }

}
