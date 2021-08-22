import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Thanadetailservice {
  baseUrl = 'http://127.0.0.1:8000/api/report/thanadetails';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getThanaDetailsReport() {
    return this.httpClient.get(this.baseUrl);
  }
}
