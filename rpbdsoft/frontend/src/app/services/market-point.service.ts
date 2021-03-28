import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  baseUrl = 'http://127.0.0.1:8000/api/market-list/';

  constructor(private httpClient: HttpClient) {}

  getMarket() {
    return this.httpClient.get(this.baseUrl);
  }
}
