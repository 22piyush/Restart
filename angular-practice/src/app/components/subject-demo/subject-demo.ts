import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';

@Component({
  selector: 'app-subject-demo',
  imports: [],
  templateUrl: './subject-demo.html',
  styleUrl: './subject-demo.css',
})
export class SubjectDemo {
  ngOnInit() {
    // this.subject_demo();
    // this.behaviourSubject_demo();
    // this.replaySubjectDemo();

    this.asyncSubject_demo();
  }

  subject_demo() {
    let mySubject = new Subject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
  }

  behaviourSubject_demo() {
    let mySubject = new BehaviorSubject('Default Plan');
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
  }

  replaySubjectDemo() {
    let mySubject = new ReplaySubject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
  }

  asyncSubject_demo() {
    let mySubject = new AsyncSubject();
    mySubject.next('Plan-A');
    mySubject.subscribe((val) => console.log('Subscriber-1', val));
    mySubject.next('Plan-B');
    mySubject.subscribe((val) => console.log('Subscriber-2', val));
    mySubject.next('Plan-C');
  }
}
