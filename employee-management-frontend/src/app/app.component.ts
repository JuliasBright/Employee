import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee-Management-Frontend';

  showEmployeeCreate: boolean = true;

  showEmployeeEdit: boolean = true;

  showEmployeeFilter: boolean = true;

  showEmployeeList: boolean = true;

  
}
