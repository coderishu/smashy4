import {Component, OnInit, Directive, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, NG_VALIDATORS, ValidationErrors} from "@angular/forms";
import {StoreInfoService} from "../../../../provider/store-info.service";
import {Deductible} from "../public/classes/deductible";


@Component({
  selector: 'app-deductible',
  templateUrl: './deductible.component.html',
  styleUrls: ['./deductible.component.css']
})


export class DeductibleComponent extends Deductible implements OnInit {


isSubmit: boolean = false;
  constructor(public router:Router,private storeInfoService:StoreInfoService) {
    super({"common":true,"inNetwork":true,"outOfNetwork":false,"dualCreditPro": false, "seprateFMembers":false,"custom":false,"commonVal":'',"commonVal1":'', "inNetworkVal":'',"inNetworkVal1":'', "outOfNetworkVal":'',"outOfNetworkVal1":''},false)
    if(Object.keys(this.storeInfoService.getDeductibleInfo()).length!=0){
      Object.assign(this.Obj, this.storeInfoService.getDeductibleInfo());
    }
  }

  ngOnInit() {
  }
  saveDeductible(valid){
    this.isSubmit = true;
    console.log(JSON.stringify(this.Obj))

    if(valid){
      this.nextSec();

    }
  };

  nextSec(){
    this.storeInfoService.setDeductibleInfo(this.Obj);
    this.router.navigate(['/planDeductible/coinsurance'])
  }

}

