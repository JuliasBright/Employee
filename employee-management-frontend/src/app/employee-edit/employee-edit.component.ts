import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
    // Initialize other properties as needed
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    // Get the employee ID from the route parameter
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      // Fetch the employee details from the service based on the ID
      this.employeeService.getEmployeeById(id).subscribe((data: Employee) => {
        this.employee = data;
      });
    }
  }

  onSubmit(): void {
    // Call the service to update the employee
    this.employeeService.updateEmployee(this.employee).subscribe(() => {
      // Navigate back to the employee list or perform other actions
      this.router.navigate(['/employees']);
    });
  }
}
