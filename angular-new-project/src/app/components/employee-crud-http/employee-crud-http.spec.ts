import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCrudHttp } from './employee-crud-http';

describe('EmployeeCrudHttp', () => {
  let component: EmployeeCrudHttp;
  let fixture: ComponentFixture<EmployeeCrudHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCrudHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeCrudHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
