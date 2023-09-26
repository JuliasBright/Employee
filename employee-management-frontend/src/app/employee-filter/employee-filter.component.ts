import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss']
})
export class EmployeeFilterComponent {
  filter: {
    birthYear?: number;
    skills?: string;
  } = {};

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  filterEmployees() {
    this.employeeService.getEmployees(this.filter).subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  resetFilter() {
    this.filter = {};
    this.filterEmployees();
  }

  ngOnInit(): void {
    this.filterEmployees();
  }

}
