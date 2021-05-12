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
  createUrl = 'http://127.0.0.1:8000/api/profile-create/';
  updateUrl = 'http://127.0.0.1:8000/api/profile-update/';
  deleteUrl = 'http://127.0.0.1:8000/api/profile-delete/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}

  getProfile() {
    return this.httpClient.get(this.baseUrl);
  }

  createProfile(formData: any) {
    return this.httpClient.post(this.createUrl, formData);
  }
  updateProfile(formData: any) {
    return this.httpClient.put(
      this.updateUrl + formData.incremented_outlet_id,
      formData
    );
  }
  deleteProfile(id: any) {
    return this.httpClient.delete(this.deleteUrl + id);
  }
}
