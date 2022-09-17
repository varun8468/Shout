import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { share } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedin: boolean;
  constructor(private sharedService: SharedService, public router:Router) {

   }

  ngOnInit(): void {
    this.sharedService.isLoggedin.subscribe(isLoggedin => this.isLoggedin = isLoggedin);
  }

  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.sharedService.setLogin(false);
    this.router.navigate(['home']);
  }




}
