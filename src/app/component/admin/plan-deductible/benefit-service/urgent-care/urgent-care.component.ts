import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-urgent-care',
  templateUrl: './urgent-care.component.html',
  styleUrls: ['./urgent-care.component.css']
})
export class UrgentCareComponent extends Tabbing implements  OnDestroy  {

  urgentCare:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;
  isSubmit:boolean=false;

  Obj:any={
    "benefitCateType":false,"demoapp":false,"chiropra":"","customA2":"","nonCpy":"","customA":false,"chiropratics":"","subApplicable":"","chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":false,"pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":"",
    "emerg":false,"emergency":""
  }

  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.urgentCare=(this.storeInfoService.getUrgentCare().length==0)?[]:this.storeInfoService.getUrgentCare();

  }

  ngOnDestroy()
  {
    this.storeInfoService.setUrgentCare(this.urgentCare);
  }

  urjentcare(valid)
  {
      this.isSubmit=true;
    alert(valid)
  }


}
