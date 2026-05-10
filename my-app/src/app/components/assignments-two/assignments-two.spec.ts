import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentsTwo } from './assignments-two';

describe('AssignmentsTwo', () => {
  let component: AssignmentsTwo;
  let fixture: ComponentFixture<AssignmentsTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentsTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(AssignmentsTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
