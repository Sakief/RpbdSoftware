import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThanaRetailsReportService {
  thanaendtretailsUrl = 'http://127.0.0.1:8000/api/report/thanaendretails';
  thanastartretailsUrl = 'http://127.0.0.1:8000/api/report/thanastartretails';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getThanaEndRetailsReport() {
    return this.httpClient.get(this.thanaendtretailsUrl);
  }

  getThanaStartRetailsReport() {
    return this.httpClient.get(this.thanastartretailsUrl);
  }
}
