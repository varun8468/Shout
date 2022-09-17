import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagePath = "../../../assets/shouts/home.png" ;
  imagePath1 = "../../../assets/shouts/login.png" ;
  constructor() { }

  ngOnInit(): void {
  }

}
