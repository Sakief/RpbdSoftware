import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MokamSalesReportService {
  mokamsalesUrl = 'http://127.0.0.1:8000/api/report/marketsalesvolume';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getMokamSalesReport() {
    return this.httpClient.get(this.mokamsalesUrl);
  }
}
