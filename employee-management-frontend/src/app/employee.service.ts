import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiBaseUrl = 'http://localhost:5277'; 

  constructor(private http: HttpClient) { }

  getEmployees(filter?: { birthYear?: number, skills?: string }): Observable<Employee[]> {
    let apiUrl = this.apiBaseUrl;

    if (filter) {
      if (filter.birthYear) {
        apiUrl += `?birthYear=${filter.birthYear}`;
      }
      if (filter.skills) {
        apiUrl += `&skills=${filter.skills}`;
      }
    }
    return this.http.get<Employee[]>(apiUrl);
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

  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.apiBaseUrl}/employees/${id}`;
    return this.http.delete<Employee>(url);
  }
}
