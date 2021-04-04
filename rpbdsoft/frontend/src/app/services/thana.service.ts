import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThanaService {
  body: any;

  baseUrl = 'http://127.0.0.1:8000/api/thana-list/';
  // thanaUrl = 'http://127.0.0.1:8000/api/thana-detail/';
  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };
  save: any;

  constructor(private httpClient: HttpClient) {}

  getThana() {
    return this.httpClient.get(this.baseUrl);
  }

  createThana(thana_code: string, thana_name: string) {
    const body = JSON.stringify({ thana_code, thana_name });
    return this.httpClient.post(this.baseUrl, body, this.httpheaders);
  }
}
