import {TemplateModify} from "./template-modify";
export class Copay extends TemplateModify {
  Obj:any={
    "inNetwork":"",
    "copayType":"",
    "amount":"",
    "timePeriod":"",
    "addQty":"",
    "level":"",
    "accFee":false,
    "applies":false
  };
  constructor(obj,public isSubmit,public currentIndex){

    super(obj,isSubmit,currentIndex);
    Object.assign(this.Obj, obj)
  }
  resetCopay(){
    this.Obj={
      "inNetwork":"",
      "copayType":"",
      "amount":"",
      "timePeriod":"",
      "addQty":"",
      "level":"",
      "accFee":false,
      "applies":false
    };
    this.currentIndex == -1;
    this.isSubmit=false;
  }
}
