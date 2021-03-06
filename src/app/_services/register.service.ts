import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class RegisterService {
    baseUrl = environment.apiUrl + 'auth/';
    userToken: any;
    constructor(private http: Http) { }
    login(model: any) {
      const headers = new Headers({ 'Content-type': 'application/json' });
      const options = new RequestOptions({ headers: headers });
      return this.http.post(this.baseUrl + 'login', model, options).map((response: Response) => {
        const user = response.json();
        if (user) {
          localStorage.setItem('token', user.tokenString);
          this.userToken = user.tokenString;
        }
      });
    }
}
