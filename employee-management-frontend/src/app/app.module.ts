import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create', component: EmployeeCreateComponent },
  { path: 'edit', component: EmployeeEditComponent },
  { path: 'filter', component: EmployeeFilterComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }