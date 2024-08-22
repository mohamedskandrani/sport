import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput:any;
  @Output() matchesToEmit:EventEmitter<any> = new EventEmitter();
  constructor(
    private matchService: MatchService,
  ) { }

  ngOnInit(): void {
  }
  scoreColor(a:number,b:number){
    if (a>b){
      return 'green'
    }
    else if(a<b){
      return 'red' 
    }
    else {
      return 'blue'
    }
  }
  deleteMatch(id: any) {
    this.matchService.deletematch(id).subscribe(
      (response) => {
        console.log('here response from BE', response.isDeleted);
        if (response.isDeleted) {
          this.matchService.getAllMatches().subscribe((data)=>{
            console.log('here data froma be',data.matches);
            this.matchesToEmit.emit(data.matches); 
        })
      }
  });
  }
}
