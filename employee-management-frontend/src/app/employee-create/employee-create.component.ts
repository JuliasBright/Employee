import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
   
  };

  constructor(private employeeService: EmployeeService) {}

  onSubmit(): void {
    // Call the service to create the employee
    this.employeeService.createEmployee(this.employee).subscribe(() => {
      // Clear the form or perform other actions
      this.employee = {
        id: 0,
        firstName: '',
        lastName: '',
        email: ''
        // Reset other properties as needed
      };
    });
  }
}
