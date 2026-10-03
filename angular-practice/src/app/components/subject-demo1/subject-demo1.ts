import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit() {
    // this.subject_demo();

    // this.behaviour_subject_demo();

    // this.reply_subject_demo();

    this.async_subject_demo();
  }

  subject_demo() {
    let mySubject = new Subject();

    mySubject.next('Plan-A');
    mySubject.subscribe((data) => {
      console.log('Subscriber 1: ' + data);
    });

    mySubject.next('Plan-B');
    mySubject.subscribe((data) => {
      console.log('Subscriber 2: ' + data);
    });

    mySubject.next('Plan-C');
    mySubject.subscribe((data) => {
      console.log('Subscriber 3: ' + data);
    });
  }

  behaviour_subject_demo() {
    let mySubject = new BehaviorSubject('Initial Value');

    mySubject.next('Plan-A');
    mySubject.subscribe((data) => {
      console.log('Subscriber 1: ' + data);
    });

    mySubject.next('Plan-B');
    mySubject.subscribe((data) => {
      console.log('Subscriber 2: ' + data);
    });

    mySubject.next('Plan-C');
    mySubject.subscribe((data) => {
      console.log('Subscriber 3: ' + data);
    });
  }

  reply_subject_demo() {
    let mySubject = new ReplaySubject();

    mySubject.next('Plan-A');
    mySubject.subscribe((data) => {
      console.log('Subscriber 1: ' + data);
    });

    mySubject.next('Plan-B');
    mySubject.subscribe((data) => {
      console.log('Subscriber 2: ' + data);
    });

    mySubject.next('Plan-C');
    mySubject.subscribe((data) => {
      console.log('Subscriber 3: ' + data);
    });
  }

  async_subject_demo() {
    let mySubject = new ReplaySubject();

    mySubject.next('Plan-A');
    mySubject.subscribe((data) => {
      console.log('Subscriber 1: ' + data);
    });

    mySubject.next('Plan-B');
    mySubject.subscribe((data) => {
      console.log('Subscriber 2: ' + data);
    });

    mySubject.next('Plan-C');
    mySubject.subscribe((data) => {
      console.log('Subscriber 3: ' + data);
    });

    mySubject.complete();
  }
}
