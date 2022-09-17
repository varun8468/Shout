import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { FriendService } from 'src/app/services/friend.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  posts: any;
  post:any;
  user:any;
  searchedUser:any;
  username:string;
  isFriend: boolean = false;
  requestedFriend:number;
  requester:number;

  constructor(private userService: UserService, private friendService:FriendService) {

  }


  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.user);
    this.username = this.user.name;
    this.requester = this.user.id
  }

  searchForm = new FormGroup({
    user: new FormControl('')
  })
  searchUser(){
    this.searchedUser = this.searchForm.value.user;
    this.userService.searchUser(this.searchedUser).subscribe(res => {
      this.searchedUser = res;
    });
  }
  addAsFriend(id: any, name:string){
    this.requestedFriend = id;
    const data = {
      friend_id : this.requestedFriend,
      user_id: this.requester
    }
    this.friendService.addAsFriend(data).subscribe(res => {
      console.log(res);
      alert(`Friend request send to ${name}`)
    })
  }



}
