import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingHome } from './routing-home';

describe('RoutingHome', () => {
  let component: RoutingHome;
  let fixture: ComponentFixture<RoutingHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingHome],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
