import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from  'rxjs';
import { Division } from '../model/division';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  baseUrl = "http://127.0.0.1:8000/api/division-list/"; 
    
  httpheaders = {
    headers : {'Content-Type':'application/json'}
  }

  constructor(
    private httpClient:HttpClient
  ) { }

  getDivisions(){
    return this.httpClient.get(this.baseUrl);
  }

  // addDivision(payLoad: any) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json'
  //     })
  //   };
  //   return  this.httpClient.post(this.baseUrl , payLoad, httpOptions);
  // }

  createDivision(division_code:string,division_name:string){
    const body  = JSON.stringify({division_code,division_name});
    return this.httpClient.post(this.baseUrl,body,this.httpheaders);
  }

}


  




