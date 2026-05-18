import { TestBed } from '@angular/core/testing';

import { EmployeeServiceHttp } from './employee-service-http';

describe('EmployeeServiceHttp', () => {
  let service: EmployeeServiceHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServiceHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
