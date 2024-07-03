import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { playerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm!:FormGroup
player:any={};
  constructor(
    private playerService:playerService,
    private router:Router

  ) { }

  ngOnInit(): void {}
addPlayer(){
  console.log("here player object",this.player);
  this.playerService.addplayer(this.player).subscribe((response)=>{
    console.log('here response from BE',response);
    this.router.navigate(['admin'])
  });
}
}
