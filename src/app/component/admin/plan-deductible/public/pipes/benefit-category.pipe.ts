import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'selectedNetWork',
  pure: true
})
export class BenefitCategoryPipe  implements PipeTransform 
{
  fillArray=[];
   transform(items: any, ...args): any {
    this.fillArray=[];
    let thiss=this;
    console.log(args)
    if(args[0]!=undefined  && args[2]!=undefined)
    {
        args[2].filter(TCService=>{
          if(TCService['costShareName']==args[0]['costShareName'])
          {
            thiss.fillArray=TCService[args[3]]
          }
        });
      }
      console.log(JSON.stringify(thiss.fillArray));
items=(this.fillArray.length==0)?[]:this.fillArray;
     return items

  }

}
