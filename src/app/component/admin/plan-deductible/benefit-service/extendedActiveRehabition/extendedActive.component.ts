import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'extendedactive',
  templateUrl: './extendedActive.component.html',
  styleUrls: ['./extendedActive.component.css']
})
export class ExtendedActive extends Tabbing implements  OnDestroy  {

  extendedBuffer:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;
  isSubmit=false;


  Obj:any={
    "benefitCateType":"","testingphase":false,"phase2":false,"phase3":"","phase4":false,"phase5":"","phase6":false,"phase8":false,"phase9":"","phase10":false,"phase11":"","phase7":"","motion":"","phase1":"","demoproject":false,"demoapp":false,"chiropra":"","customA2":"","nonCpy":"","customA":false,"chiropratics":"","subApplicable":"","activity":"","chvm":false, "phymedicine":false,"copyPlan":false, "extendedActive":false, "costShareVal":false,"pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":""
  }


  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.extendedBuffer=(this.storeInfoService.getExtendedActive().length==0)?[]:this.storeInfoService.getExtendedActive();

  }
  ngOnDestroy()
  {
    this.storeInfoService.setExtendedActive(this.extendedBuffer);
  }

  extendeActive(valid)
  {
    this.isSubmit=true;
    alert(valid)
  }

}
