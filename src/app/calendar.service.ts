import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CalendarService {


  constructor(private _http:HttpClient) { }


  getdata(){
    return this._http.get("https://nameday.abalin.net/api/V1/today")
  }
}
