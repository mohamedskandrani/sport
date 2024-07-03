import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogsTab:any=[{description:"lorem",title:"croco",date:"20/05/2024" ,img:"assets/images/img_1.jpg"},
{description:"lorem salem",title:"med",date:"20/05/2023" ,img:"assets/images/img_2.jpg"},
{description:"ala ala",title:"ls",date:"20/05/2025" ,img:"assets/images/img_3.jpg"},
{description:"sali",title:"sali",date:"20/05/2022" ,img:"assets/images/person_1.jpg"},
]
  constructor() { }

  ngOnInit(): void {
  }

}
