import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTodo } from './subject-todo';

describe('SubjectTodo', () => {
  let component: SubjectTodo;
  let fixture: ComponentFixture<SubjectTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectTodo],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectTodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
