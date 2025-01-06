import { TestBed } from '@angular/core/testing';

import { GetprojectEmployeeService } from './getproject-employee.service';

describe('GetprojectEmployeeService', () => {
  let service: GetprojectEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetprojectEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
