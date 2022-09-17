import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _postUrl = 'http://localhost:8000/api/posts'
  id: any;
  constructor(private httpClient:HttpClient) { }

  getPosts(id:Number){

    return this.httpClient.get('http://127.0.0.1:8000/api/posts/user_friend/'+id);
  }

  postFeed(description:any,image:any){
    var user = JSON.parse(sessionStorage.user);
    this.id = user.id;
    const endpoint = 'http://localhost:8000/api/posts';
    let formdata = new FormData();
    formdata.append('image', image);
    formdata.append('description',description);
    formdata.append('user_id',this.id);
    console.log(formdata);
    return this.httpClient.post(endpoint,formdata);
    
  }
}
