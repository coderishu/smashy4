import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bariatric-surgery',
  templateUrl: './bariatric-surgery.component.html',
  styleUrls: ['./bariatric-surgery.component.css']
})
export class BariatricSurgeryComponent extends Tabbing implements  OnDestroy {
  bariatricSurgeryBuffer:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  isSubmit:boolean=false;
  costShares:Array<Object>;

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
    this.bariatricSurgeryBuffer=(this.storeInfoService.getBariatricSurgery().length==0)?[]:this.storeInfoService.getBariatricSurgery();

  }
  bariatric(valid)
  {
    this.isSubmit=true;
    if(valid)
    {
      this.isSubmit=false;
    }
    alert(valid)
  }
  ngOnDestroy()
   {
    this.storeInfoService.setBariatricSurgery(this.bariatricSurgeryBuffer);
  }

}

