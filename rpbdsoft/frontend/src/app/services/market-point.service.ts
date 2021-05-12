import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  baseUrl = 'http://127.0.0.1:8000/api/market-grid/';
  createUrl = 'http://127.0.0.1:8000/api/market-create/';
  updateUrl = 'http://127.0.0.1:8000/api/market-update/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getMarket() {
    return this.httpClient.get(this.baseUrl);
  }

  createMarket(formData: any) {
    return this.httpClient.post(this.createUrl, formData);
  }

  updateMarket(formData: any) {
    return this.httpClient.put(this.updateUrl + formData.market_code, formData);
  }

  deleteMarket(id: any) {
    return this.httpClient.delete(this.updateUrl + id);
  }
}
