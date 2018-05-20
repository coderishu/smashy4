
import {ResetNetwork} from "./reset-network";
export class Coinsurance extends ResetNetwork{
Obj:any={
  "custom":true,
  "inNetwork": true,
  "outOfNetwork": false,
  "inNetworkVal": '',
  "inNetworkVal1": '',
  "outOfNetworkVal":'',
  "outOfNetworkVal1": ''
};

  constructor(public obj,public isSubmit  ){
    super(obj,isSubmit);
    Object.assign(this.Obj, obj);

  }
  resetObj() {
    this.Obj = {
      "custom":true,
      "inNetwork": true,
      "outOfNetwork": false,
      "inNetworkVal": '',
      "inNetworkVal1": '',
      "outOfNetworkVal":'',
      "outOfNetworkVal1": ''
    }
     return this.Obj;
  }

}
