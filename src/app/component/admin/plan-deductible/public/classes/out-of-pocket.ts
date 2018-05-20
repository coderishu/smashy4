import {ResetNetwork} from "./reset-network";
export class OutOfPocket  extends ResetNetwork{
Obj:any={
  "common":true,
  "inNetwork":true,
  "outOfNetwork":false,
  "deductible":false,
  "accFee":false,
  "copay":false,
  "inNetworkVal":'',
  "inNetworkVal1":'',
  "outOfNetworkVal":'',
  "outOfNetworkVal1":'',
  "commonVal":'',
  "commonVal1":'',
}

constructor(obj,public isSubmit){
  super(obj,isSubmit);

  Object.assign(this.Obj, obj);
};
resetOutOfPocketRec(){
  this.Obj={
    "common":true,
    "inNetwork":true,
    "outOfNetwork":false,
    "deductible":false,
    "accFee":false,
    "copay":false,
    "inNetworkVal":'',
    "inNetworkVal1":'',
    "outOfNetworkVal":'',
    "outOfNetworkVal1":'',
    "commonVal":'',
    "commonVal1":'',
  };
  this.isSubmit=false;
};

}
