import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  userToken: any;
  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {}
  headers = new Headers({ 'Content-type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  login(model: any) {
    return this.http
      .post(this.baseUrl + 'login', model, this.options)
      .map((response: Response) => {
        const user = response.json();
        if (user) {
          localStorage.setItem('token', user.tokenString);
          this.userToken = user.tokenString;
        }
      });
  }
  register(model: any) {
    return this.http
      .post(this.baseUrl + 'register', model, this.options)
      .map((response: Response) => {
      });
  }
}
