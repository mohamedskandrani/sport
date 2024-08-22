import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matchesTab:any =[];
  // = [
  //   { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: 'est', teamTwo: "ca" },
  //   { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: 'juv', teamTwo: "rom" },
  //   { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: 'rmd', teamTwo: "atm" },
  //   { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: 'cit', teamTwo: "liv" },
  // ]
  constructor(private mService:MatchService) { }

  ngOnInit(): void {
    this.mService.getAllMatches().subscribe(
      (response)=>{console.log("here response from BE", response.matches);
        this. matchesTab =response.matches}
    )};
    upDateMatches(T:any){
      this.matchesTab=T;
    }
  }
  
