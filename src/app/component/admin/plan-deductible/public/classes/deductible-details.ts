import {TemplateModify} from "./template-modify";
export class DeductibleDetails extends TemplateModify {

  Obj:any={
    "individualAmt":"",
    "level":"",
    "familyAmt":"",
    "inNetwork":"",
    "deductible":false,
    "copay":false,
    "accFee":false,
    "excludes":false,
    "medicalCopay":false,
    "rxCopay":false,
    "balaceBill":false,
    "nonCoveredSev":false

  };
constructor(obj,public isSubmit,public currentIndex){
  super(obj,isSubmit,currentIndex);
  Object.assign(this.Obj, obj);
}
resetDeductibleDetails(){
  this.Obj={
    "individualAmt":"",
    "level":"",
    "familyAmt":"",
    "inNetwork":"",
    "deductible":false,
    "copay":false,
    "accFee":false,
    "excludes":false,
    "medicalCopay":false,
    "rxCopay":false,
    "balaceBill":false,
    "nonCoveredSev":false
  };
  this.currentIndex == -1;
  this.isSubmit=false;
}
}
