import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TransferDataService} from "../post-service/transfer-data.service";

@Component({
  selector: 'app-switch-categories',
  templateUrl: './switch-categories.component.html',
  styleUrls: ['./switch-categories.component.css']
})
export class SwitchCategoriesComponent implements OnInit{

  subscription_data: Subscription = new Subscription();
  prepinac : any = "all";
  constructor(private transferData:TransferDataService) {
  }
  ngOnInit() {
    this.subscription_data = this.transferData.modelDataCurrent.subscribe(data=>{
      this.prepinac=data.prepinac;
      console.log(this.prepinac)
    })
  }

}
