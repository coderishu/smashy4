import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CoinsuranceDetails} from "../../public/classes/coinsurance-details";
import {StoreInfoService} from "../../../../../provider/store-info.service";

@Component({
  selector: 'app-coinsurance-details',
  templateUrl: './coinsurance-details.component.html',
  styleUrls: ['./coinsurance-details.component.css']
})
export class CoinsuranceDetailsComponent extends CoinsuranceDetails implements OnInit {

  constructor(public router:Router,public storeInfoService:StoreInfoService) {
    super({"inNetwork": "","memberPays": "","plamPays":"", "level": "","deductible": false,"copay": false,"accFee":  false, "medicalCopay":  false,"rxCopay": false,"balanceBill":  false,"nonCoverSer": false},false,-1);
    if((this.storeInfoService.getCoinsuranceDetails()).length!=0){
      Object.assign(this.recordBuffer ,this.storeInfoService.getCoinsuranceDetails());
    }
  }

  ngOnInit() {
  }
  saveCoinurance(valid){
    this.isSubmit=true;
    if(valid){
     if(this.currentIndex==-1){
       this.recordBuffer.push(Object.assign({} ,this.Obj));

     }else{
       this.recordBuffer[this.currentIndex]=Object.assign({} ,this.Obj);
     }
      this.storeInfoService.setCoinsuranceDetails(this.recordBuffer);
     this.resetCoinuranceDetails();
    }
  };

}
