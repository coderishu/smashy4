import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-outpatient-services',
  templateUrl: './outpatient-services.component.html',
  styleUrls: ['./outpatient-services.component.css']
})
export class OutpatientServicesComponent extends Tabbing implements  OnDestroy  {

  outpatientServices:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;

  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.outpatientServices=(this.storeInfoService.getOutPatientServices().length==0)?[]:this.storeInfoService.getOutPatientServices();

  }

  ngOnDestroy()
  {
    this.storeInfoService.setOutPatientServices(this.outpatientServices);
  }


}
