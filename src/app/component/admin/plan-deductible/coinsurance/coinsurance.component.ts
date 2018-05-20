import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Coinsurance} from "../public/classes/coinsurance";
import {StoreInfoService} from "../../../../provider/store-info.service";


@Component({
  selector: 'app-coinsurance',
  templateUrl: './coinsurance.component.html',
  styleUrls: ['./coinsurance.component.css']
})
export class CoinsuranceComponent extends Coinsurance implements OnInit {


constructor(public router:Router,public storeInfoService:StoreInfoService) {


 super({"inNetwork":true,"outOfNetwork":false,"inNetworkVal":"","inNetworkVal1":"","outOfNetworkVal":"","outOfNetworkVal1":""},false);
   if(Object.keys(this.storeInfoService.getCoinsurance()).length!=0){
    Object.assign(this.Obj, this.storeInfoService.getCoinsurance());

  }
}

  ngOnInit() {
   
   }

  saveCoinsurance(valid){
    this.isSubmit=true;
    if(valid){
      this.nextSec();
    }
    console.log(JSON.stringify(this.Obj))
  }
  nextSec(){
   this.storeInfoService.setCoinsurance(this.Obj);
    this.router.navigate(['/planDeductible/OutofPocket'])
  }

  reset(){
    this.resetObj()

  }
}
