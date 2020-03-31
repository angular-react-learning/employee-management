import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

import { Observable } from "rxjs";

import { CovidService } from "../covid.service"

@Component({
  selector: 'emp-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  counteries: any = [];

  createdOn : String = new Date().toISOString()

  constructor(private covidService : CovidService) { }

  public pieChartLabels: Label[] = ["US", "China", "India"];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';


  observeNumber: Promise<number>;

  showMessage(message)
    {
      alert(message);
    }

  ngOnInit(): void {

    this.observeNumber = Observable.create((observer)=>{
        let value = 1;  
        setInterval(()=>{
          value = value + 1
          observer.next(value)
        }, 1000)
    })

    // this.observeNumber = new Promise((resolve) => {
    //   resolve(42342432483890238423);
    // })


    
      this.covidService.getCases()
      .subscribe((data: []) => {

        this.counteries = data;

        this.pieChartLabels = data.map((item: any) => {
          return `${item.province}, ${item.country}`;
        })

        this.pieChartData = data.map((item: any) => {
          return item.stats.confirmed;
        })

      })
  }

}
