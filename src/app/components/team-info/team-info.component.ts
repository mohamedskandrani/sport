import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
id:any;
team:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: teamService
  ) { }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id']
    this.teamService.getteamById(this.id).subscribe(
      (data)=>{
        console.log("here response from BI",data.teams)
        this.team=data.teams;
      }
    )
  }

}
