import {Component, Input, OnInit} from '@angular/core';
import {Limitations} from "../../../public/classes/benefit-service/chiropratic/limitations";
import {StoreInfoService} from "../../../../../../provider/store-info.service";
import {HttpService} from "../../../../../../provider/http-service.service";
import {BenefitCategoryPipe} from "../../../public/pipes/benefit-category.pipe";

@Component({
  selector: 'app-limitation',
  templateUrl: './limitation.component.html',
  styleUrls: ['./limitation.component.css']
})
export class LimitationComponent extends Limitations implements OnInit {
  @Input('selectedPrevious') selectedPrevious: Array<any> = [];
  @Input('costShareSelected') costShareSelected: Array<any> = [];

  constructor(public storeInfoService:StoreInfoService,private httpService:HttpService ) {
    super({"benefitCategory":"","network":"","limitationType":"","amtpercent":"","amtType":"","quantity":"","quantityQual":"","timePeriod":"","addQualifier":""},false,-1,{})
    //this.recordChriopraticBuffer=this.storeInfoService.getCoinsuranceLimitation();
    this.httpService.createPostRequest("limitationService.json").subscribe(data => {

      this.limitationTypes=data['limitation']['limitationType']
      this.quantityQualifiers=data['limitation']['quantityQualifier']
      this.timePeriods=data['limitation']['timePeriod']
      this.addQualifiers=data['limitation']['addQualifier']
      this.amountTypes=data['limitation']['amountType']
      this.benefitServices=data['limitation']['benefitServices']
      this.networks=data['limitation']['network']

    })
    // if(this.selectedPrevious.length==0){
    //   this.selectedPrevious.push({"limitations":[]})
    // }
  }
  saveLimitation(valid)
  {
    this.isSubmitCostShare=true;
    if(valid) 
    {
      console.log(JSON.stringify(this.selectedPrevious))
      if (this.currentIndex == -1) 
      {
        this.selectedPrevious[0]['limitations'].push(Object.assign({},this.Obj));
        console.log(console.log(JSON.stringify(this.selectedPrevious)))
      } else 
      {
           console.log(this.currentIndex)
           this.selectedPrevious[0]['limitations'][this.currentIndex]=Object.assign({},this.Obj)
        console.log(JSON.stringify(this.selectedPrevious))
      }
      this.resetLimitation();
    }
  }
  ngOnInit() {
  }

}
