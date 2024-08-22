import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WetherService } from 'src/app/services/wether.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm!:FormGroup
  weatherResponse:any;

  constructor(
    private formBuilder: FormBuilder,
    private wetherService:WetherService
  ) { }

  ngOnInit(): void {
    this.weatherForm = this.formBuilder.group({
            city: ['', [Validators.required]],
            
          });
        }
        search(){
          this.wetherService.search(this.weatherForm.value).subscribe((response)=>{
            console.log('here wether from BE',response);
            this.weatherResponse=response.weather;
          })
        }
  }
