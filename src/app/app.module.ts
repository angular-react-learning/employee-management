import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"

import { RouterModule } from "@angular/router"
import { routes } from "../routes";  

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './admin/employee-form/employee-form.component';
import { EmployeeListComponent } from './users/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
