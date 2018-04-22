import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { EquipmentService } from '../_services/equipment.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-userReserve',
  templateUrl: './userReserve.component.html',
  styleUrls: ['./userReserve.component.css']
})
export class UserReserveComponent implements OnInit {

  token = localStorage.getItem('token');
  decoded: any = {};
  dtTrigger: Subject<any> = new Subject();
  equipments: any = {};
  model: any = {};
  user: any = {};
  constructor(
    private equipmentService: EquipmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.equipmentService.getEquipments().subscribe(data => {
      this.equipments = data;
      this.dtTrigger.next();
    }, error => {
      console.log(error);
    });
  }

  resv(id: any) {
    this.decoded = jwt_decode(this.token);
    this.model.Resv_by = this.decoded.nameid;
    // console.log(this.model);
    this.equipmentService.reserv(this.model)
    .subscribe(data => {
      location.reload();
    }, error => {});
  }

  logout() {
    localStorage.removeItem('token');
    this.router
          .navigateByUrl('/home', { skipLocationChange: true })
          .then(() => this.router.navigate(['home']));
    location.reload();
  }
}
