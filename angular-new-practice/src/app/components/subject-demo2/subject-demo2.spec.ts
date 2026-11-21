import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemo2 } from './subject-demo2';

describe('SubjectDemo2', () => {
  let component: SubjectDemo2;
  let fixture: ComponentFixture<SubjectDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectDemo2],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectDemo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
