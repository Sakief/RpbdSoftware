import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MerchandiseService {
  baseUrl = 'http://127.0.0.1:8000/api/merchandising-grid/';
  createUrl = 'http://127.0.0.1:8000/api/merchandising-create/';
  // updateUrl = 'http://127.0.0.1:8000/api/merchandising-update/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getMerchandise() {
    return this.httpClient.get(this.baseUrl);
  }

  createMerchandise(formData: any) {
    return this.httpClient.post(this.createUrl, formData);
  }
}
