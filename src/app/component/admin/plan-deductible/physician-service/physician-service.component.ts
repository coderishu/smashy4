import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhysicianService} from "../public/classes/physician-service";
import {Tabbing} from "../public/classes/tabbing";
import {StoreInfoService} from "../../../../provider/store-info.service";
import {HttpService} from "../../../../provider/http-service.service";

@Component({
  selector: 'app-physician-service',
  templateUrl: './physician-service.component.html',
  styleUrls: ['./physician-service.component.css']
})
export class PhysicianServiceComponent extends PhysicianService implements OnInit ,OnDestroy
{
  constructor(public storeInfoService:StoreInfoService,public httpService:HttpService)
  {
     super(
       {
         "pcpCopy":false,"specialistCpy":false,"custom":false,"pcpCopyVal":"","specialistCpyVal":""
       },false);
    // console.log(this.storeInfoService.getPhysicianServices().length)
      this.physicianServicesBuffer=(this.storeInfoService.getPhysicianServices().length==0)?[]:this.storeInfoService.getPhysicianServices();
      // this.inclusion=(this.storeInfoService.getInclusion().length==0)?[]:this.storeInfoService.getInclusion();

    //  this.physicianServicesBuffer = this.storeInfoService.getInclusion();
  }
  ngOnInit()
   {
   
  }
ngOnDestroy()
{
  this.storeInfoService.setPhysicianServices(this.physicianServicesBuffer)
    console.log(JSON.stringify(this.physicianServicesBuffer))
}

}
