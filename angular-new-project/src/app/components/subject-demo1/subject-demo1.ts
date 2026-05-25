import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit() {
    this.subject_demo();
  }

  subject_demo() {
    
    let mySubject = new Subject();

    mySubject.next('plan-A');
    mySubject.subscribe((val) => console.log('Subscribe-1', val));

    mySubject.next('plan-B');
    mySubject.subscribe((val) => console.log('Subscribe-2', val));

    mySubject.next('plan-C');

  }
}
