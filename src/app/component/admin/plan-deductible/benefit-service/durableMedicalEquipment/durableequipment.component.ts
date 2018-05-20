import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'durable-equipment',
  templateUrl: './durableequipment.component.html',
  styleUrls: ['./durableequipment.component.css']
})
export class DurableEquipmentComponent extends Tabbing implements  OnDestroy  {

    durableequipment:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;
  isSubmit:boolean=false;

  Obj:any={
    "benefitCateType":false,"demoapp":false,"chiropra":"","customA2":"","nonCpy":"","customA":false,"chiropratics":"","subApplicable":"","chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":false,"pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":""
  }

  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;

    });
    this.durableequipment=(this.storeInfoService.getSpecialityMedications().length==0)?[]:this.storeInfoService.getSpecialityMedications();
  }

  ngOnDestroy()
  {
    this.storeInfoService.setSpecialityMedications(this.durableequipment);
  }

  Equipm(valid)
  {
    this.isSubmit=true;
    if(valid)
    {
      this.isSubmit=false;
    }
    alert(valid)
  }

}
