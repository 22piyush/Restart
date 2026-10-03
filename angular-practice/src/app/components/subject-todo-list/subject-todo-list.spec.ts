import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTodoList } from './subject-todo-list';

describe('SubjectTodoList', () => {
  let component: SubjectTodoList;
  let fixture: ComponentFixture<SubjectTodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectTodoList],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectTodoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
