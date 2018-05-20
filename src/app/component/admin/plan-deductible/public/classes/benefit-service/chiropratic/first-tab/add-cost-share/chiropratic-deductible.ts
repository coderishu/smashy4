import {ChriopraticTemplateModify} from "./chriopratic-template-modify";

export class ChiropraticDeductible extends ChriopraticTemplateModify{
  ChriopraticCopayObj:any={"deductibleNetworkVal":{id: "0", nService: "INN"},"level":"","member":"","family":""};

  constructor(obj,public isSubmitCostShare,public currentIndex,public tempNetwork){
    super(obj,isSubmitCostShare ,currentIndex,tempNetwork)
     Object.assign(this.ChriopraticCopayObj,obj);
  }


  resetDeductible(){
    this.ChriopraticCopayObj["level"]="";
    this.ChriopraticCopayObj["member"]="";
    this.ChriopraticCopayObj["family"]="";
    this.isSubmitCostShare=false;
     this.currentIndex=-1;
     this.tempNetwork={};
  }
}
