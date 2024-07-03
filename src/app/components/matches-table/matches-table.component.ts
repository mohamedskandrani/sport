import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  T: any = [
  ]


  constructor(
    private router: Router,
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.T = data.matches
      }
    );
  }
  goToInfo(matchId: number) {
    alert(matchId);
    this.router.navigate([`matchInfo/${matchId}`]);
    //location replace (".....")
  }
  deleteMatch(id: any) {
    this.matchService.deletematch(id).subscribe(
      (response) => {
        console.log('here response from BE', response.isDeleted);
        if (response.isDeleted) {
          this.matchService.getAllMatches().subscribe((data) => {
            this.T = data.matches;
          })
        }
      }
    );
  }
  goToEdit(editId: number) {
    alert(editId);
    this.router.navigate([`edit-match/${editId}`]);
    //location replace (".....")
  }

  result(a: number, b: number, c: string) {
    if (a > b) {
      return [c + " win", 'green']
    } else if (a < b) {
      return [c + " lose", 'red']
    } else {
      return ["score null", 'blue']
    }
  }
}
