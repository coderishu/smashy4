import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {HttpService} from "../../../provider/http-service.service";

import {Router} from "@angular/router";

import {StoreInfoService} from "../../../provider/store-info.service";

const now = new Date();

@Component({
  selector: 'app-plan-info',
  templateUrl: './plan-info.component.html',
  styleUrls: ['./plan-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlanInfoComponent implements OnInit {
  planType=[];
  renewalType=[];
  segmentType=[];
  benefitPeriod=[];
  planStateType=[];
  benefitPlanName:'';
  tMonthCPeriod:boolean=false;

  date: {year: number, month: number};

  Obj={
    "planType":'',
    "renewalType":'',
    "segmentType":'',
    "benefitPeriod":'',
    "planStateType":'',
    "benefitPlanName":'',

  };

  isSubmit:boolean=false;
  check=false;
  constructor(private httpService:HttpService,public router:Router,private storeInfoService:StoreInfoService) {
    this.httpService.createPostRequest("planInfo.json").subscribe(data=>{
      this.planType=data.planInfo.planType;
      this.renewalType=data.planInfo.renewalType;
      this.segmentType=data.planInfo.segmentType;
      this.benefitPeriod=data.planInfo.benefitPeriod;
      this.planStateType=data.planInfo.planStateType;
   console.log(JSON.stringify(this.Obj))

    });
  }

  ngOnInit() {

  }

  ;
  submitForm(valid){
  this.isSubmit = true;
   if(valid){
     this.Obj["tMonthCPeriod"]=this.tMonthCPeriod;
     this.storeInfoService.setplanInfo(this.Obj);
     this.router.navigate(['/planconfig']);
   }
  console.log(JSON.stringify(this.Obj))
  }
  reset(){
  this.Obj={
    "planType":'',
    "renewalType":'',
    "segmentType":'',
    "benefitPeriod":'',
    "planStateType":'',
    "benefitPlanName":'',
  };
    this.tMonthCPeriod=false;
    this.storeInfoService.setplanInfo(this.Obj);
  this.isSubmit=false;
  }
}
