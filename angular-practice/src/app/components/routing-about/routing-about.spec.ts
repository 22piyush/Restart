import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAbout } from './routing-about';

describe('RoutingAbout', () => {
  let component: RoutingAbout;
  let fixture: ComponentFixture<RoutingAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
