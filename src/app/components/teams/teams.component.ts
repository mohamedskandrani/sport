import { Component, OnInit } from '@angular/core';
import { teamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsTab:any=[]

  constructor( private teamService:teamService) { }

  ngOnInit(): void {
    this.teamService.getAllteams().subscribe(
      (data)=>{console.log("here response from BE", data.teams);
        this.teamsTab =data.teams}
    );
  }

}
