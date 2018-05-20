import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OutOfPocketDetails} from "../../public/classes/out-of-pocket-details";
import {StoreInfoService} from "../../../../../provider/store-info.service";

@Component({
  selector: 'app-outofpocket-details',
  templateUrl: './outofpocket-details.component.html',
  styleUrls: ['./outofpocket-details.component.css']
})
export class OutofpocketDetailsComponent extends OutOfPocketDetails  implements OnInit {

  constructor(public router:Router,public storeInfoService:StoreInfoService ) {
    super({"inNetwork":'',"IndividualAmt":"","familyAmt":"","deductibleAmt":false,"accFeeAmt":false,"rxCopayOp":false,"coinsuranceCount":false,"copayCount":false,"lavel":'',"deductible":false, "copay":false,"accFee":false, "medicalCopay":false,"rxCopay":false,"balaceBill":false,"nonCoveredSev":false},false,-1);
    if((this.storeInfoService.getOutofPocketDetails()).length!=0){
      this.recordBuffer=this.storeInfoService.getOutofPocketDetails();
    }
  }

  ngOnInit() {
  }
  saveOutOfPocketDetails(valid){
    this.isSubmit=true;
    if(valid){
      if(this.currentIndex==-1){
       this.recordBuffer.push(Object.assign({},this.Obj));
      }else{
        this.recordBuffer[this.currentIndex]=(Object.assign({},this.Obj));
      };
      this.storeInfoService.setoutofPocketDetails(this.recordBuffer);
      this.resetOutOfPocketRec();
    };

  };

}
