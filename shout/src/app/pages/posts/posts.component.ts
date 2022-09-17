import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  imagePath='http://127.0.0.1:8000/public/images/';
  username:string;
  user:any;
  userId:number;
  userName:any;
  constructor(private postService: PostService, private report: ReportsService) { }

  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.user);
    this.userId = user.id;

    console.log(this.userId);

     this.postService.getPosts(this.userId).subscribe(res =>{
      this.posts = res;
      console.log(this.posts);

      for(let i = 0;i < this.posts.length;i++){
        var name = this.posts[i].name;
        // console.log(name);
      }

    })
  }
  addReport(reportForm: NgForm, pId: number, reported:number){
    const data = {
      reported_user:reported,
      reporter_user:this.userId,
      post_id: pId,
      issue: reportForm.value.issue
    }
    this.report.addReport(data).subscribe(res =>{
      console.log(res);
      alert("Reported to the admin..")
      reportForm.reset();
    });
  }

  }



