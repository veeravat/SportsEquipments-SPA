import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../_services/users.service';
import { EquipmentService } from '../_services/equipment.service';
import { Subject } from 'rxjs/Subject';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { NotifyService } from '../_services/notify.service';

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
  resv: any = {};
  dtTrigger: Subject<any> = new Subject();
  user: any = {};
  rentID: any;
  dataSent: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService,
    private equipmentService: EquipmentService,
    private notifyService: NotifyService
  ) {}
  faculty = [
    'คณะบัญชี',
    'คณะบริหารธุรกิจ',
    'คณะนิเทศศาสตร์',
    'คณะนิติศาสตร์',
    'คณะมนุษยศาสตร์ และการจัดการการท่องเที่ยว',
    'คณะเศรษฐศาสตร์และการลงทุน',
    'คณะเทคโนโลยีสารสนเทศและนวัตกรรม',
    'คณะศิลปกรรมศาสตร์',
    'คณะวิศวกรรมศาสตร์',
    'คณะสถาปัตยกรรมศาสตร์',
    'คณะการสร้างเจ้าของธุรกิจ และการบริหารกิจการ',
    'คณะดิจิทัลมีเดียและศิลปะภาพยนตร์',
    'วิทยาลัยนานาชาติ',
    'วิทยาลัยนานาชาติจีน'
  ];
  model: any = {};
  ngOnInit() {
    this.equipmentService.getEquipments().subscribe(
      data => {
        this.equipments = data;
        this.equipmentService.getResv().subscribe(
          dataResv => {
            this.resv = dataResv;
            this.dtTrigger.next();
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
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
            console.log(this.user);
            this.setData(data);
            if (this.user.rented > 0) {
              this.notifyService.warning('This user already rented an equipment');
            }
            if (this.user.reseverd > 0) {
              this.notifyService.info('This user already reseverd an equipment');
            }
          } else {
            this.notifyService.error('User not found in database please register');
            this.SIDText = ' ';
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
    this.SIDText = ' ';
    this.notifyService.success('User found !!');
    this.Fullname = data.firstname + ' ' + data.lastname;
    this.dataSent.Rent_by = data.id;
    // console.log(data);
  }
  register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe(data => {
      // console.log('logged in Successfully');
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['rent']));
    }, error => {
      // console.log('failed to login');
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['rent']));
    });
  }

  rent(id: any) {
    // console.log(id);
    jQuery(window).scrollTop(0);
    this.dataSent.E_ID = id;
    this.equipmentService.rentEquipment(this.dataSent)
    .subscribe(data => {
      this.notifyService.success('Rented success');
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['rent']));
    }, error => {
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['rent']));
    });
  }
  getResv(id: any) {
    this.equipmentService.getResvEquipment(id)
    .subscribe(data => {
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['rent']));
    }, error => {
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['rent']));
    });
  }
}
