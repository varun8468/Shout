import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private HttpClient: HttpClient) { }

  getRequests(id:any){
    return this.HttpClient.get('http://localhost:8000/api/friendRequest/'+id);
  }

  addAsFriend(data:any){
    return this.HttpClient.post('http://localhost:8000/api/add_friend/', data);
  }


}
