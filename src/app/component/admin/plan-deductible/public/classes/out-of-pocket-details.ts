import {TemplateModify} from "./template-modify";
export class OutOfPocketDetails extends TemplateModify {

  Obj:any={
    "inNetwork":'',
    "IndividualAmt":"",
    "familyAmt":"",
    "deductibleAmt":false,
    "accFeeAmt":false,
    "rxCopayOp":false,
    "coinsuranceCount":false,
    "copayCount":false,
    "lavel":'',
    "deductible":false,
    "copay":false,
    "accFee":false,
    "medicalCopay":false,
    "rxCopay":false,
    "balaceBill":false,
    "nonCoveredSev":false
  }
  constructor(obj,public isSubmit,public currentIndex){
    super(obj,isSubmit,currentIndex);
    Object.assign(this.Obj, obj);
  }
  resetOutOfPocketRec(){
    this.Obj={
      "inNetwork":'',
      "IndividualAmt":"",
      "familyAmt":"",
      "deductibleAmt":false,
      "accFeeAmt":false,
      "rxCopayOp":false,
      "coinsuranceCount":false,
      "copayCount":false,
      "lavel":'',
      "deductible":false,
      "copay":false,
      "accFee":false,
      "medicalCopay":false,
      "rxCopay":false,
      "balaceBill":false,
      "nonCoveredSev":false
    };

    this.isSubmit=false;
    this.currentIndex=-1;
  }
}
