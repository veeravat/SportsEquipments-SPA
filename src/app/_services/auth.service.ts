import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router, ActivatedRoute} from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
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
          return true;
        }
        return false;
      });
  }
  register(model: any) {
    return this.http
      .post(this.baseUrl + 'register', model, this.options)
      .map((response: Response) => {
      });
  }
}
