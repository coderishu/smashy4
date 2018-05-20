import {Component, OnDestroy, Renderer2,ViewEncapsulation} from '@angular/core';
import {HttpService} from "../../../../provider/http-service.service";
import {Router} from "@angular/router";
import {StoreInfoService} from "../../../../provider/store-info.service";
import {Tabbing} from "../public/classes/tabbing";

@Component({
  selector: 'app-chiropractic',
  templateUrl: './chiropractic.component.html',
  styleUrls: ['./chiropractic.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ChiropracticComponent extends Tabbing implements  OnDestroy{
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  chiropracticServicesBuffer:any=[];

  costShareVal="";

  isSubmit:boolean=false;
 // isSubmitCostShare:boolean=false;
  currentIndex=-1;
  benefitCateType=""

  coinsuranceNetworkVal="";


  coinsuranceObj:any={
    coinsuranceNetworkVal:"",
    "lavel":"",
    planpays:"",
    memberpays:""
  }
  Obj:any={
    "benefitCateType":"","demoapp":"","chiropra":"","customA2":"","nonCpy":"","customA":"","chiropratics":"","subApplicable":"","chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":"","pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":""
  }
  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) 
  {
    super(storeInfoService,false);

    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;

    });
    this.chiropracticServicesBuffer=(this.storeInfoService.getChiropracticServices().length==0)?[]:this.storeInfoService.getChiropracticServices();
    this.renderer.addClass(document.body, 'width100');
  }

  saveCoinsurance(valid){
    this.isSubmitCostShare=true;
    if(valid )
    {
      console.log(JSON.stringify(this.coinsuranceObj))
      console.log(JSON.stringify(this.benefitCateType))
      console.log(JSON.stringify(this.costShareVal))
      // this.deductibleCostShare.push({"benefitCateType":this.Obj["benefitCateType"],"costShareVal":this.costShareVal,"deductibleObj":this.deductibleObj});
     try {
       if (this.currentIndex == -1) {
         this.coinsuranceRecordBuffer.push(Object.assign(<string>{}, {"benefitCateType": this.benefitCateType,"costShareVal":this.costShareVal,"coinsuranceObj":this.coinsuranceObj}));
         console.log(this.recordBuffer[0].deductibleObj.coinsuranceNetworkVal.nService)
       }
       else {
         this.coinsuranceRecordBuffer[this.currentIndex] = (Object.assign(<string>{}, { "benefitCateType": this.benefitCateType, "costShareVal": this.costShareVal,"coinsuranceObj": this.coinsuranceObj}))
       }
     }catch(ex){
        console.log(ex);
     }
      this.resetCoinsurance();
      console.log(JSON.stringify(this.coinsuranceRecordBuffer))
      this.storeInfoService.setCoinsuranceCostshare(this.coinsuranceRecordBuffer);

    }
  }
  
  pcpCopySet()
  {
    this.Obj.pcpCopy=!this.Obj.pcpCopy;
    this.Obj.pcpCopyVal=(this.Obj.pcpCopy==false)?"":this.Obj.pcpCopyVal;
  }
  resetCoinsurance(){
    this.coinsuranceObj={
      coinsuranceNetworkVal:"",
      "lavel":"",
      "planpays":"",
      "memberpays":""
    };
    this.currentIndex=-1;
    this.isSubmitCostShare=false;
  }
  editCoinsuranceTemplate(obj,index)
  {
    this.currentIndex=index;
    Object.assign( this.benefitCateType, obj.benefitCateType);
    Object.assign( this.costShareVal, obj.costShareVal);
    Object.assign( this.coinsuranceObj, obj.coinsuranceObj);

  }
  deleteCoinsuranceTemplate(obj,index){
    if(this.currentIndex==-1){
      this.coinsuranceRecordBuffer.splice(index, 1);
    }else{
      alert('Complete Edit Operation');
    }
  }
  ngOnDestroy() {
    this.storeInfoService.setChiropracticServices(this.chiropracticServicesBuffer)
    this.renderer.removeClass(document.body, 'width100');
  }
  saveChiro(valid)
  {
    this.isSubmit=true;
    if(valid)
    {
      this.isSubmit=false;
    }
    alert(valid)
  }
}
