import {Component, OnInit} from '@angular/core';
import {CalendarService} from "../calendar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
 newdata:any;
 constructor(private _apiservice:CalendarService) {
 }
 ngOnInit() {
   this._apiservice.getdata().subscribe(res=>
   this.newdata=res)
 }
}
