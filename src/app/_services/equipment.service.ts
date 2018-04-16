import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../env/environment';

@Injectable()
export class EquipmentService {

  baseUrl = environment.apiUrl + 'equipment/';
  user: any;
  headers = new Headers({ 'Content-type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}
  getEquipments() {
    return this.http.get(this.baseUrl, this.options).map((response: Response) => {
      //   console.log(response.json());
      return response.json();
    });
  }
  addEquipment(model: any) {
    return this.http
      .post(this.baseUrl + 'new', model, this.options)
      .map((response: Response) => {
      });
  }
  updateEquipment(model: any) {
    return this.http
      .post(this.baseUrl + 'update', model, this.options)
      .map((response: Response) => {
      });
  }
}
