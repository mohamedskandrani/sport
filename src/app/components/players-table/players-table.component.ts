import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { playerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  T:any=[
  //   {id:1,Name:2,age:1,nbr:'est',position:'est'},
  // {id:2,Name:2,age:1,nbr:'est',position:'alt'},
  // {id:3,Name:2,age:2,nbr:'len',position:'ser'},
  // {id:4,Name:3,age:1,nbr:'est',position:'att'},
  ]

  constructor(
    private router:Router,
    private playerService: playerService
  ) { }

  ngOnInit(): void {
    this.playerService.getAllplayers().subscribe(
      (data) => {
        this.T = data.players
      }
    );
  }
  goToInfo(PlayerId:number){
    this.router.navigate([`playerInfo/${PlayerId}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`edit-player/${id}`]);
  }
  deletePlayer(id:any){
    this.playerService.deletePlayer(id).subscribe(
      (response)=>{
        console.log("here response from BE",response.isDeleted)
        if (response.isDeleted) {
          this.playerService.getAllplayers().subscribe((data)=>
            {
              this.T = data.players; 
            })
          
        }
      }
    )
  }

}
