import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import { EquipmentService } from '../_services/equipment.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
  model: any = {};
  status = false;
  dtTrigger: Subject<any> = new Subject();
  equipments: any = {};
  selectedID;
  modal: any = {};
  editname = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipmentService: EquipmentService
  ) {}

  ngOnInit() {
    this.equipmentService.getEquipments().subscribe(data => {
      this.equipments = data;
      this.dtTrigger.next();
    }, error => {
      console.log(error);
    });
  }
  addEquipment() {
    console.log(this.model);
    this.equipmentService.addEquipment(this.model).subscribe(data => {
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['equipments']));
    }, error => {
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['equipments']));
    });
  }

  updateEquipment() {
    this.model.e_id = this.modal.E_ID;
    console.log(this.model);
    this.equipmentService.updateEquipment(this.model).subscribe(data => {
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['equipments']));
    }, error => {
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['equipments']));
    });
  }

  setID(id) {
    console.log(id);
    this.modal.header = id.e_name;
    this.modal.total = id.e_total;
    this.modal.E_ID = id.e_ID;
    this.model.e_name = id.e_name;
    this.model.e_total = id.e_total;

  }

  adjustValue(value) {
    let res = Number(this.model.e_total) + Number(value);
    // console.log(this.modal.total + ' + ' + value + ' = ' + res );
    if (res < 0) {
      res = 0;
    }
    this.modal.total = res;
    this.model.e_total = res;

  }
}
