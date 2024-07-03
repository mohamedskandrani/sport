import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class teamService {
  teamUrl: string='http://localhost:3000/api/teams';
  // team url=>BE server adress

  constructor(private http:HttpClient) { }


addteam(team: any){
  return this.http.post<{teamIsAded:boolean}>(this.teamUrl,team);

}
editteam(teamObj: any){
  return this.http.put<{isEdited:string}>(this.teamUrl,teamObj);

}
deleteteam(id: any){
  return this.http.delete<{isDeleted:boolean}>(`${this.teamUrl}/${id}`);

}
//response one object
getteamById(id: any){
  return this.http.get<{teams:any}>(`${this.teamUrl}/${id}`);

}
getAllteams(){
  return this.http.get<{teams:any}>(this.teamUrl);
}
}
