import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UsersService } from '../_services/users.service';
import { NotifyService } from '../_services/notify.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {
  token = localStorage.getItem('token');
  decoded: any = {};
  logedin = false;
  admin = false;
  model: any = {};

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.model.Username = '';
    this.model.Password = '';
    if (this.token === null) {
      this.logedin = false;
      this.admin = false;
    }
    this.decoded = jwt_decode(this.token);
    if (this.decoded.role > 0) {
      this.logedin = true;
      this.admin = true;
    } else {
      this.logedin = true;
    }
  }

  login() {
    if (this.model.Username === '' || this.model.Password === '') {
      this.notifyService.error('Please enter Username and Password');
      return;
    }
    this.authService.login(this.model).subscribe(
      data => {
        this.notifyService.success('Loged in');
        this.decoded = jwt_decode(localStorage.getItem('token'));
        if (this.decoded.role > 0) {
          this.logedin = true;
          this.admin = true;
        } else {
          this.logedin = true;
        }
        this.router
          .navigateByUrl('/users', { skipLocationChange: true })
          .then(() => this.router.navigate(['home']));
      },
      error => {
        this.notifyService.error(
          'Log-in Fail <br>Please check Username and Password'
        );
        // console.log('failed to login');
        this.router
          .navigateByUrl('/home', { skipLocationChange: true })
          .then(() => this.router.navigate(['home']));
      }
    );
  }
  logout() {
    localStorage.removeItem('token');
    this.router
      .navigateByUrl('/home', { skipLocationChange: true })
      .then(() => this.router.navigate(['login']));
  }
}
