import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class playerService {
  playerUrl: string = 'http://localhost:3000/api/players';
  // player url=>BE server adress

  constructor(private http: HttpClient) { }


  addplayer(player: any) {
    return this.http.post<{msg:string}>(this.playerUrl, player);

  }
  editplayer(playerObj: any) {
    return this.http.put<{isEdited:string}>(this.playerUrl, playerObj);

  }
  deletePlayer(id: any) {
    return this.http.delete<{isDeleted:boolean}>(`${this.playerUrl}/${id}`);

  }
  //response one object
  getplayerById(id: any) {
    return this.http.get<{players:any}>(`${this.playerUrl}/${id}`);

  }
  getAllplayers() {
    return this.http.get<{players:any}>(this.playerUrl);
  }
}



