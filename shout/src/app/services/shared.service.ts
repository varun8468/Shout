import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private loggedinSource = new BehaviorSubject<boolean>(false);
  isLoggedin = this.loggedinSource.asObservable();

  constructor(){}

  setLogin(isLoggedin: boolean){
    this.loggedinSource.next(isLoggedin);
  }
}
