export class ChriopraticOutofPocketModify {
  recordChriopraticBuffer=[];
  recordOutOfPocketBuffer=[];
  preSelectCostShareName:any='';
  constructor(public ChriopraticOutofPocketObj,public isSubmitCostShare , public currentIndex,public tempNetwork){

  }


  editChriopraticTemplate(obj,e,index){

    this.currentIndex=index;
    Object.assign(this.ChriopraticOutofPocketObj,obj)
    Object.assign(this.preSelectCostShareName,obj)


  };
  deleteChriopraticTemplate(obj,index){
    if( this.currentIndex ==-1) {
      this.recordChriopraticBuffer.splice(index, 1);
    }else{
      alert('Complete Edit Operation');
    }
  };
  insertNewObject(obj,networkType){
    obj.push(
      Object.assign({},{"selectedSetWork":networkType.nService,"networkId":this.ChriopraticOutofPocketObj.deductibleNetworkVal.id,"level":this.ChriopraticOutofPocketObj.level,"member":this.ChriopraticOutofPocketObj.member,"family":this.ChriopraticOutofPocketObj.family})
    )
  }
  createNewObject(obj,networkType){
    obj.push(Object.assign({},{
      "dNetwork":networkType.nService,
      "dNetworkEntry": [
        {"selectedSetWork":networkType.nService,"networkId":networkType.id,"level":this.ChriopraticOutofPocketObj.level,"member":this.ChriopraticOutofPocketObj.member,"family":this.ChriopraticOutofPocketObj.family}
      ]
    }));
  }
  fillDeductibleEntry(selectedPrevious,costShareSelected,selectedModule,networkType){
    let bool=false;

    selectedPrevious.forEach(obj=>{
          if(obj.costShareName ==costShareSelected['costShareName']){
            bool=true;
            obj[selectedModule].push(Object.assign({},
              {
                "selectedSetWork":networkType.nService,
                "networkId":networkType.id,
                "level":this.ChriopraticOutofPocketObj.level,
                "member":this.ChriopraticOutofPocketObj.member,
                "family":this.ChriopraticOutofPocketObj.family,
                'outofPCNetworkVal':networkType
              }
              ));
           }
    });
console.log(JSON.stringify(selectedPrevious))
    return bool;

  }

  editModuleEntry(thiss,selectedPrevious,costShareSelected,bool,selectedModule,networkType){
    return new Promise((resolve, reject) => {
    selectedPrevious.forEach(obj=> {
       // obj.costShareCate.forEach(object => {
          if (obj.costShareName == costShareSelected['costShareName']) {
            obj[selectedModule][this.currentIndex]['outofPCNetworkVal']=networkType
            obj[selectedModule][this.currentIndex]['level']=this.ChriopraticOutofPocketObj['level'];
            obj[selectedModule][this.currentIndex]['selectedSetWork']=this.ChriopraticOutofPocketObj['outofPCNetworkVal']['nService'];
            obj[selectedModule][this.currentIndex]['networkId']=this.ChriopraticOutofPocketObj['outofPCNetworkVal']['id'];
            obj[selectedModule][this.currentIndex]['member']=this.ChriopraticOutofPocketObj['member'];
            obj[selectedModule][this.currentIndex]['family']=this.ChriopraticOutofPocketObj['family'];
          }
       // })
      //}
    })
    })
  }
updateTableEntry(deduObj,networkType,bool){
  if (deduObj.dNetwork == networkType && Object.keys(this.tempNetwork).length==0) {
    deduObj.dNetworkEntry[this.currentIndex]['level']=this.ChriopraticOutofPocketObj['level'];
    deduObj.dNetworkEntry[this.currentIndex]['member']=this.ChriopraticOutofPocketObj['member'];
    deduObj.dNetworkEntry[this.currentIndex]['family']=this.ChriopraticOutofPocketObj['family'];
    bool=false;
  } else if (deduObj.dNetwork != networkType &&  Object.keys(this.tempNetwork).length!=0) {
    if (deduObj.dNetwork == this.tempNetwork.nService) {
      bool=true;
      deduObj.dNetworkEntry.splice(this.currentIndex, 1);
    }
  }
  if (deduObj.dNetwork == networkType && Object.keys(this.tempNetwork).length!=0) {
    this.insertNewObject(deduObj.dNetworkEntry,networkType)
    bool=false;
  }
  return bool;
}
}
