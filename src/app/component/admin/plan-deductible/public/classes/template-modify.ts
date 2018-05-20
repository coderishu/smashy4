export class TemplateModify {
  recordBuffer:any=[];
  constructor(public Obj,public isSubmit , public currentIndex ){

  }
  editTemplate(obj,e,index){
    this.currentIndex=index;
    Object.assign(this.Obj,obj)

  };
  deleteTemplate(obj,index){
    if( this.currentIndex ==-1) {
      this.recordBuffer.splice(index, 1);
    }else{
      alert('Complete Edit Operation');
    }
  };

}
