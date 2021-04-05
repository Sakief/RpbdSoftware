import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  baseUrl = 'http://127.0.0.1:8000/api/market-list/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getMarket() {
    return this.httpClient.get(this.baseUrl);
  }

  createMarket(market_code: string, market_name: string) {
    const body = JSON.stringify({ market_code, market_name });
    return this.httpClient.post(this.baseUrl, body, this.httpheaders);
  }
}
