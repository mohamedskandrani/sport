import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  researchForm!: FormGroup;

  T: any = []


  constructor(private formBuilder: FormBuilder,
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.researchForm = this.formBuilder.group({
      score1: ['', [Validators.required]],
      score2: ['', [Validators.required]],
    });
  }
  research() {
    console.log('here object', this.researchForm.value);
    this.matchService.research(this.researchForm.value).subscribe((data) => {
      console.log('here matches from BE', data.res);
      this.T = data.res;
    })
  }
}


