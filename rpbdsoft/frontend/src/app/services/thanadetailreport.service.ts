import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Thanadetailservice {
  thanadetailsUrl = 'http://127.0.0.1:8000/api/report/thanadetails';
  crowndetailsUrl = 'http://127.0.0.1:8000/api/report/crownsummary';
  leadingdetailUrl = 'http://127.0.0.1:8000/api/report/leadingbrandsummary';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getThanaDetailsReport() {
    return this.httpClient.get(this.thanadetailsUrl);
  }

  getCrownDetailReport() {
    return this.httpClient.get(this.crowndetailsUrl);
  }

  getLeadingBrandDetailReport() {
    return this.httpClient.get(this.leadingdetailUrl);
  }
}
