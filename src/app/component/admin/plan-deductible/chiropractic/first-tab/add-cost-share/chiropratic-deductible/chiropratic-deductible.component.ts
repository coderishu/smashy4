import { Component, OnInit,OnChanges,Input,SimpleChanges } from '@angular/core';
import {ChiropraticDeductible} from "../../../../public/classes/benefit-service/chiropratic/first-tab/add-cost-share/chiropratic-deductible";
import {StoreInfoService} from "../../../../../../../provider/store-info.service";
import {BenefitCategoryPipe} from "../../../../public/pipes/benefit-category.pipe";

@Component({
  selector: 'app-chiropratic-deductible',
  templateUrl: './chiropratic-deductible.component.html',
  styleUrls: ['./chiropratic-deductibles.component.css']
})
export class ChiropraticDeductibleComponent extends  ChiropraticDeductible implements OnInit ,OnChanges {
  bool:boolean=false;
  constructor(public storeInfoService:StoreInfoService) {
    super({"deductibleNetworkVal":{id: "0", nService: "INN"},"level":"","member":"","family":""},false,-1,{});
  }


  @Input('costShareSelected') costShareSelected:Array<any> = [];
  @Input('networkInfor') networkInfor:Array<any> = [];

  @Input('selectedPrevious') selectedPrevious:Array<any> = [];
  ngOnInit() 
  {

  }
  ngOnChanges(changes: SimpleChanges) {

       if( this.costShareSelected !=undefined){
         this.recordChriopraticBuffer=[];
         this.currentIndex=-1;
       }
    this.ChriopraticCopayObj.deductibleNetworkVal=(this.networkInfor.length==0)?{id: "0", nService: "INN"}:this.networkInfor[0];
  }

  saveDeductible(valid)
  {
    this.isSubmitCostShare=true;
    if(valid){
        if(this.currentIndex==-1){
          if(this.fillDeductibleEntry(this.selectedPrevious,this.costShareSelected,'deductible',this.ChriopraticCopayObj['deductibleNetworkVal'])){
            let translatePipe= new BenefitCategoryPipe();
           this.recordChriopraticBuffer=translatePipe.transform(this.recordChriopraticBuffer,this.costShareSelected,this.ChriopraticCopayObj.deductibleNetworkVal,this.selectedPrevious,'deductible')
          //console.log(this.recordChriopraticBuffer)
          }else{
            alert("Please Select Cost Share Name")
          }
        }
         else{
          this.editPrevious(this);
        }
        this.resetDeductible();
      console.log(JSON.stringify(this.selectedPrevious))
    }
  }

  editPrevious(thiss)
  {
  let bool=true;
  console.log(JSON.stringify(this.ChriopraticCopayObj['deductibleNetworkVal']))
    this.editModuleEntry(thiss,this.selectedPrevious,this.costShareSelected,bool,'deductible',this.ChriopraticCopayObj['deductibleNetworkVal']).then((val)=>{
    })
  }
  modifyNetwork(e)
  {
    console.log(JSON.stringify(e))
    this.ChriopraticCopayObj.deductibleNetworkVal=e;
    console.log(JSON.stringify(this.ChriopraticCopayObj.deductibleNetworkVal))
  }

}
