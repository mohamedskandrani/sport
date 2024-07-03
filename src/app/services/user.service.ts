import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string='http://localhost:3000/api/users'

  constructor(private http:HttpClient) { }
  // login(user: any){
  //   return this.http.post(this.userUrl,user);}
  signUp(user: any){
    return this.http.post<{isAdded:boolean}>(this.userUrl+'/signUp',user);
  }
  logIn(user: any){
    return this.http.post<{msg:string;role:string}>(this.userUrl+'/login',user);
  }
}
