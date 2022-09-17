import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  files:any
  fileToUpload : any;
  imagePath = 'http://127.0.0.1:8000/public/images/';
  imagePath1 = "../../../assets/shouts/upload.png" ;

  constructor(private postService: PostService, private userService: UserService, private formBuilder: FormBuilder) {



  }


  handleFileInput(event:any){
    this.fileToUpload =event.target.files[0];
    console.log(this.fileToUpload)
    const reader = new FileReader();
    reader.onload =(event:any) =>{
      this.imagePath1 =event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  onSubmit(description:any,image:any){
    this.postService.postFeed(description.value,this.fileToUpload).subscribe(
      data =>{
        console.log(data);
        description.value = null;
        image.value =null;
        alert("post added..!!")

      }
    )
  }



}
