import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


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
  rentEquipment(model: any) {
    // console.log(model);
    return this.http
      .post(this.baseUrl + 'rent', model, this.options)
      .map((response: Response) => {
      });
  }

  getRent() {
    return this.http.get(this.baseUrl + 'inuse', this.options).map((response: Response) => {
      return response.json();
    });
  }
  getResv() {
    return this.http.get(this.baseUrl + 'reserv', this.options).map((response: Response) => {
      return response.json();
    });
  }

  return(model: any) {
    // console.log(model);
    return this.http
    .post(this.baseUrl + 'return', model.Rent_ID, this.options)
    .map((response: Response) => {
    });
  }

  reserv(model: any) {
    // console.log(model);
    return this.http
    .post(this.baseUrl + 'reserv', model, this.options)
    .map((response: Response) => {
    });
  }
  getResvEquipment(model: any) {
    // console.log(model);
    return this.http
      .put(this.baseUrl + 'reserv', model, this.options)
      .map((response: Response) => {
      });
  }

  getDashboard() {
    return this.http.get(this.baseUrl + 'dashboard', this.options).map((response: Response) => {
      return response.json();
    });
  }
}
