import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { teamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm!: FormGroup
  team: any = {};
  constructor(
    private teamService : teamService,
    private router:Router
   ) { }

  ngOnInit(): void { }
  addTeam() {
    console.log("here team object", this.team);
    this.teamService.addteam(this.team).subscribe((response)=>{
      console.log("here's response from BE",response);
      this.router.navigate(['admin']);
    });
  }
}
