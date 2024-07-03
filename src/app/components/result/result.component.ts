import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput:any;
  constructor() { }

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

}
