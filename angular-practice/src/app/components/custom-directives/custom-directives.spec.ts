import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectives } from './custom-directives';

describe('CustomDirectives', () => {
  let component: CustomDirectives;
  let fixture: ComponentFixture<CustomDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDirectives],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomDirectives);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
