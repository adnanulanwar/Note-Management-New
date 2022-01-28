import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public authenticated = false;
  public subscription: Subscription;

  constructor(public router: Router, private jwtHelper: JwtHelperService, private cs: CommonService) { }

  ngOnInit(): void {
    debugger
    this.subscription = this.cs.GetLoginInfo()
      .subscribe(response => {
        this.authenticated = response.isPermitted;

      });

    // const token = sessionStorage.getItem("jwt");
    // if (token && !this.jwtHelper.isTokenExpired(token))
    //   this.authenticated = true;
  }

  public Logout() {
    sessionStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
    this.authenticated = false;
  }



}
