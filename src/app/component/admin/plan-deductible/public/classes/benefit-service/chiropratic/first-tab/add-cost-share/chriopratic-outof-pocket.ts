


//import {ChriopraticTemplateModify} from "./chriopratic-template-modify";
import {ChriopraticOutofPocketModify} from "./chriopratic-out-of-pocket-modify";
export class ChriopraticOutofPocket extends ChriopraticOutofPocketModify {
  ChriopraticOutofPocketObj:any={"outofPCNetworkVal":{id: "0", nService: "INN"},"level":"","member":"","family":""};
  constructor(obj,public isSubmitCostShare,public currentIndex,public tempNetwork){
    super(obj,isSubmitCostShare ,currentIndex,tempNetwork)
    Object.assign(this.ChriopraticOutofPocketObj,obj);
  }
  resetChiropraticPC(){
    this.ChriopraticOutofPocketObj["level"]="";
    this.ChriopraticOutofPocketObj["member"]="";
    this.ChriopraticOutofPocketObj["family"]="";
    this.isSubmitCostShare=false;
    this.currentIndex=-1;
    this.tempNetwork={};
  }
}
