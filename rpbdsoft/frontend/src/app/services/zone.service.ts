import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../model/zone';

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  baseUrl = 'http://127.0.0.1:8000/api/zone-list/';
  updateUrl = 'http://127.0.0.1:8000/api/zone-update/';
  createUrl = 'http://127.0.0.1:8000/api/zone-create/';

  httpheaders = {
    headers: { 'Content-Type': 'application/json' },
  };

  constructor(private httpClient: HttpClient) {}
  editZone(zone: Zone) {
    return this.httpClient.put(this.updateUrl + 'zone-detail/', zone);
  }

  getZone() {
    return this.httpClient.get(this.baseUrl);
  }

  createZone(formData: any) {
    return this.httpClient.post(this.createUrl, formData);
  }

  updateZone(formData: any) {
    return this.httpClient.put(this.updateUrl + formData.zone_code, formData);
  }

  deleteZone(id: any) {
    return this.httpClient.delete(this.updateUrl + id);
  }
}
