import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-laboratory-services',
  templateUrl: './laboratory-services.component.html',
  styleUrls: ['./laboratory-services.component.css']
})
export class LaboratoryServicesComponent extends Tabbing implements  OnDestroy  {

  laboratoryServicesBuffer:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;
  isSubmit=false;


  Obj:any={
    "benefitCateType":"","demoapp":false,"chiropra":"","customA2":"","nonCpy":"","customA":"","chiropratics":"","subApplicable":"","chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":"","pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":""
  }


  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.laboratoryServicesBuffer=(this.storeInfoService.getLaboratoryServices().length==0)?[]:this.storeInfoService.getLaboratoryServices();

  }

  ngOnDestroy()
  {
    this.storeInfoService.setLaboratoryServices(this.laboratoryServicesBuffer);
  }
  laboratory(valid){
    this.isSubmit=true;
    alert(valid)
  }

}
