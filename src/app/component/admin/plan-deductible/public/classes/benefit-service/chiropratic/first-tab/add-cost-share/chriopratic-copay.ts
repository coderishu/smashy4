import {ChriopraticTemplateModify} from "./chriopratic-template-modify";
//extends ChriopraticTemplateModify
export class ChriopraticCopay  {
  recordChriopraticCopayBuffer=[];
  preSelectCostShareName:any='';
  ChriopraticCopaiesObj:any={
    "CCopyTypeVal":"",
    "CopyTimePeriodVal":"",
    "CopyAddQualificationVal":"",
    "CCopyNetWorkInfoVal":"",
    "accFee":false,
    "applies":false,
    "copayAmount":"",
     "levels":""
  }

  types:Array<Object>=[];
  timePeriods:Array<Object>=[];
  addQualifications:Array<Object>=[];
  netWorkInfos:Array<Object>=[];

  constructor(obj,public isSubmitCostShare,public currentIndex,public tempNetwork){
    //super(obj,isSubmitCostShare ,currentIndex,tempNetwork)
     Object.assign(this.ChriopraticCopaiesObj,obj);
    console.log(this.ChriopraticCopaiesObj)
  }
  resetCopay(){
    console.log(this.ChriopraticCopaiesObj)
    this.ChriopraticCopaiesObj={
      "CCopyTypeVal":"",
      "CopyTimePeriodVal":"",
      "CopyAddQualificationVal":"",
      "CCopyNetWorkInfoVal":"",
      "accFee":false,

      "applies":false,
      "copayAmount":"",
      "levels":"",

    };
    this.isSubmitCostShare=false;
    this.currentIndex=-1;
    console.log(this.ChriopraticCopaiesObj)
  }
  editChriopraticTemplate(obj,e,index){

    this.currentIndex=index;
    Object.assign(this.ChriopraticCopaiesObj,obj)
    Object.assign(this.preSelectCostShareName,obj)


  };
  deleteChriopraticTemplate(obj,index){
    if( this.currentIndex ==-1) {
      this.recordChriopraticCopayBuffer.splice(index, 1);
    }else{
      alert('Complete Edit Operation');
    }
  };
  fillDeductibleEntry(selectedPrevious,costShareSelected,selectedModule,networkType){
    let bool=false;

    selectedPrevious.forEach(obj=>{
      // if(obj.benefitCateType ==selectedBService['bService']){
      //   obj.costShareCate.forEach(object=>{
          if(obj.costShareName ==costShareSelected['costShareName']){
            bool=true;

              console.log(this.ChriopraticCopaiesObj)
              obj[selectedModule].push(Object.assign({},{
                "CCopyNetWorkInfoVal":this.ChriopraticCopaiesObj['CCopyNetWorkInfoVal'],
                "CCopyTypeVal":this.ChriopraticCopaiesObj['CCopyTypeVal'],
                "CopyAddQualificationVal":this.ChriopraticCopaiesObj['CopyAddQualificationVal'],
                "CopyTimePeriodVal":this.ChriopraticCopaiesObj['CopyTimePeriodVal'],
                "accFee":this.ChriopraticCopaiesObj['accFee'],
                "applies":this.ChriopraticCopaiesObj['applies'],
                "copayAmount":this.ChriopraticCopaiesObj['copayAmount'],
                "levels":this.ChriopraticCopaiesObj['levels'],
              }));

          }
      //   });
      //
      // }
    });
    console.log(JSON.stringify(selectedPrevious))
    return bool;

  }
  editModuleEntry(thiss,selectedPrevious,costShareSelected,selectedModule,networkType){
    return new Promise((resolve, reject) => {
      selectedPrevious.forEach(obj=> {
        // if (obj.benefitCateType == selectedBService['bService']) {
        //   obj.costShareCate.forEach(object => {
            if (obj.costShareName == costShareSelected['costShareName']) {
              //if (object[selectedModule].length != 0) {

                console.log(obj[selectedModule])
                //"selectedSetWork":networkType.nService
                console.log(this.currentIndex)
              obj[selectedModule][this.currentIndex]["CCopyNetWorkInfoVal"]=this.ChriopraticCopaiesObj['CCopyNetWorkInfoVal'];
              obj[selectedModule][this.currentIndex]['levels']=this.ChriopraticCopaiesObj['levels'];
              obj[selectedModule][this.currentIndex]["CCopyTypeVal"]=this.ChriopraticCopaiesObj['CCopyTypeVal'];
              obj[selectedModule][this.currentIndex]["CopyAddQualificationVal"]=this.ChriopraticCopaiesObj['CopyAddQualificationVal'];
              obj[selectedModule][this.currentIndex]["CopyTimePeriodVal"]=this.ChriopraticCopaiesObj['CopyTimePeriodVal'];
              obj[selectedModule][this.currentIndex]["accFee"]=this.ChriopraticCopaiesObj['accFee'];
              obj[selectedModule][this.currentIndex]["applies"]=this.ChriopraticCopaiesObj['applies'];
              obj[selectedModule][this.currentIndex]["copayAmount"]=this.ChriopraticCopaiesObj['copayAmount'];
              }
        //     }
        //   })
        // }
      })
    })
  }
}
