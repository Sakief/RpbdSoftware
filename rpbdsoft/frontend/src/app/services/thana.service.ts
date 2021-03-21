import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThanaService {

  body: any;

  baseUrl = "http://127.0.0.1:8000/api/thana-list/"; 
  thanaUrl = "http://127.0.0.1:8000/api/thana-detail/"
    save: any;
  

  constructor(
    private httpClient:HttpClient
  ) { }

  getThana(){
    return this.httpClient.get(this.baseUrl);
  }

  updateThana(){
    return this.httpClient.put(this.thanaUrl,this.body);
  }
}
