import { Injectable } from '@angular/core';

import { Subject, Observable } from "rxjs" 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = new Subject<any>();

  private list : any[] = [];

  constructor() { }

  addEmployeeData(user)
    {
      this.list.push({...user})
      this.employeeList.next(this.list)
      console.log(this.list);
    }

}
