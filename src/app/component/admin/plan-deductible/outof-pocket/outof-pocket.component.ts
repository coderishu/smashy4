import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OutOfPocket} from "../public/classes/out-of-pocket";
import {StoreInfoService} from "../../../../provider/store-info.service";
import {ResetNetwork} from "../public/classes/reset-network";

@Component({
  selector: 'app-outof-pocket',
  templateUrl: './outof-pocket.component.html',
  styleUrls: ['./outof-pocket.component.css']
})
export class OutofPocketComponent extends OutOfPocket  implements OnInit {

  constructor(public router:Router,public storeInfoService:StoreInfoService) {
    super({"common":true,"inNetwork":true, "outOfNetwork":false,"deductible":false,"accFee":false,"copay":false,"inNetworkVal":'',"inNetworkVal1":'',"outOfNetworkVal":'',"outOfNetworkVal1":'',"commonVal":'',"commonVal1":''},false);
    if(Object.keys(this.storeInfoService.getOutOfPocket()).length!=0){
      Object.assign(this.Obj, this.storeInfoService.getOutOfPocket());
    }

  }

  ngOnInit() {
  }
  saveOutOfPocket(valid){
    this.isSubmit=true;
    if(valid){
    this.nextSec()
    }
  };
  nextSec(){
     this.storeInfoService.setOutOfPocket(this.Obj);
    this.router.navigate(['/planDeductible/copay']);
  }
 s
}
