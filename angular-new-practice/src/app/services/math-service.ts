import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  ngOnInit() {
    this.subject_demo();
  }

  subject_demo() {
    let mySubject = new Subject();

    mySubject.subscribe({
      next: (value) => {
        console.log('Subscriber 1 received:', value);
      },
    });

    mySubject.subscribe({
      next: (value) => {
        console.log('Subscriber 2 received:', value);
      },
    });

    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);

    mySubject.complete();
  }
}
