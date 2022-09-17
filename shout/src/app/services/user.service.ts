import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _loginUrl = 'http://localhost:8000/api/login'
  private _addFriendUrl = 'http://localhost:8000/api/add_friend'
  private _registerUrl = 'http://localhost:8000/api/register'
  constructor(private httpClient:HttpClient) { }

  getUsers(id:any){
    return this.httpClient.get('http://localhost:8000/api/other_users/'+id);
  }

  registerUser(data:any){
    return this.httpClient.post(this._registerUrl, data);
  }

  login(data:any){
    return this.httpClient.post<any>(this._loginUrl, data);
  }
  getFrindsOfUser(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/friends/user/'+id);
  }

  searchUser(name:string){
    return this.httpClient.get('http://localhost:8000/api/users/search/'+name);
  }

  getAllUsers(){
    return this.httpClient.get('http://localhost:8000/api/users');
  }

}
