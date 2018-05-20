export class TempClass {
  recordChriopraticBuffer=[];
  constructor(public Obj,public isSubmitCostShare , public currentIndex){

  }
  editChriopraticTemplate(obj,e,index){
    this.currentIndex=index;
    Object.assign(this.Obj,obj)


  };
  deleteChriopraticTemplate(obj,index){
    if( this.currentIndex ==-1) {
      this.recordChriopraticBuffer.splice(index, 1);
    }else{
      alert('Complete Edit Operation');
    }
  };
}

