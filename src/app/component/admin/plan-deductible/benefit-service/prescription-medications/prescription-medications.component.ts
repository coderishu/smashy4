import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Tabbing} from "../../public/classes/tabbing";
import {HttpService} from "../../../../../provider/http-service.service";
import {StoreInfoService} from "../../../../../provider/store-info.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prescription-medications',
  templateUrl: './prescription-medications.component.html',
  styleUrls: ['./prescription-medications.component.css']
})
export class PrescriptionMedicationsComponent extends Tabbing implements  OnDestroy  {

  prescriptionMedicationsBuffer:any=[];
  benefitServices:Array<Object>;
  getRec:Array<Object>;
  netWorkInfo:Array<Object>;
  costShares:Array<Object>;
  isSubmit:boolean=false;

  Obj:any={
    "benefitCateType":"","medication":false,"presec":false,"demoapp":false,"chiropra":false,"customA2":false,"nonCpy":false,"customA":"","chiropratics":"","subApplicable":false,"chvm":false, "phymedicine":false,"copyPlan":false, "costShareVal":"","pcpCopy":false,"specialistCpy":false,"custom":false,"max":"","pcpCopyVal":"","specialistCpyVal":"",
    "filter1":false,"filter2":false,"filter3":false,"filter4":false,"filter5":false,"filter6":false,"filter7":false,
    "filter8":"","filter9":"","filter10":"","filter11":"","filter13":false,"filter14":false,"filter15":false,
    "filter16":false,"filter17":false,"filter18":false,"filter19":false,"filter20":false,"filter21":false,"filter22":false,
    "filter23":false,"filter24":false,"filter25":false,"filter26":false,"filter27":false,"filter28":false,"filter29":false
  }



  constructor(private httpService : HttpService ,public router:Router,public storeInfoService:StoreInfoService,private renderer: Renderer2) {
    super(storeInfoService,false);
    this.httpService.createPostRequest("ambulanService.json").subscribe(data => {
      this.costShares=data.benefitServices.costShareServices;
      this.netWorkInfo=data.benefitServices.netWorkInfo;
      this.getRec=data.benefitServices;
      console.log(this.getRec)

    });
    this.prescriptionMedicationsBuffer=(this.storeInfoService.getPrescriptionMedications().length==0)?[]:this.storeInfoService.getPrescriptionMedications();

  }

  ngOnDestroy()
  {
    this.storeInfoService.setPrescriptionMedications(this.prescriptionMedicationsBuffer);
  }

  prescription(valid){
this.isSubmit=true;
alert(valid)
  }
}
