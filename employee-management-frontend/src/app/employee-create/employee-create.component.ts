import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent {
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    skills: ''
   
  };

  constructor(private employeeService: EmployeeService) {}

  onSubmit(): void {
    this.employeeService.createEmployee(this.employee).subscribe(() => {
      this.employee = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        skills: ''
      };
    });
  }
}
