import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileListservice {
  profilelistUrl = 'http://127.0.0.1:8000/api/report/profilelist';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  save: any;

  constructor(private httpClient: HttpClient) {}

  getProfileListReport() {
    return this.httpClient.get(this.profilelistUrl);
  }
}
