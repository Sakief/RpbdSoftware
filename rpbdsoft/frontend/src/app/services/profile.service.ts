import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './/../model/profile';
import { stringify } from '@angular/compiler/src/util';
// import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  baseUrl = 'http://127.0.0.1:8000/api/profile-grid/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getProfile() {
    return this.httpClient.get(this.baseUrl);
  }
}
