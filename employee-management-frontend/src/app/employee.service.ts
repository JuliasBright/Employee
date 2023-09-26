import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiBaseUrl = 'http://localhost:5277/'; 

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = `${this.apiBaseUrl}/employees`; 
    return this.http.get(url);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiBaseUrl}/employees`;
    return this.http.post<Employee>(url, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.apiBaseUrl}/employees/${id}`;
    return this.http.get<Employee>(url);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiBaseUrl}/employees/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }
}
