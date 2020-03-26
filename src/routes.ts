import { Routes } from "@angular/router";

import { EmployeeFormComponent } from "./app/admin/employee-form/employee-form.component";
import { EmployeeListComponent } from "./app/users/employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./app/employee-detail/employee-detail.component"

export const routes : Routes = [
    { path : 'home', component : EmployeeFormComponent },
    { path : "listing", component : EmployeeListComponent },
    { path : "employee/:employeename", component : EmployeeDetailComponent },
    { path : "", redirectTo : '/home', pathMatch : 'full'}
]

 