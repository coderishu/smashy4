import {Component, OnInit,OnChanges, SimpleChanges, Input} from '@angular/core';
import {StoreInfoService} from "../../../../../../../provider/store-info.service";
import {ChriopraticOutofPocket} from "../../../../public/classes/benefit-service/chiropratic/first-tab/add-cost-share/chriopratic-outof-pocket";
import {BenefitCategoryPipe} from "../../../../public/pipes/benefit-category.pipe";
import {BenefitOutofPocketPipe} from "../../../../public/pipes/benefit-outof-pocket.pipe";


@Component({
  selector: 'app-chiropractic-outof-pocket',
  templateUrl: './chiropractic-outof-pocket.component.html',
  styleUrls: ['./chiropractic-outof-pocket.component.css']
})
export class ChiropracticOutofPocketComponent extends ChriopraticOutofPocket implements OnInit , OnChanges {




  constructor(public storeInfoService:StoreInfoService) {
    super({"outofPCNetworkVal":{id: "0", nService: "INN"},"level":"","member":"","family":""},false,-1,{});
    this.recordChriopraticBuffer=this.storeInfoService.getCoinsuranceOutofPocket();
  }

  ngOnInit() {

  }
  // @Input('selectEntry') selectEntry:Array<any> = [];
  // @Input('networkInfor') networkInfor:Array<any> = [];
  @Input('costShareSelected') costShareSelected:Array<any> = [];
  @Input('networkInfor') networkInfor:Array<any> = [];
  @Input('selectedBService') selectedBService:Array<any> = [];
  @Input('selectedPrevious') selectedPrevious:Array<any> = [];

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "selectEntry" changed
    let thiss=this;
    //console.log(this.selectedBService !=undefined)
    if(this.selectedBService !=undefined && this.costShareSelected !=undefined){
      this.recordChriopraticBuffer=[];
      this.currentIndex=-1;

    }
    this.ChriopraticOutofPocketObj.outofPCNetworkVal=(this.networkInfor.length==0)?{id: "0", nService: "INN"}:this.networkInfor[0];


  }
  saveOutofPocket(valid){


    this.isSubmitCostShare=true;
    if(valid){
      if(this.currentIndex==-1){
        if(this.fillDeductibleEntry(this.selectedPrevious,this.costShareSelected,'outofPocket',this.ChriopraticOutofPocketObj['outofPCNetworkVal'])){
          let translatePipe= new BenefitOutofPocketPipe();
          this.recordOutOfPocketBuffer=translatePipe.transform(this.recordOutOfPocketBuffer,this.costShareSelected,this.ChriopraticOutofPocketObj.outofPCNetworkVal,this.selectedPrevious,'outofPocket')
        }else{
          alert("Please Select Cost Share Name")
        }
      }
      else{
        this.editPrevious(this);
      }
      this.resetChiropraticPC();

     // console.log(JSON.stringify(this.selectedPrevious))
    }

  }
  editPrevious(thiss){
    let bool=true;
    this.editModuleEntry(thiss,this.selectedPrevious,this.costShareSelected,bool,'outofPocket',this.ChriopraticOutofPocketObj['outofPCNetworkVal']).then((val)=>{
      let translatePipe= new BenefitOutofPocketPipe();
      this.recordOutOfPocketBuffer=translatePipe.transform(this.recordChriopraticBuffer,this.selectedBService,this.costShareSelected,this.ChriopraticOutofPocketObj.outofPCNetworkVal,this.selectedPrevious,this.networkInfor,'outofPocket')
    })


  }
  // netWorkModify(e:any){
  //   this.tempNetwork=(this.currentIndex==-1)?{}:this.ChriopraticOutofPocketObj.outofPCNetworkVal;
  //   Object.assign(this.tempNetwork,(this.currentIndex==-1)?{}:this.ChriopraticOutofPocketObj.outofPCNetworkVal)
  //   this.ChriopraticOutofPocketObj.outofPCNetworkVal=e;
  //   console.log(this.tempNetwork)
  //   console.log(this.ChriopraticOutofPocketObj.outofPCNetworkVal)
  //   //setTimeout(()=>{
  //     let translatePipe= new BenefitOutofPocketPipe();
  //     this.recordOutOfPocketBuffer=translatePipe.transform(this.recordOutOfPocketBuffer,this.selectedBService,this.costShareSelected,this.ChriopraticOutofPocketObj.outofPCNetworkVal,this.selectedPrevious,this.networkInfor,'outofPocket')
  //  //console.log(JSON.stringify(this.recordOutOfPocketBuffer))
  //   //},1000)
  //
  //
  // }
}
