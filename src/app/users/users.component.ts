import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UsersService } from '../_services/users.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { NotifyService } from '../_services/notify.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  model: any = {};
  status = false;
  dtTrigger: Subject<any> = new Subject();
  @Input() valuesFromhome: any;
  users: any = {};
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
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

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
      this.dtTrigger.next();
    }, error => {
      console.log(error);
    });
  }

  register() {
    console.log(this.model);
    this.authService.register(this.model).subscribe(data => {
      this.notifyService.success('Added new user !!');
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['users']));
    }, error => {
      this.notifyService.error('Cannot add this user !!');
      this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() =>
      this.router.navigate(['users']));
    });
  }
}
