import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'skill-nursing',
  templateUrl: './skill-nursing.component.html',
  styleUrls: ['./skill-nursing.component.css']
})
export class SkillNursingComponent extends Tabbing implements  OnDestroy  {

  skillNursingBuffer:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  isSubmit:boolean = false;
  costShares:Array<Object>;
  Obj:any={
    "benefitCateType":false,"demoapp":false,"phase5":"","phase7":"","phase8":false,"phase9":"","phase10":false,"phase11":"","phase12":false,"phase13":"","phase14":false,"phase15":"","phase16":false,"phase17":"","phase18":false,"phase19":"","phase6":false,"chiropra":"","phase2":false,"skilnursing":"","customA2":"","nonCpy":"","customA":false,"chiropratics":"","subApplicable":"","chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":false,"pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":""
  }

  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.skillNursingBuffer=(this.storeInfoService.getSkillNursing().length==0)?[]:this.storeInfoService.getSkillNursing();

  }

  ngOnDestroy()
  {
    this.storeInfoService.setSkillNursing(this.skillNursingBuffer);
  }

  skillnursing(valid){
    this.isSubmit=true;
    if(valid)
    {
      this.isSubmit=false;
    }
    alert(valid)
  }

}
