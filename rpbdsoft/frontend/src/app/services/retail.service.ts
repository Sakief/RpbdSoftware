import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './/../model/profile';
import { stringify } from '@angular/compiler/src/util';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root',
})
export class RetailService {
  baseUrl = 'http://127.0.0.1:8000/api/retail-grid/';
  createUrl = 'http://127.0.0.1:8000/api/retail-create/';
  updateUrl = 'http://127.0.0.1:8000/api/retail-update/';
  deleteUrl = 'http://127.0.0.1:8000/api/retail-delete/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getRetail() {
    return this.httpClient.get(this.baseUrl);
  }

  createRetail(formData: any) {
    return this.httpClient.post(this.createUrl, formData);
  }
  updateRetail(formData: any) {
    return this.httpClient.put(this.updateUrl + formData.outlet_id, formData);
  }
  deleteRetail(id: any) {
    return this.httpClient.delete(this.updateUrl + id);
  }
}
