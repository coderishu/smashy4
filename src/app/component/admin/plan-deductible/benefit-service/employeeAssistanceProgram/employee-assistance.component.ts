import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'employee-assistance',
  templateUrl: './employee-assistance.component.html',
  styleUrls: ['./employee-assistance.component.css']
})
export class EmployeeAssistance extends Tabbing implements  OnDestroy  {

  EmployeeAssistance:any=[];
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
    this.EmployeeAssistance=(this.storeInfoService.getAssistance().length==0)?[]:this.storeInfoService.getAssistance();

  }

  ngOnDestroy()
  {
    this.storeInfoService.setAssistance(this.EmployeeAssistance);
  }
  employeeAssistance(valid)
  {
    this.isSubmit=true;
    alert(valid)
  }

}
