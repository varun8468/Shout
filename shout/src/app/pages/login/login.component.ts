import { SharedService } from './../../services/shared.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, NgForm, Validators, FormBuilder} from '@angular/forms'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  token:any;
  user:any;
  isLoggedin:boolean;
  email: string = "";
  password: string = "";
  allUsers:any;

  submitted = false;
  form: any;
  imagePath = "assets/shouts/login.png"
  constructor(private formBuilder:FormBuilder,public router:Router, private userService: UserService, private sharedService: SharedService){
    this.loginForm=formBuilder.group({
    email: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required, Validators.maxLength(15)]),

    })
  }
  ngOnInit(): void {
    this.sharedService.isLoggedin.subscribe(isLoggedin => this.isLoggedin = isLoggedin);
    this.userService.getAllUsers().subscribe(res => this.allUsers = JSON.stringify (res));

  }
  onSubmit() {
    this.submitted=true;
    this.userService.login(this.loginForm.value).subscribe(res => {

      if(res!=0){
        this.sharedService.setLogin(true);
        this.user = res.user;
        this.token = res.token
        sessionStorage.setItem('user', JSON.stringify(this.user));
        sessionStorage.setItem('token', this.token);
        this.router.navigate(['main']);
      }else{
        alert("Anauthorized user");
      }
    })

  }


  get PostData(){
    return this.loginForm.controls;
  }


  }




