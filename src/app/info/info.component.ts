import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'emp-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  counteries : any = [];

  constructor(private httpClient : HttpClient) { }

  public pieChartLabels: Label[] = ["US", "China", "India"];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';

  ngOnInit(): void {
    this.httpClient.get("https://corona.lmao.ninja/v2/jhucsse").subscribe((data : [])=>{      
      
      this.counteries = data;

      this.pieChartLabels = data.map((item : any)=>{
        return `${item.province}, ${item.country}`;
      })

      this.pieChartData = data.map((item : any)=>{
        return item.stats.confirmed;
      })

    })
  }

}
