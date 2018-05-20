import { Component, OnInit } from '@angular/core';
import {Copay} from "../public/classes/copay";

@Component({
  selector: 'app-copay',
  templateUrl: './copay.component.html',
  styleUrls: ['./copay.component.css']
})
export class CopayComponent extends Copay implements OnInit {

copaydatas=[];

  constructor() { // this.copaydatas.push(this.Obj);
    super({"inNetwork":"","copayType":"","amount":"","timePeriod":"", "addQty":"", "level":"","accFee":false,"applies":false},false,-1);
  }

  ngOnInit() {
  }

  SavecopayForm(valid){
  this.isSubmit=true;
  console.log(JSON.stringify(this.Obj));
  if(valid){
    if(this.currentIndex==-1){
      this.recordBuffer.push(Object.assign(<string>{},this.Obj));

    }
    else{
      this.recordBuffer[this.currentIndex]=this.Obj;
      this.currentIndex=-1;

    }
    this.resetCopay();
  };

  };

}
