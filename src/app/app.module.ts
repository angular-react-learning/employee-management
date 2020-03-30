import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"

import { RouterModule } from "@angular/router"
import { routes } from "../routes";  

import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './admin/employee-form/employee-form.component';
import { EmployeeListComponent } from './users/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { InfoComponent } from './info/info.component';
import { ChartsModule } from 'ng2-charts';
import { SearchPipe } from './search.pipe';
import { AlertDirective } from './alert.directive';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    InfoComponent,
    SearchPipe,
    AlertDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
