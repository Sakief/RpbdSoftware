import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root',
})
export class DealerService {
  baseUrl = '  http://127.0.0.1:8000/api/dealerprofile-grid';
  createUrl = 'http://127.0.0.1:8000/api/dealerprofile-create';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getProfile() {
    return this.httpClient.get(this.baseUrl);
  }

  createDealer(formData: any) {
    return this.httpClient.post(this.createUrl, formData);
  }
}
