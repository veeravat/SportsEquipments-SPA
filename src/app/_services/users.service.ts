import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  baseUrl = 'http://localhost:5000/api/users';
  user: any;
  constructor(private http: Http) {}

  getUsers() {
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.baseUrl, options).map((response: Response) => {
    //   console.log(response.json());
      return response.json();
    });
  }
  getUser(id: any) {
    console.log(id);
    const headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, id, options).map((response: Response) => {
    //   console.log(response.json());
    if (response.status === 200) {
      return response.json();
    } else {
      return false;
    }

    });
  }
}
