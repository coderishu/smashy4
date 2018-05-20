import {TemplateModify} from "./template-modify";
export class CoinsuranceDetails extends TemplateModify {

  Obj:any={
    "inNetwork": "",
    "memberPays": "",
    "plamPays":"",
    "level": "",
    "deductible": false,
    "copay": false,
    "accFee":  false,
    "medicalCopay":  false,
    "rxCopay": false,
    "balanceBill":  false,
    "nonCoverSer": false
  };

  constructor(public obj,public isSubmit,public currentIndex){
    super(obj,isSubmit,currentIndex);
    Object.assign(this.Obj, obj)
  }
  getCoinsuranceDetails() {
    return this.Obj;
  }
  resetCoinuranceDetails(){
    this.Obj={
      "inNetwork": "",
      "memberPays": "",
      "plamPays":"",
      "level": "",
      "deductible": false,
      "copay": false,
      "accFee":  false,
      "medicalCopay":  false,
      "rxCopay": false,
      "balanceBill":  false,
      "nonCoverSer": false
    };
    this.currentIndex=-1;
    this.isSubmit=false;
  }
}
