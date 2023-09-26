import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getEmployees function', () => {
    expect(service.getEmployees).toBeTruthy();
  });

  it('should have createEmployee function', () => {
    expect(service.createEmployee).toBeTruthy();
  });

  it('should have getEmployeeById function', () => {
    expect(service.getEmployeeById).toBeTruthy();
  });

  it('should have updateEmployee function', () => {
    expect(service.updateEmployee).toBeTruthy();
  });

  it('should have deleteEmployee function', () => {
    expect(service.deleteEmployee).toBeTruthy();
  });
});
