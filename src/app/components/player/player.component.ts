import { Component, Input, OnInit } from '@angular/core';
import { playerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerInput:any;

  constructor() { }

  ngOnInit(): void {
  }

}
