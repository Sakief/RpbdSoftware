import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {
  private httpOptions: any;
  private token: any;
  private token_expires: any;
  public username: any;
  public errors: any = [];

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  public login(user: { username: any; password: any }) {
    this.http
      .post('/api-token-auth/', JSON.stringify(user), this.httpOptions)
      .subscribe(
        (data) => {
          this.updateData(data['token']);
        },
        (err) => {
          this.errors = err['error'];
        }
      );
  }

  public refreshToken() {
    this.http
      .post(
        '/api-token-refresh/',
        JSON.stringify({ token: this.token }),
        this.httpOptions
      )
      .subscribe((data) => {
        this.updateData(data['token']);
      });
  }

  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }

  private updateData(token: string) {
    this.token = token;
    this.errors = [];

    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
  }
}
