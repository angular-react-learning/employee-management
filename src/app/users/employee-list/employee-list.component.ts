import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../../employee.service"

@Component({
  selector: 'emp-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees : any[] = [];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.employeeList.subscribe((data)=>{
      console.log("data is list component - ", data)
      this.employees = data;
    })

  }

  showInformation(employee)
    {
      alert(`Email : ${employee.email} Phone : ${employee.phone} `)
    }

}
