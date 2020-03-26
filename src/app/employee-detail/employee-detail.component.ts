import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";

import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'emp-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  employee = {};
  constructor(private employeeService : EmployeeService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params)=>{
        this.employee = this.employeeService.getEmployeeByName(params.employeename);
    })
  }

}
