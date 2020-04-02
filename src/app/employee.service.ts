import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Subject, Observable } from "rxjs" 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = new Subject<any>();

  private list : any[] = [];

  constructor(private httpClient : HttpClient) { }

  getEmployeeList()
    {
      return this.list;
    }

  addEmployeeData(user)
    {
      return this.httpClient.post("http://localhost:3000/users", user);
      // this.list.push({...user, date : new Date()})
      // this.employeeList.next(this.list)
      // console.log(this.list);
    }

  getEmployeeByName(name)
      {
        return this.list.filter((employee)=>{
          return employee.username === name
        })[0]
      }

}
