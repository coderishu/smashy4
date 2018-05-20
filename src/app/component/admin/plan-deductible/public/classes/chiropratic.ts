export class Chiropratic {
  Obj:any={"cpyPlan":false,"subApplicable":false,"chiropratics":false,"customA":false,"nonCpy":false,"customA2":false,"maximumOf":false,"phyMedicine":false,"customA3":false,"maximumOfVal":"","maximumOfVal1":"","cpyPlanVal":""}
  constructor(obj,public isSubmit){
    Object.assign(this.Obj, obj);
  };
  resetChiropratic(){
    this.Obj={"cpyPlan":false,"subApplicable":false,"chiropratics":false,"customA":false,"nonCpy":false,"customA2":false,"maximumOf":false,"phyMedicine":false,"customA3":false,"maximumOfVal":"","maximumOfVal1":"","cpyPlanVal":""}
  }
}
