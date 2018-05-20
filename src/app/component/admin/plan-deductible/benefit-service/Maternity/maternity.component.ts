import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'maternity',
  templateUrl: './maternity.component.html',
  styleUrls: ['./maternity.component.css']
})
export class Maternity extends Tabbing implements  OnDestroy  {

  maternityBuffer:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;
  isSubmit=false;


  Obj:any={
    "benefitCateType":"","demoapp":false,"chiropra":false,"customA2":"","nonCpy":"","customA":"","chiropratics":"","subApplicable":"","chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":"","pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":""
  }


  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.maternityBuffer=(this.storeInfoService.getMaternity().length==0)?[]:this.storeInfoService.getMaternity();

  }
  ngOnDestroy()
  {
    this.storeInfoService.setMaternity(this.maternityBuffer);
  }

  maternity(valid)
  {
    this.isSubmit=true;
    alert(valid)
  }

}
