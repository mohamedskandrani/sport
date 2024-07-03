import { Component, OnInit } from '@angular/core';
import { playerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab: any = [
    // { id: 1, name: "messi", age: 37, nbr: 10, position: "att" },
    // { id: 2, name: "ronaldo", age: 40, nbr: 20, position: "def" },
    // { id: 3, name: "kaka", age: 30, nbr: 15, position: "mid" },
    // { id: 4, name: "zidane", age: 31, nbr: 30, position: "att" },
  ]

  constructor(private playerService: playerService) { }

  ngOnInit(): void {
    this.playerService.getAllplayers().subscribe(
      (response)=>{console.log("here response from BE", response.players);
        this. playersTab =response.players}
    );

  }

}
