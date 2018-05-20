import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {DeductibleDetails} from "../../public/classes/deductible-details";

@Component({
  selector: 'app-deductible-details',
  templateUrl: './deductible-details.component.html',
  styleUrls: ['./deductible-details.component.css']
})
export class DeductibleDetailsComponent extends DeductibleDetails  {

    constructor(public router:Router,public storeInfoService:StoreInfoService) {
    super({"individualAmt":"","level":"","familyAmt":"","inNetwork":"", "deductible":false,"copay":false,"accFee":false,"excludes":false,"medicalCopay":false,"rxCopay":false,"balaceBill":false,"nonCoveredSev":false},false,-1);
       this.recordBuffer=this.storeInfoService.getDeductdetails();
  }


  submitdeductibleDetails(valid) {
    this.isSubmit = true;
    console.log(JSON.stringify(this.Obj));
    if (valid) {

        if (this.currentIndex == -1) {
          this.recordBuffer.push(Object.assign({}, this.Obj));

        }
        else {
          this.recordBuffer[this.currentIndex] = this.Obj;
          this.currentIndex = -1;
        }
        this.storeInfoService.setDeductdetails(this.recordBuffer)
        this.resetDeductibleDetails();

    }
  };


}
