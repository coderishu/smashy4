import {Component, Input, OnInit,OnChanges,SimpleChanges} from '@angular/core';
import {Tabbing} from "../../classes/tabbing";
import {StoreInfoService} from "../../../../../../provider/store-info.service";
import {HttpService} from "../../../../../../provider/http-service.service";

@Component({
  selector: 'app-bscommon-module',
  templateUrl: './bscommon-module.component.html',
  styleUrls: ['./bscommon-module.component.css']
})
export class BscommonModuleComponent extends Tabbing implements OnChanges,OnInit {
  netWorkInfo:Array<Object>;
  getRec:Array<Object>;
  @Input('BenefitServicesBuffer') public  benefitSCostShare:Array<any> = [];
  @Input('isShow') public  isShow:boolean;

  constructor(public storeInfoService:StoreInfoService,public httpService:HttpService) {

    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)
    });
  }
  costShareModify(e)
  {
    this.costShareSelected=e;
    console.log(this.costShareSelected)
    this.filterCostShare(this.benefitSCostShare,this.costShareSelected);
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
}
ngOnInit()
{
  if(this.benefitSCostShare.length==0)
  {
    this.benefitSCostShare.push({"limitations":[],"inclusion":[]});
   }
   console.log(this.benefitSCostShare.length)
   console.log(JSON.stringify(this.benefitSCostShare))
 // console.log(changes);
}


}
