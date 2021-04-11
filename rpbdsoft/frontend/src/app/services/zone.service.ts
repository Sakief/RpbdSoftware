import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone } from '../model/zone';

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  baseUrl = 'http://127.0.0.1:8000/api/zone-list/';
  updateUrl = 'http://127.0.0.1:8000/api/zone-detail';

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

  createZone(zone_code: string, zone_name: string) {
    const body = JSON.stringify({ zone_code, zone_name });
    return this.httpClient.post(this.baseUrl, body, this.httpheaders);
  }

  updateZone(zone: Zone): Observable < string > {  
    const httpOptions = {  
        headers: new HttpHeaders({  
            'Content-Type': 'application/json'  
        })  
    };  
    return this.httpClient.put < string > (this.updateUrl, zone, httpOptions);
}
}
