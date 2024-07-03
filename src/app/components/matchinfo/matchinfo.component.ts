import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css']
})
export class MatchinfoComponent implements OnInit {
  id: any;
  match: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService

  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        console.log("here response from BE ...", data.match);
        this.match = data.match
      }
    );
  }

}
