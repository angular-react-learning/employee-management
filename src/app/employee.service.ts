import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private EmployeeList : any[] = [];

  constructor() { }

  addEmployeeData(user)
    {
      this.EmployeeList.push({...user})
      console.log(this.EmployeeList);
    }

}
