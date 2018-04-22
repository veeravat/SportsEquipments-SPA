import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../_services/equipment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private equipmentService: EquipmentService
  ) { }
  data: any = {};

  ngOnInit() {
    this.equipmentService.getDashboard().subscribe(data => {
      // console.log(data);s
      this.data = data;
    }, error => {
      console.log(error);
    });
  }

}
