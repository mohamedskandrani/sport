import { Component, OnInit } from '@angular/core';
import { playerService } from '../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm!: FormGroup;
  player: any = {};
  id: any;

  constructor(
    private playerService: playerService,
    private router: Router,
    private activatedRoot: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoot.snapshot.params['id'];
    this.playerService.getplayerById(this.id).subscribe((data) => {
      this.player = data.players
    })
  }
  editPlayer(): void {
    this.playerService.editplayer(this.player).subscribe((response) =>
      {console.log('this is from BE', response.isEdited);
this.router.navigate(['admin']);

      }
    
    
    )
  }

}
