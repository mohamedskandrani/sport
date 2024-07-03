import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  // FormId
  matchForm!: FormGroup;
  //match object
  match: any = {};

  constructor(
    private mService:MatchService,
    private router:Router

  ) { }

  ngOnInit(): void { }
  addMatch() {
    console.log("Here match object", this.match);
    this.mService.addmatch(this.match).subscribe((response)=>{
      console.log("here response from BE",response.isAdded)
      this.router.navigate(['admin']);
    });

  }

}
