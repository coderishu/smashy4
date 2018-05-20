import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";
import {HttpService} from "../../../../../provider/http-service.service";
import {Tabbing} from "../../public/classes/tabbing";

@Component({
  selector: 'app-professional-services',
  templateUrl: './professional-services.component.html',
  styleUrls: ['./professional-services.component.css']
})
export class ProfessionalServicesComponent extends Tabbing implements  OnDestroy {
  professionalServicesBuffer:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;

  isSubmit:boolean=false;


  Obj:any={
    "customA":"","chiropratics":"","subApplicable":"","chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":"","pcpCopy":false
  }


  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.professionalServicesBuffer=(this.storeInfoService.getProfessionalServices().length==0)?[]:this.storeInfoService.getProfessionalServices();

  }
  saveProfessional(valid)
  {
    this.isSubmit=true;
    alert(valid)
  }
  ngOnDestroy() {
    this.storeInfoService.setProfessionalServices(this.professionalServicesBuffer);
  }

}
