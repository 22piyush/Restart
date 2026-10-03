import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTodoAdd } from './subject-todo-add';

describe('SubjectTodoAdd', () => {
  let component: SubjectTodoAdd;
  let fixture: ComponentFixture<SubjectTodoAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectTodoAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectTodoAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
