import { Component, OnInit ,OnChanges,SimpleChanges,Input} from '@angular/core';
import {StoreInfoService} from "../../../../../../provider/store-info.service";
import {ActivatedRoute,Router} from "@angular/router";
import {HttpService} from "../../../../../../provider/http-service.service";
@Component({
  selector: 'app-inclusion',
  templateUrl: './inclusion.component.html',
  styleUrls: ['./inclusion.component.css']
})
export class InclusionComponent implements OnInit {
  @Input('shareRec') shareRec: Array<any> = [];
  @Input('selectedPrevious') selectedPrevious: Array<any> = [];
  inclusions:any=[];
  inclusionServicesBuffer:any=[];
  Obj:any={};
  inclusion:any=[];
  physicianServicesBuffer:Array<any>;
  currentUrl
  constructor(public storeInfoService:StoreInfoService,private router: Router,private httpService:HttpService,private route: ActivatedRoute) 
      {
        this.currentUrl = this.router.url;
       this.selectedPrevious=(this.storeInfoService.getInclusion().length==0)?[{"limitations":[],"inclusion":[]}]:this.storeInfoService.getInclusion();
        //this.physicianServicesBuffer=(this.storeInfoService.getPhysicianServices().length==0)?[]:this.storeInfoService.getPhysicianServices();
        // 
      }
  ngOnInit() 
  {
    this.inclusions=this.shareRec['inclusion']
    console.log(this.selectedPrevious)
   
  }

  toggleInclusionService(index)
  {
    if(index==-1)
    {
      this.selectedPrevious[0]['inclusion'].push(Object.assign({},this.Obj));
      console.log(console.log(JSON.stringify(this.selectedPrevious)))

    }
    else{
    console.log(this.inclusions[index]['checkedEx'])
    this.inclusions[index]['checkedEx'] = !this.inclusions[index]['checkedEx'];
    console.log(this.inclusions[index]['checkedEx'])
  }
}
  resetAddCostShare()
  {
    
  }
  saveCostShare()
  {
     console.log("data=="+JSON.stringify(this.inclusions))
   }
   ngOnDestroy()
   {
    this.storeInfoService.setInclusion(this.selectedPrevious)
  }
  }
     


