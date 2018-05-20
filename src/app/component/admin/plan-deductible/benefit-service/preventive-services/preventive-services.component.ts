import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";
import {HttpService} from "../../../../../provider/http-service.service";
import {Tabbing} from "../../public/classes/tabbing";

@Component({
  selector: 'app-preventive-services',
  templateUrl: './preventive-services.component.html',
  styleUrls: ['./preventive-services.component.css']
})
export class PreventiveServicesComponent extends Tabbing implements  OnDestroy  {

  preventiveServicesBuffer:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;
  isSubmit:boolean=false;

  Obj:any={
    "benefitCateType":"","customA2":"","demopre":"","nonCpy":"","customA":"","chiropratics":"","subApplicable":"","chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":"","pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":"",
    "prevent":false,"newlyprevent":false,"react":false,"customB":false,"customC":false,"customD":false,"customE":false,"customF":false,
    "prevent1":false,"prevent2":false,"prevent3":false,"prevent4":false
  }


  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.preventiveServicesBuffer=(this.storeInfoService.getPreventiveServices().length==0)?[]:this.storeInfoService.getPreventiveServices();

  }

  ngOnDestroy() {
    this.storeInfoService.setPreventiveServices(this.preventiveServicesBuffer);
  }
  preventive(valid)
  {
    this.isSubmit=true;
    alert(valid)
  }

}
