import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentService } from '../_services/equipment.service';
import { Subject } from 'rxjs/Subject';
import { NotifyService } from '../_services/notify.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-EquipInUse',
  templateUrl: './EquipInUse.component.html',
  styleUrls: ['./EquipInUse.component.css']
})
export class EquipInUseComponent implements OnInit {

  model: any = {};
  status = false;
  dtTrigger: Subject<any> = new Subject();
  inuse: any = {};
  selectedID;
  editname = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipmentService: EquipmentService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.equipmentService.getRent().subscribe(data => {
      this.inuse = data;
      // console.log(data);
      this.dtTrigger.next();
    }, error => {
      console.log(error);
    });
  }

  return() {
    this.equipmentService.return(this.model)
    .subscribe(data => {
      this.notifyService.success('Return successfully');
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['inuse']));
    }, error => {
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['inuse']));
    });

  }
}
