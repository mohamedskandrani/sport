import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  match: any={};
  matchForm!: FormGroup;
  id:any;

  constructor(
    private matchService:MatchService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.matchService.getMatchById(this.id).subscribe((data)=>{
      this.match=data.match;

    });
  }
  editMatch(): void {
    this.matchService.editmatch(this.match).subscribe(
      (response)=>{
        console.log('here response from BE',response.isEdited);
        this.router.navigate(['admin']);
      }
    );
}

}


