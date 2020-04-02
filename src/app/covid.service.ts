import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private httpClient : HttpClient) { }

  getCases()
    {
      // GET 
      // POST - save
      // DELETE 
      // PUT - update

      // POST / UPDATE

      this.httpClient.post("http://localhost:3000/posts", {
        "title": "edureka session",
        "author": "angular"
      }).subscribe((response)=>{
        console.log(response);
      })

      // this.httpClient.delete("https://corona.lmao.ninja/v2/jhucsse")


      return this.httpClient.get("https://corona.lmao.ninja/v2/jhucsse")
    }
}
