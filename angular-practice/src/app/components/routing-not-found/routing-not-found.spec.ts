import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingNotFound } from './routing-not-found';

describe('RoutingNotFound', () => {
  let component: RoutingNotFound;
  let fixture: ComponentFixture<RoutingNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingNotFound],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingNotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
