export class ChriopraticCoisurance {
  ChriopraticCoisuranceObj:any={"coisuranceNetworkVal":{id: "0", nService: "INN"},"level":"","planpays":"","memberpays":""};

  recordCoisuranceBuffer=[];
  preSelectCostShareName:any='';
  constructor(obj,public isSubmitCostShare,public currentIndex,public tempNetwork){

    Object.assign(this.ChriopraticCoisuranceObj,obj);
  }

  editChriopraticTemplate(obj,e,index){
    this.currentIndex=index;
    Object.assign(this.ChriopraticCoisuranceObj,obj)
    Object.assign(this.preSelectCostShareName,obj);
    console.log(this.currentIndex)


  };
  deleteChriopraticTemplate(obj,index){
    if( this.currentIndex ==-1) {
      this.recordCoisuranceBuffer.splice(index, 1);
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
            obj[selectedModule].push(Object.assign({},
              {"selectedSetWork":networkType.nService,
                "networkId":networkType.id,
                "level":this.ChriopraticCoisuranceObj.level,
                "planpays":this.ChriopraticCoisuranceObj.planpays,
                "memberpays":this.ChriopraticCoisuranceObj.memberpays,
                'coisuranceNetworkVal':networkType}

            ));


          }
      //   });
      //
      // }
    });
    console.log(JSON.stringify(selectedPrevious))
    return bool;

  }

  editModuleEntry(thiss,selectedPrevious,costShareSelected,bool,selectedModule,networkType){
    return new Promise((resolve, reject) => {
      selectedPrevious.forEach(obj=> {

            if (obj.costShareName == costShareSelected['costShareName']) {
              //if (obj[selectedModule].length != 0) {

                console.log(obj[selectedModule])
                //"selectedSetWork":networkType.nService
                console.log(this.currentIndex)
                obj[selectedModule][this.currentIndex]['coisuranceNetworkVal']=networkType
                obj[selectedModule][this.currentIndex]['level']=this.ChriopraticCoisuranceObj['level'];
                obj[selectedModule][this.currentIndex]['selectedSetWork']=networkType['nService'];
                obj[selectedModule][this.currentIndex]['networkId']=networkType['id'];
                obj[selectedModule][this.currentIndex]['planpays']=this.ChriopraticCoisuranceObj['planpays'];
                obj[selectedModule][this.currentIndex]['memberpays']=this.ChriopraticCoisuranceObj['memberpays'];

              //}
            }

      })
    })
  }
  resetCoinsurance(){
    this.ChriopraticCoisuranceObj["level"]="";
    this.ChriopraticCoisuranceObj["planpays"]="";
     this.ChriopraticCoisuranceObj["memberpays"]="";

    this.isSubmitCostShare=false;
    this.currentIndex=-1;
    this.tempNetwork={};
  }
}
