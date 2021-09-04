import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OutletSalesReportService {
  outletsalesUrl = 'http://127.0.0.1:8000/api/report/outletsalesvolume';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getOutletSalesReport() {
    return this.httpClient.get(this.outletsalesUrl);
  }
}
