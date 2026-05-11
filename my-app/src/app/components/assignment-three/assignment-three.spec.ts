import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentThree } from './assignment-three';

describe('AssignmentThree', () => {
  let component: AssignmentThree;
  let fixture: ComponentFixture<AssignmentThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentThree],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
