export class PhysicianService {
  Obj:any={"pcpCopy":false,"specialistCpy":false,"custom":false,"pcpCopyVal":"","specialistCpyVal":""};
  physicianServicesBuffer:any=[];
  inclusion:any=[];
  isShow:boolean=false;
  constructor(obj,public isSubmit)
  {
    Object.assign(this.Obj, obj);
  }

  savePhysician(valid){
    this.isSubmit=true;
    alert(valid)
  }
  show(){
    //this.Obj.custom=!this.Obj.custom;
    this.isShow=!this.isShow;
    console.log(this.isShow)
  }


  pcpCopySet(){
    this.Obj.pcpCopy=!this.Obj.pcpCopy;
    this.Obj.pcpCopyVal=(this.Obj.pcpCopy==false)?"":this.Obj.pcpCopyVal;
  }
  specialistCpySet(){
    this.Obj.specialistCpy=!this.Obj.specialistCpy;
    this.Obj.specialistCpyVal=(this.Obj.specialistCpy==false)?"":this.Obj.specialistCpyVal;
  }

  reset(){
    this.Obj={"pcpCopy":false,"specialistCpy":false,"custom":false,"pcpCopyVal":"","specialistCpyVal":""};
  }

}
