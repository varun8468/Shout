import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FriendService } from 'src/app/services/friend.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  users:any;
  requestedFriend:any;
  requester:any;
  isFriend: boolean = false;
  isAuthenticated : boolean ;
  constructor(private userService: UserService, private friendService:FriendService) { }

  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.user);
    this.requester = user.id;
    this.userService.getUsers(this.requester).subscribe(res => {
      this.users = res;
    })

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
