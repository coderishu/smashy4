import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {HttpService} from "../../../provider/http-service.service";
import {Router, ActivatedRoute} from "@angular/router";
import {StoreInfoService} from "../../../provider/store-info.service";

@Component({
  selector: 'app-plan-config',
  templateUrl: './plan-config.component.html',
  styleUrls: ['./plan-config.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlanConfigComponent implements OnInit {
  copayPlanType=[];
  gfType=[];
  suite=[];
  planCovarageType=[];
  fundingType=[];
  providerNetwork=[];
   isSubmit:boolean=false;

  Obj={
    "copayPlanType":'',
    "gfType":'',
    "suite":'',
    "planCovarageType":'',
    "fundingType":'',
    "providerNetwork":'',

  };
  constructor(private route: ActivatedRoute,private httpService:HttpService,private router:Router,private storeInfoService:StoreInfoService ) {
    this.httpService.createPostRequest("planConfig.json").subscribe(data => {

      this.copayPlanType = data.planConfig.copayPlanType;
      this.gfType = data.planConfig.gfType;
      this.suite = data.planConfig.suite;
      this.planCovarageType = data.planConfig.planCovarageType;
      this.fundingType = data.planConfig.fundingType;
      this.providerNetwork = data.planConfig.providerNetwork;




      console.log(JSON.stringify(this.Obj))

    });
  }
  ngOnInit() {
  }
  planConfig(valid){
  this.isSubmit = true;
   if(valid){
     this.storeInfoService.setplanConfig(this.Obj);
    this.router.navigate(['/planDeductible/deductible'], { relativeTo: this.route });
   }
  console.log(JSON.stringify(this.Obj))
  }

  reset(){
     this.isSubmit=false;

  this.Obj={
    "copayPlanType":'',
    "gfType":'',
    "suite":'',
    "planCovarageType":'',
    "fundingType":'',
    "providerNetwork":'',
  };
    this.storeInfoService.setplanConfig(this.Obj);
  };
  }
