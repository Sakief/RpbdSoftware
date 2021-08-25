import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DistrictReportService {
  districtsalesUrl = 'http://127.0.0.1:8000/api/report/districtsalevolume';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getDistrictReport() {
    return this.httpClient.get(this.districtsalesUrl);
  }
}
