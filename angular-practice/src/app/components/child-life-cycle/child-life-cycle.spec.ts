import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifeCycle } from './child-life-cycle';

describe('ChildLifeCycle', () => {
  let component: ChildLifeCycle;
  let fixture: ComponentFixture<ChildLifeCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLifeCycle],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildLifeCycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
