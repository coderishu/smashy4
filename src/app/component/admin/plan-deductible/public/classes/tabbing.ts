

export class Tabbing  {
  currentTabbing:number=0;
  currentCostShareActive:number=0;
  currentbeniFitTabThreeActive:number=0;
  custom:boolean=true;
  isShow:boolean=false;
  // showing:boolean=false;
  recordBuffer:any=[];
  coinsuranceRecordBuffer:any=[];
  costShares=[];
  // benefitSCostShare:any=[];
  bool:boolean=false;
  costShareSelected:any="";
  Obj:any={"pcpCopy":false,"specialistCpy":false,"custom":false,"pcpCopyVal":"","specialistCpyVal":""};

  constructor(public storeInfoService,public isSubmitCostShare)
  {
    
}
  CostShareactive(currentActive)
  {
    this.currentCostShareActive=currentActive;
  }

show()
{
  this.isShow=!this.isShow;
}
// pcpCopySet(){
//   this.Obj.pcpCopy=!this.Obj.pcpCopy;
//   alert(this.Obj.pcpCopy)
//   this.Obj.pcpCopyVal=(this.Obj.pcpCopy==false)?"":this.Obj.pcpCopyVal;
// }
  beniFitTabThree(currentActive)
  {
    this.currentbeniFitTabThreeActive=currentActive;
    this.isSubmitCostShare=false;
    if(currentActive==0){
      this.recordBuffer=this.storeInfoService.getdeductibleCostshare();
    }
    else  if(currentActive==1){
      this.coinsuranceRecordBuffer=this.storeInfoService.getCoinsuranceCostshare();
    }
    else  if(currentActive==2){
      this.recordBuffer=this.storeInfoService.getCoinsuranceCostshare();
    }
    else  if(currentActive==3)
    {
      this.recordBuffer=this.storeInfoService.getCoinsuranceCostshare();
    }else{
      this.recordBuffer=[];
    }
  }
  currentTab(currentIndex)
  {
    this.currentTabbing=currentIndex;
  }
  isEquivalent(collection,target)
  {
  this.bool=false;
  }
  filterCostShare(collection,target)
  {
    if(collection.find(o => o.costShareName === target['costShareName'])==undefined){
      collection.push({
        "costShareName":target.costShareName,
        "target":target,
        "deductible":[],
        "outofPocket":[],
        "copay":[],
        "coinsurance":[],
        "addCostShareQualifier":[]
      })
    }
    console.log(JSON.stringify(collection))

  }
}
