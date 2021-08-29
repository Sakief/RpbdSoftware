import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DistrictRetailsReportService {
  districtendtretailsUrl =
    'http://127.0.0.1:8000/api/report/districtendretails';
  districtstartretailsUrl =
    'http://127.0.0.1:8000/api/report/districtstartretails';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getDistrictEndRetailsReport() {
    return this.httpClient.get(this.districtendtretailsUrl);
  }

  getDistrictStartRetailsReport() {
    return this.httpClient.get(this.districtstartretailsUrl);
  }
}
