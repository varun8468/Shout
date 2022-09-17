import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/services/friend.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss']
})
export class FriendRequestsComponent implements OnInit {
  userId: any;
  constructor(private friendService: FriendService, private http:HttpClient) { }
  requesters:any;
  ngOnInit(): void {
    var user = JSON.parse(sessionStorage.user);
    this.userId = user.id;
    this.friendService.getRequests(this.userId).subscribe(res => {
       this.requesters = res;
       console.log(this.requesters)
    });
  }
  accept(id:number, u:any, f:number, name:string){
    const data = {
      user_id : u,
      friend_id: f,
      status: 1
    }
    this.http.put<any>('http://localhost:8000/api/accept/'+id, data)
        .subscribe(res =>{
          alert(`You and ${name} are friends`);
          window.location.reload();
        });

  }
  reject(id:number, u:any, f:number){
    const data = {
      user_id : u,
      friend_id: f,
      status: 2
    }
    this.http.put<any>('http://localhost:8000/api/accept/'+id, data)
        .subscribe(res =>{
          window.location.reload();
        });

  }
}
