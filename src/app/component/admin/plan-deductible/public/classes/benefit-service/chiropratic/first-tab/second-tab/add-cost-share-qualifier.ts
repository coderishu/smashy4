export class AddCostShareQualifier {
  qualifiers:Array<Object>=[];
  recordChriopraticADDCSBuffer=[];

  ChriopraticAddCSQObj:any={
    "selectQualifier":"","range":false,"minRange":"","maxRange":"","excludes":[],"includes":[]}
  constructor(obj,public isSubmitADDCS,public currentIndex,public defaultEx, public defaultIn){
    Object.assign(this.ChriopraticAddCSQObj ,obj);

  }


  editChriopraticADDCSTemplate(obj,e,index){

    this.currentIndex=index;
  //.map(x => Object.assign({}, x))
    Object.assign(this.ChriopraticAddCSQObj,obj)
    this.recordChriopraticADDCSBuffer[index]["selectQualifier"]= this.ChriopraticAddCSQObj['selectQualifier'];
    this.recordChriopraticADDCSBuffer[index]["range"]= this.ChriopraticAddCSQObj['range'];
    this.recordChriopraticADDCSBuffer[index]["minRange"]=this.ChriopraticAddCSQObj['minRange'];
    this.recordChriopraticADDCSBuffer[index]["maxRange"]=  this.ChriopraticAddCSQObj['maxRange'];
    this.recordChriopraticADDCSBuffer[index]["excludes"]=this.ChriopraticAddCSQObj['excludes'].map(x => Object.assign({}, x))//JSON.parse(JSON.stringify( this.ChriopraticAddCSQObj['excludes']));
    this.recordChriopraticADDCSBuffer[index]["includes"]=this.ChriopraticAddCSQObj['includes'].map(x => Object.assign({}, x));



  };
  deleteChriopraticADDCSTemplate(obj,index){
    if( this.currentIndex ==-1) {
      this.recordChriopraticADDCSBuffer.splice(index, 1);
    }else{
      alert('Complete Edit Operation');
    }
  };

  fillDeductibleEntry(selectedPrevious,costShareSelected,selectedModule,networkType){
    let bool=false;

    selectedPrevious.forEach(obj=>{
          if(obj.costShareName ==costShareSelected['costShareName']){
            bool=true;

            obj[selectedModule].push(Object.assign({},
              {
                "selectQualifier": this.ChriopraticAddCSQObj['selectQualifier'],
                "range": this.ChriopraticAddCSQObj['range'],
                "minRange": this.ChriopraticAddCSQObj['minRange'],
                "maxRange":  this.ChriopraticAddCSQObj['maxRange'],
                "excludes":JSON.parse(JSON.stringify( this.ChriopraticAddCSQObj['excludes'])),
                "includes":JSON.parse(JSON.stringify( this.ChriopraticAddCSQObj['includes'])),
              }
            ));
          }
      //   });
      //
      // }
    });
    console.log(JSON.stringify(selectedPrevious))
    return bool;

  }
  resetAddCostShare(){
    this.ChriopraticAddCSQObj= {
      "selectQualifier": "",
      "range": false,
      "minRange": "",
      "maxRange": "",
      "exclude":[],
      "include":[]
    }
    this.ChriopraticAddCSQObj["excludes"]=JSON.parse(JSON.stringify(this.defaultEx))  ;
    this.ChriopraticAddCSQObj["includes"]=JSON.parse(JSON.stringify(this.defaultIn));
    this.isSubmitADDCS=false;
    this.currentIndex=-1;
  }
  editModuleEntry(thiss,selectedPrevious,costShareSelected,selectedModule,networkType){
    return new Promise((resolve, reject) => {
      selectedPrevious.forEach(object=> {
        //if (obj.benefitCateType == selectedBService['bService']) {
         // obj.costShareCate.forEach(object => {
            if (object.costShareName == costShareSelected['costShareName']) {
              console.log('========================')
              if (object[selectedModule].length != 0) {
                console.log(this.ChriopraticAddCSQObj)
                console.log(object[selectedModule].length)
                console.log(object[selectedModule][this.currentIndex]["range"])
               object[selectedModule][this.currentIndex]["selectQualifier"]= this.ChriopraticAddCSQObj['selectQualifier'];
                object[selectedModule][this.currentIndex]["range"]= this.ChriopraticAddCSQObj['range'];
                object[selectedModule][this.currentIndex]["minRange"]= this.ChriopraticAddCSQObj['minRange'];
                object[selectedModule][this.currentIndex]["maxRange"]= this.ChriopraticAddCSQObj['maxRange'];
                // object[selectedModule][this.currentIndex]["excludes"]=JSON.parse(JSON.stringify(this.ChriopraticAddCSQObj['excludes']));
                // object[selectedModule][this.currentIndex]["includes"]=JSON.parse(JSON.stringify(this.ChriopraticAddCSQObj['includes']));

                object[selectedModule][this.currentIndex]["includes"]=JSON.parse(JSON.stringify(this.ChriopraticAddCSQObj['includes']));
                object[selectedModule][this.currentIndex]["excludes"]= this.ChriopraticAddCSQObj['excludes'].copyWithin(0)// Array.of(...this.ChriopraticAddCSQObj['excludes'])//Object.values()
              }

            }
        //   })
        // }
      })
    })
  }
}
