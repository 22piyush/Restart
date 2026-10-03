import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemo2 } from './http-demo2';

describe('HttpDemo2', () => {
  let component: HttpDemo2;
  let fixture: ComponentFixture<HttpDemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpDemo2],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpDemo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
