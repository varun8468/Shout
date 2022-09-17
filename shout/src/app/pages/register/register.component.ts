import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, FormBuilder} from '@angular/forms'

import { User } from 'src/app/models/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  imagePath = "../../../assets/shouts/home.png" ;
  signupForm:FormGroup;
    name:string="";
    gender:string="";
    dob:string="";
    email:string="";
    password:string="";
    city:string="";
    submitted=false;
    form:any;
  ngOnInit(): void {
  }
  constructor(private formBuilder:FormBuilder, private UserService: UserService, private router: Router){
    this.signupForm=formBuilder.group({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.maxLength(15)]),
    gender: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required])
    })
  }

  onSubmit() {
    this.submitted=true;
    console.log(this.signupForm.value);
    this.UserService.registerUser(this.signupForm.value).subscribe(res => {
      console.log(res);
      alert("user registered..")

      this.router.navigate(['home'])
    });

  }

  get PostData(){
    return this.signupForm.controls;}
}
