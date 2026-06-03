import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTesting } from './unit-testing';

describe('UnitTesting', () => {
  let component: UnitTesting;
  let fixture: ComponentFixture<UnitTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTesting],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTesting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
