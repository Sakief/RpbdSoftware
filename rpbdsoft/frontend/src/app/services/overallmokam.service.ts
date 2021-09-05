import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OverallMokamService {
  mokamsummaryUrl = 'http://127.0.0.1:8000/api/report/mokamsummary';
  crownmokamsummaryUrl = 'http://127.0.0.1:8000/api/report/crownmokamsummary';
  leadingmokamsummaryUrl =
    'http://127.0.0.1:8000/api/report/leadingbrandmokamsummary';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getMokamSummaryReport() {
    return this.httpClient.get(this.mokamsummaryUrl);
  }

  getCrownMokamSummaryReport() {
    return this.httpClient.get(this.crownmokamsummaryUrl);
  }

  getLeadingBrandMokamSummaryReport() {
    return this.httpClient.get(this.leadingmokamsummaryUrl);
  }
}
