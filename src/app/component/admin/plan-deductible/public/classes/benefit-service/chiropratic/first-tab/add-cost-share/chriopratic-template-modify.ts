export class ChriopraticTemplateModify {
  recordChriopraticBuffer=[];
  recordOutOfPocketBuffer=[];
  limitationBuffer=[];
  preSelectCostShareName:any='';
  constructor(public ChriopraticCopayObj,public isSubmitCostShare , public currentIndex,public tempNetwork){

  }


  editChriopraticTemplate(obj,e,index)
  {
    this.currentIndex=index;
    console.log(JSON.stringify(obj))
    Object.assign(this.ChriopraticCopayObj,obj)
    Object.assign(this.preSelectCostShareName,obj)

  };
  deleteChriopraticTemplate(obj,index){
    if( this.currentIndex ==-1) {
      this.recordChriopraticBuffer.splice(index, 1);
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
                   "selectedSetWork": networkType.nService,
                   "networkId": networkType.id,
                   "level": this.ChriopraticCopayObj.level,
                   "member": this.ChriopraticCopayObj.member,
                   "family": this.ChriopraticCopayObj.family,
                   "deductibleNetworkVal": networkType
                 }
               ));


      };
    });

        console.log(JSON.stringify(selectedPrevious))
    return bool;

  }

  editModuleEntry(thiss,selectedPrevious,costShareSelected,bool,selectedModule,networkType){
    return new Promise((resolve, reject) => {
    selectedPrevious.forEach(obj=> {
          if (obj.costShareName == costShareSelected['costShareName']) {
            if (obj[selectedModule].length != 0) {
              console.log(this.ChriopraticCopayObj['deductibleNetworkVal'])
              console.log(obj[selectedModule].length)
              obj[selectedModule][this.currentIndex]['selectedModule']=this.ChriopraticCopayObj['deductibleNetworkVal']
              obj[selectedModule][this.currentIndex]['level']=this.ChriopraticCopayObj['level'];
              obj[selectedModule][this.currentIndex]['selectedSetWork']=this.ChriopraticCopayObj['deductibleNetworkVal']['nService'];
              obj[selectedModule][this.currentIndex]['member']=this.ChriopraticCopayObj['member'];
              obj[selectedModule][this.currentIndex]['family']=this.ChriopraticCopayObj['family'];
              obj[selectedModule][this.currentIndex]['deductibleNetworkVal']=this.ChriopraticCopayObj['deductibleNetworkVal'];
            }
          }
    })
      console.log(JSON.stringify(selectedPrevious))
    })
  }

}
