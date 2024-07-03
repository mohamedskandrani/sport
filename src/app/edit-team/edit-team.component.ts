import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teamService } from '../services/team.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  team: any={};
  teamForm!: FormGroup;
  id:any;

  constructor(
    private teamService:teamService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.teamService.getteamById(this.id).subscribe((data) => {
      console.log('Response from backend:', data.teams); // Correction de la sortie console
      this.team = data.teams; // Affectation de l'équipe reçue depuis le service
    });
  }
  editTeam():void {
    this.teamService.editteam(this.team).subscribe((response)=>{
      console.log('here response from BE ',response.isEdited);
      this.router.navigate(['admin']);

    });
}

}
