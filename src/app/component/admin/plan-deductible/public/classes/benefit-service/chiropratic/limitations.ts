
import {ChriopraticTemplateModify} from "./first-tab/add-cost-share/chriopratic-template-modify";
export class Limitations {
  limitationTypes:Array<Object>=[];
  quantityQualifiers:Array<Object>=[];
  timePeriods:Array<Object>=[];
  addQualifiers:Array<Object>=[];
  netWorkInfos:Array<Object>=[];
  amountTypes:Array<Object>=[];
  benefitServices:Array<Object>=[];
  networks:Array<Object>=[];
  bool:boolean=false;
  limitationBuffer=[];

  Obj:any={"benefitCategory":"","network":"","limitationType":"","amtpercent":"","amtType":"","quantity":"","quantityQual":"","timePeriod":"","addQualifier":""};
constructor(obj,public isSubmitCostShare,public currentIndex,public tempNetwork){
  Object.assign(this.Obj,obj);
}
  editChriopraticTemplate(obj,e,index){
    console.log("current index"+index)
    this.currentIndex=index;
    console.log(JSON.stringify(obj))
    Object.assign(this.Obj,obj)
  };

  deleteChriopraticTemplate(obj,index){
    if( this.currentIndex ==-1) {
      this.limitationBuffer.splice(index, 1);
    }else{
      alert('Complete Edit Operation');
    }
  };
resetLimitation(){
  this.Obj={"network":"","limitationType":"","amtpercent":"","amtType":"","quantity":"","quantityQual":"","timePeriod":"","addQualifier":""};
  this.currentIndex=-1;
  this.isSubmitCostShare=false;
}

  isEquivalent(collection,costShareSelected,selectedModule){
    this.bool=false;
    console.log(collection)
    console.log(costShareSelected)
    if (costShareSelected != undefined) {
      console.log(JSON.stringify(this.Obj))
         collection.forEach(obj => {
        if(obj.costShareName ==costShareSelected['costShareName']){
          this.bool=true;
          obj[selectedModule].push(Object.assign({},this.Obj));
        }
      });
    }
    console.log(JSON.stringify(collection))
    return this.bool;
}
  editModuleEntry(selectedPrevious,costShareSelected,selectedModule){
    return new Promise((resolve, reject) => {
      selectedPrevious.forEach(obj=> {
        if (obj.costShareName == costShareSelected['costShareName']) {
          if (obj[selectedModule].length != 0) {
            console.log(obj[selectedModule].length)
            Object.assign(obj[selectedModule][this.currentIndex],this.Obj);
          }
        }
      })
      console.log(JSON.stringify(selectedPrevious))
    })
  }


}
