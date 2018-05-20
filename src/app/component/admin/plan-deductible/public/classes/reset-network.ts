export class ResetNetwork {
constructor(public Obj,public isSubmit){

}
  commonSet(){
    this.Obj.common=!this.Obj.common;
    this.Obj.commonVal=(this.Obj.common==false)?"":this.Obj.commonVal;
    this.Obj.commonVal1=(this.Obj.common==false)?"":this.Obj.commonVal1;
  };
  inNetworkSet(){
    this.Obj.inNetwork=!this.Obj.inNetwork;
    this.Obj.inNetworkVal=(this.Obj.inNetwork==false)?"":this.Obj.inNetworkVal;
    this.Obj.inNetworkVal1=(this.Obj.inNetwork==false)?"":this.Obj.inNetworkVal1;
  }
  outOfNetworkSet(){
    this.Obj.outOfNetwork=!this.Obj.outOfNetwork;
    this.Obj.outOfNetworkVal=(this.Obj.outOfNetwork==false)?"":this.Obj.outOfNetworkVal;
    this.Obj.outOfNetworkVal1=(this.Obj.outOfNetwork==false)?"":this.Obj.outOfNetworkVal1;
  }
}
