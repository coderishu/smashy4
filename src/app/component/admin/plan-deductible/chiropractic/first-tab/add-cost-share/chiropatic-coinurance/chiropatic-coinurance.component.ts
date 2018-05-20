import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChriopraticCoisurance} from "../../../../public/classes/benefit-service/chiropratic/first-tab/add-cost-share/chriopratic-coisurance";
import {StoreInfoService} from "../../../../../../../provider/store-info.service";
import {BenefitCategoryPipe} from "../../../../public/pipes/benefit-category.pipe";

@Component({
  selector: 'app-chiropatic-coinurance',
  templateUrl: './chiropatic-coinurance.component.html',
  styleUrls: ['./chiropatic-coinurance.component.css']
})
export class ChiropaticCoinuranceComponent extends ChriopraticCoisurance implements OnInit , OnChanges  {

  constructor(public storeInfoService:StoreInfoService) {
    super({"coisuranceNetworkVal":{id: "0", nService: "INN"},"level":"","planpays":"","memberpays":""},false,-1,{});
  }

  ngOnInit() {
  }
  @Input('costShareSelected') costShareSelected:Array<any> = [];
  @Input('networkInfor') networkInfor:Array<any> = [];
  // @Input('selectedBService') selectedBService:Array<any> = [];
  @Input('selectedPrevious') selectedPrevious:Array<any> = [];

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "selectEntry" changed
    let thiss=this;
    //console.log(this.selectedBService !=undefined)
    if(this.costShareSelected !=undefined){
      this.recordCoisuranceBuffer=[];
      this.currentIndex = -1;

    }
    this.ChriopraticCoisuranceObj.coisuranceNetworkVal=(this.networkInfor.length==0)?{id: "0", nService: "INN"}:this.networkInfor[0];


  }

  saveCoinsurance(valid){

    this.isSubmitCostShare=true;
    if(valid){
      if(this.currentIndex==-1){
       // console.log(this.ChriopraticCoisuranceObj)
        if(this.fillDeductibleEntry(this.selectedPrevious,this.costShareSelected,'coinsurance',this.ChriopraticCoisuranceObj['coisuranceNetworkVal'])){
          let translatePipe= new BenefitCategoryPipe();
          this.recordCoisuranceBuffer=translatePipe.transform(this.recordCoisuranceBuffer,this.costShareSelected,this.ChriopraticCoisuranceObj['coisuranceNetworkVal'],this.selectedPrevious,'coinsurance')
        }else{
          alert("Please Select Benefit Category / Cost Share Name")
        }
      }
      else{
        this.editPrevious(this);
      }
      this.resetCoinsurance();

      console.log(JSON.stringify(this.selectedPrevious))
    }

  }

  editPrevious(thiss){
    let bool=true;
    this.editModuleEntry(thiss,this.selectedPrevious,this.costShareSelected,bool,'coinsurance',this.ChriopraticCoisuranceObj['coisuranceNetworkVal']).then((val)=>{
      let translatePipe= new BenefitCategoryPipe();
      this.recordCoisuranceBuffer=translatePipe.transform(this.recordCoisuranceBuffer,this.costShareSelected,this.ChriopraticCoisuranceObj.coisuranceNetworkVal,this.selectedPrevious,this.networkInfor,'coinsurance')
    })


  }
  // netWorkModify(e:any){
  //   this.tempNetwork=(this.currentIndex==-1)?{}:this.ChriopraticCoisuranceObj.coisuranceNetworkVal;
  //   Object.assign(this.tempNetwork,(this.currentIndex==-1)?{}:this.ChriopraticCoisuranceObj.coisuranceNetworkVal)
  //   this.ChriopraticCoisuranceObj.coisuranceNetworkVal=e;
  //   console.log(this.tempNetwork)
  //   console.log(this.ChriopraticCoisuranceObj.coisuranceNetworkVal)
  //   let translatePipe= new BenefitCategoryPipe();
  //   this.recordCoisuranceBuffer=translatePipe.transform(this.recordCoisuranceBuffer,this.selectedBService,this.costShareSelected,this.ChriopraticCoisuranceObj.coisuranceNetworkVal,this.selectedPrevious,this.networkInfor,'coinsurance')
  //
  // }
}



