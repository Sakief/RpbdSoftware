import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  baseUrl = 'http://127.0.0.1:8000/api/zone-list/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getZone() {
    return this.httpClient.get(this.baseUrl);
  }

  createZone(zone_code: string, zone_name: string) {
    const body = JSON.stringify({ zone_code, zone_name });
    return this.httpClient.post(this.baseUrl, body, this.httpheaders);
  }
}
