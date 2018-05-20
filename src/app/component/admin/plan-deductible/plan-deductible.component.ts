import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {HttpService} from "../../../provider/http-service.service";
import {Router} from "@angular/router";
import {StoreInfoService} from "../../../provider/store-info.service";


@Component({
  selector: 'app-plan-deductible',
  templateUrl: './plan-deductible.component.html',
  styleUrls: ['./plan-deductible.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class PlanDeductibleComponent implements OnInit {
  bServices=[];
  gCosts=[];
  //planDeductibleObj:any={}
  planDeductibleObj= {
    "benefitPlanName":"",
    "segmentType":{sName:""},
    "providerNetwork":{pnName:""},
    "planType":{pName:""},
    "suite":{sName:""},
    "copayPlanType": {cpName:""}
  };



  constructor(private httpService:HttpService,public router:Router,private storeInfoService:StoreInfoService) {
    this.httpService.createPostRequest("planDeductiable.json").subscribe(data => {
      this.gCosts=data.planDeductible.globalCostShare;

      this.bServices=data.planDeductible.benefitServices;
    });
    Object.assign( this.planDeductibleObj, this.storeInfoService.getSelectedPlanInfo());
 //  this.planDeductibleObj= this.storeInfoService.getSelectedPlanInfo();

  }

  ngOnInit() {
  }

}
