import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingContact } from './routing-contact';

describe('RoutingContact', () => {
  let component: RoutingContact;
  let fixture: ComponentFixture<RoutingContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingContact],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
