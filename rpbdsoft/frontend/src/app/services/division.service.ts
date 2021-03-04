import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  baseUrl = "http://127.0.0.1:8000/api/division-list/"; 

  constructor(
    private httpClient:HttpClient
  ) { }

  getDivisions(){
    return this.httpClient.get(this.baseUrl);
    
  }
}
