import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl: string = 'http://localhost:3000/api/match';
  // match url=>BE server adress

  constructor(private http: HttpClient) { }


  addmatch(match: any) {
    return this.http.post<{ isAdded: Boolean }>(this.matchUrl, match);

  }
  editmatch(matchObj: any) {
    return this.http.put<{ isEdited: string }>(this.matchUrl, matchObj);

  }
  deletematch(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.matchUrl}/${id}`);

  }
  //response one object
  getMatchById(id: any) {
    return this.http.get<{ match: any }>(`${this.matchUrl}/${id}`);

  }
  getAllMatches() {
    return this.http.get<{ matches: any }>(this.matchUrl);
  }
  research(obj: any) {
    return this.http.post<{ res: any }>(this.matchUrl + "/search", obj);

  }

}
