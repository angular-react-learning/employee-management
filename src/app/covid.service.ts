import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient : HttpClient) { }

  getCases()
    {
      return this.httpClient.get("https://corona.lmao.ninja/v2/jhucsse")
    }
}
