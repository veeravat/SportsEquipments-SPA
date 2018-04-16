import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { EquipmentService } from '../_services/equipment.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  SIDState = '';
  SIDText: any = 'Please input 10 digit student ID';
  SIDVAL = '';
  Fullname = '';
  equipments: any = {};
  dtTrigger: Subject<any> = new Subject();
  user: any = {};
  constructor(
    private usersService: UsersService,
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

  idSearch(input) {
    const text: string = input.value;
    if (input.value.length < 10) {
      this.SIDVAL = input.value;
      this.SIDState = 'has-warning';
      this.resetData();
    } else if (input.value.length > 10) {
      input.value = this.SIDVAL;
    } else {
      this.SIDVAL = input.value;
      this.SIDState = 'has-success';
      this.usersService.getUser(text).subscribe(
        data => {
          if (data) {
            this.user = data;
            this.setData(data);
          } else {
            this.SIDText = 'User not found in database please register [here]';
            this.SIDState = 'has-error';
          }
        },
        error => {}
      );
    }
  }

  resetData() {
    this.SIDText = 'Please input 10 digit student ID';
    this.Fullname = '';
  }

  setData(data) {
    this.SIDText = 'Found this user';
    this.Fullname = data.firstname + ' ' + data.lastname;
  }
}
