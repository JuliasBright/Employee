import { Component } from '@angular/core';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee-Management-Frontend';

  employees: Employee[] = [];

  showEmployeeCreate: boolean = true;

  showEmployeeEdit: boolean = true;

  showEmployeeFilter: boolean = true;

  showEmployeeList: boolean = true;

  
}
