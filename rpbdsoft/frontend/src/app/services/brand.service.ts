import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from './/../model/brand';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  public brand!: Brand;

  gridUrl = 'http://127.0.0.1:8000/api/brand-grid/';
  createUrl = 'http://127.0.0.1:8000/api/brand-create/';
  updateUrl = 'http://127.0.0.1:8000/api/brand-update/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getBrand() {
    return this.httpClient.get(this.gridUrl);
  }

  createBrand(formData: any) {
    return this.httpClient.post(this.createUrl, formData);
  }

  updateBrand(formData: any) {
    return this.httpClient.put(this.updateUrl + formData.brand_code, formData);
  }
  deleteBrand(id: any) {
    return this.httpClient.delete(this.updateUrl + id);
  }
}
