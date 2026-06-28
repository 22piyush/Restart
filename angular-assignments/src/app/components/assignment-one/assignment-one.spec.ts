import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentOne } from './assignment-one';

describe('AssignmentOne', () => {
  let component: AssignmentOne;
  let fixture: ComponentFixture<AssignmentOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentOne],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
