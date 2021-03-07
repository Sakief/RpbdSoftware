import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  baseUrl = "http://127.0.0.1:8000/api/district-list/"; 

  constructor(
    private httpClient:HttpClient
  ) { }

  getDistrict(){
    return this.httpClient.get(this.baseUrl);
    
  }
}
