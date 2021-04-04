import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { District } from '../model/district';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  baseUrl = 'http://127.0.0.1:8000/api/district-list/';

  httpheaders = {
    headers : { 'Content-Type' : 'application/json'},
  }



  constructor(private httpClient: HttpClient) {}

  getDistrict() {
    return this.httpClient.get(this.baseUrl);
  }

  createDistrict(district_code: string, district_name: string) {
    const body = JSON.stringify({ district_code, district_name });
    return this.httpClient.post(this.baseUrl, body, this.httpheaders)
    
}


}
