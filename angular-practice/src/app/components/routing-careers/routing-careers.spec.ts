import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCareers } from './routing-careers';

describe('RoutingCareers', () => {
  let component: RoutingCareers;
  let fixture: ComponentFixture<RoutingCareers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingCareers],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingCareers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
