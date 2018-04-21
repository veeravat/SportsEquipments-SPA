import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { UsersService } from '../_services/users.service';
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
  logedin = true;
  admin = false;
  model: any = {};

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.decoded = jwt_decode(this.token);
    if (this.decoded.role > 0) {
      this.logedin = true;
      this.admin = true;
    }

  }

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      data => {
        console.log(data);
        location.reload();

      },
      error => {
        console.log('failed to login');
        this.router
          .navigateByUrl('/home', { skipLocationChange: true })
          .then(() => this.router.navigate(['home']));
      }
    );
  }
}
