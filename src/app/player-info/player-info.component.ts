import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { playerService } from '../services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id:any;
  player:any;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: playerService
  ) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params['id'];
    this.playerService.getplayerById(this.id).subscribe(
      (data)=>{
        console.log("here response from BE ...",data.players);
        this.player=data.players;
      }
    );
  }
}