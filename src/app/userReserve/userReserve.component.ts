import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { EquipmentService } from '../_services/equipment.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-userReserve',
  templateUrl: './userReserve.component.html',
  styleUrls: ['./userReserve.component.css']
})
export class UserReserveComponent implements OnInit {

  dtTrigger: Subject<any> = new Subject();
  equipments: any = {};
  constructor(
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

}
