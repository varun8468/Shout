import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  faLock = faLock;
  constructor() { }

  ngOnInit(): void {
  }
  forgot(forgotForm: NgForm): void{
    console.log(forgotForm);
  }
}
