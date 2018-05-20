import { Component, OnInit,ViewEncapsulation,ElementRef  } from '@angular/core';
import {StoreInfoService} from "../../provider/store-info.service";
import {Router} from "@angular/router";
import {HttpService} from "../../provider/http-service.service";

@Component({
  selector: 'app-pdfover-view',
  templateUrl: 'pdfover-view.component.html',
  styleUrls: ['pdfover-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PdfoverViewComponent implements OnInit {
doc;
  elRef: ElementRef

  planDeductibleObj={
    "planType":{"pName":""},
    "renewalType":'',
    "suite":{"sName":""},
    "segmentType":{"sName":""},
    "benefitPeriod":'',
    "planStateType":'',
    "benefitPlanName":'',
    "providerNetwork":{"pnName":""},
    "copayPlanType":{"cpName":""}
  };
  deductibleObj: any = {
    "common": false,
    "inNetwork": false,
    "outOfNetwork": false,
    "dualCreditPro": false,
    "seprateFMembers": false,
    "custom": false,
    "commonVal": '',
    "commonVal1": '',
    "inNetworkVal": '',
    "inNetworkVal1": '',
    "outOfNetworkVal": '',
    "outOfNetworkVal1": '',
  };
  coinsuranceObj={"custom":false,
    "inNetwork": false,
    "outOfNetwork": false,
    "inNetworkVal": '',
    "inNetworkVal1": '',
    "outOfNetworkVal":'',
    "outOfNetworkVal1": ''};
  outOfPocketObj:any={"inNetwork":false,"inNetworkVal":"","inNetworkVal1":"","outOfNetwork":false,"outOfNetworkVal":"","outOfNetworkVal1":"","common":false};
  chiropracticObj:any={"cpyPlan":false,"cpyPlanVal":"","subApplicable":false,"chiropratics":false,"nonCpy":false,"customA2":false,"maximumOf":false,"maximumOfVal":"","maximumOfVal1":"","phyMedicine":false,"customA3":""}
  physicianServices:any={"pcpCopy":false,"pcpCopyVal":"","specialistCpy":false,"specialistCpyVal":"","custom":false};
  constructor(public storeInfoService:StoreInfoService,public router:Router,public httpService:HttpService,elRef: ElementRef ) {
    this.elRef = elRef;
    if(Object.keys(this.storeInfoService.getSelectedPlanInfo()).length!=0){
      Object.assign(this.planDeductibleObj, this.storeInfoService.getSelectedPlanInfo());
    }
    if(Object.keys(this.storeInfoService.getDeductibleInfo()).length!=0){
      Object.assign(this.deductibleObj, this.storeInfoService.getDeductibleInfo());
    }
    if(Object.keys(this.storeInfoService.getCoinsurance()).length!=0){
      Object.assign(this.coinsuranceObj, this.storeInfoService.getCoinsurance());
    }
    if(Object.keys(this.storeInfoService.getOutOfPocket()).length!=0){
      Object.assign(this.outOfPocketObj, this.storeInfoService.getOutOfPocket());
    }
    if(Object.keys(this.storeInfoService.getChiropractic()).length!=0){
      Object.assign(this.chiropracticObj, this.storeInfoService.getChiropractic());
    }




  }

  ngOnInit() {
  }
  downloadPDF = function() {
    this.httpService.generatePDF({"data":this.elRef.nativeElement.innerHTML}).subscribe(data=>{
      console.log(data)
    })
    console.log(this.elRef.nativeElement.children)
    console.log(this.elRef.nativeElement.innerHTML)

  }
}
