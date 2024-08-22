import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  T:any=[
  // {id:1,Name:2,owner:1,foundation:'est'},
  // // {id:2,Name:'salah',owner:1,foundation:'est'},
  // // {id:3,Name:'ali',owner:1,foundation:'est'},
  // // {id:4,Name:'tras',owner:1,foundation:'est'},
  ]

  constructor(
    private router:Router,
    private teamService:teamService
  ) { }

  ngOnInit(): void {
    this.teamService.getAllteams().subscribe(
      (data) => {
        console.log("here teams", data.teams);
        
        this.T = data.teams
      }
    );
  }
  alertTeamInfo(teamId:number){
  alert(teamId)
}
goToTeamInfo(teamId:number){
  this.router.navigate([`teamInfo/${teamId}`]);
}
editTeam(teamId:number){
  this.router.navigate([`edit-team/${teamId}`]);
}
deletePlayer(id:any){
  this.teamService.deleteteam(id).subscribe(
    (response)=>{
      console.log("here response from BE",response.isDeleted)
      if (response.isDeleted) {
        this.teamService.getAllteams().subscribe((data)=>
          {
            this.T = data.teams; 
          })
        
      }
    }
  )
}
}
