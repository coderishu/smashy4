import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'benefitOutofPocket'
})
export class BenefitOutofPocketPipe implements PipeTransform {
  netWorkIndex:any='';
  fillArray2=[];
  transform(value: any, ...args): any {
    this.fillArray2=[];
    let thiss=this;
    if(args[0]!=undefined && args[1]!=undefined && args[2]!=undefined){
      args[2].filter(TCostShare=>{
            if(TCostShare.costShareName == args[0]['costShareName']){
              thiss.fillArray2= TCostShare[args[3]];
             }
      });
    };
    value=(this.fillArray2.length==0)?[]:this.fillArray2;
    return value

  }


}
