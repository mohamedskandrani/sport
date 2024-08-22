import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { playerService } from 'src/app/services/player.service';
import { teamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm!: FormGroup
  player: any = {};
  tId:any;
  teamsTab:any = [];
  constructor(
    private playerService: playerService,
    private teamService: teamService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.teamService.getAllteams().subscribe((response) => {
      this.teamsTab = response.teams

    })
  }
  addPlayer() {
    console.log("here player object", this.player);
    this.player.teamId=this.tId;
    this.playerService.addplayer(this.player).subscribe((response) => {
      console.log('here response from BE', response.msg);
      this.router.navigate(['admin'])
    });
  }
  selectTeamId(evt:any){
    console.log("here team id", evt.target.value)
    this.tId=evt.target.value
  }
}
