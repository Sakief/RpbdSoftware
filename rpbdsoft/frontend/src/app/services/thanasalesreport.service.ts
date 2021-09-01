import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThanaSalesReportService {
  thanasalesUrl = 'http://127.0.0.1:8000/api/report/thanasalesvolume';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getThanaSalesReport() {
    return this.httpClient.get(this.thanasalesUrl);
  }
}
