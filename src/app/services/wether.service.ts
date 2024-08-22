import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WetherService {
  wetherUrl:string='http://localhost:3000/api/weather'

  constructor(private http:HttpClient) { }
  search(obj: any){
    return this.http.post<{weather:any}>(this.wetherUrl,obj);
  
  }
}
