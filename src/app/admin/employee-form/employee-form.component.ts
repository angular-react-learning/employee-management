import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../employee.service"

import { NgForm } from "@angular/forms";

@Component({
  selector: 'emp-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee : NgForm;

  user: { username: string, email: string, phone: string } = {
    username: "",
    email: "",
    phone: ""
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addUser(form : NgForm) {
      this.employeeService.addEmployeeData(form.value).subscribe(()=>{
        console.log("asdasd")
      })
  }

}
