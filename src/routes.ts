import { Routes } from "@angular/router";

import { EmployeeFormComponent } from "./app/admin/employee-form/employee-form.component";
import { EmployeeListComponent } from "./app/users/employee-list/employee-list.component";

export const routes : Routes = [
    { path : 'home', component : EmployeeFormComponent },
    { path : "listing", component : EmployeeListComponent },
    { path : "", redirectTo : '/home', pathMatch : 'full'}
]

 