import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'physical-occupation',
  templateUrl: './physical-occupation.component.html',
  styleUrls: ['./physical-occupation.component.css']
})
export class PhysicalOccupation extends Tabbing implements  OnDestroy  {

  physicalOccupation:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;
  isSubmit=false;

  Obj:any={
    "benefitCateType":"","demoapp":false,"chiropra":"","customA2":"","nonCpy":false,"customA":"","chiropratics":false,"subApplicable":false,"chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":"","pcpCopy":false,"specialistCpy":false,"custom":false,"max":false,"pcpCopyVal":"","specialistCpyVal":""
  }


  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.physicalOccupation=(this.storeInfoService.getPhysicalOccupation().length==0)?[]:this.storeInfoService.getPhysicalOccupation();

  }
  ngOnDestroy()
  {
    this.storeInfoService.setPhysicalOccupation(this.physicalOccupation);
  }

  physicalOccup(valid)
  {
    this.isSubmit=true;
    alert(valid)
  }
}
