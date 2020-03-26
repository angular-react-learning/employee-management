import { Component, OnInit } from '@angular/core';

import { EmployeeService } from "../../employee.service"

@Component({
  selector: 'emp-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  user: { username: string, email: string, phone: string } = {
    username: "",
    email: "",
    phone: ""
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.employeeService.addEmployeeData(this.user);
  }

}
