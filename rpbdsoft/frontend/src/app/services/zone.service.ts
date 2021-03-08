import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  baseUrl = "http://127.0.0.1:8000/api/zone-list/"; 

  constructor(
    private httpClient:HttpClient
  ) { }

  getZone(){
    return this.httpClient.get(this.baseUrl);
    
  }
}