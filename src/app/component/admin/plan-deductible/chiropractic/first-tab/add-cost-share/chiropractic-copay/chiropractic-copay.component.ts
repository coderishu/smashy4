import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChriopraticCopay} from "../../../../public/classes/benefit-service/chiropratic/first-tab/add-cost-share/chriopratic-copay";
import {StoreInfoService} from "../../../../../../../provider/store-info.service";
import {BenefitCategoryPipe} from "../../../../public/pipes/benefit-category.pipe";


//noinspection TypeScriptValidateTypes
@Component({
  selector: 'app-chiropractic-copay',
  templateUrl: './chiropractic-copay.component.html',
  styleUrls: ['./chiropractic-copay.component.css']
})
export class ChiropracticCopayComponent extends ChriopraticCopay implements OnInit ,OnChanges {
  @Input('shareRec') shareRec: Array<any> = [];

  @Input('costShareSelected') costShareSelected: Array<any> = [];
  @Input('networkInfor') networkInfor: Array<any> = [];
  @Input('selectedBService') selectedBService: Array<any> = [];
  @Input('selectedPrevious') selectedPrevious: Array<any> = [];


  constructor(public storeInfoService: StoreInfoService) {
    super({
      "CCopyTypeVal": "",
      "CopyTimePeriodVal": "",
      "CopyAddQualificationVal": "",
      "CCopyNetWorkInfoVal": "",
      "applies": false,
      "accFee": false,
      "levels": ""
    }, false, -1, {});
    this.recordChriopraticCopayBuffer = this.storeInfoService.getCoinsuranceCopay();
  }

  ngOnChanges(changews: SimpleChanges) {
    // only run when property "shareRec" changed
    if (changews['shareRec']) {
      if (changews['shareRec']['currentValue'] != undefined) {
        this.types = changews['shareRec']['currentValue']['type'];
        this.timePeriods = changews['shareRec']['currentValue']['timePeriod'];
        this.addQualifications = changews['shareRec']['currentValue']['addQualification'];
        this.netWorkInfos = changews['shareRec']['currentValue']['netWorkInfo'];
        this.currentIndex = -1;
      }
    }

  }

  ngOnInit() {

  }

  SavecopayForms(valid) {
    this.isSubmitCostShare = true;
    if (valid) {
      if (this.currentIndex == -1) {
        if (this.fillDeductibleEntry(this.selectedPrevious, this.costShareSelected, 'copay', this.ChriopraticCopaiesObj)) {
          let translatePipe = new BenefitCategoryPipe();
          this.recordChriopraticCopayBuffer = translatePipe.transform(this.recordChriopraticCopayBuffer, this.costShareSelected, this.ChriopraticCopaiesObj, this.selectedPrevious, 'copay')
        } else {
          alert("Please Select Benefit Category / Cost Share Name")
        }

        // this.recordChriopraticBuffer.push(Object.assign(<string>{},this.ChriopraticCopaiesObj))
      } else {
        this.editPrevious(this);
        //  this.recordChriopraticCopayBuffer[this.currentIndex]=this.ChriopraticCopaiesObj;
      }
      console.log(JSON.stringify(this.recordChriopraticCopayBuffer))
      // this.storeInfoService.setCoinsuranceCopay(this.recordChriopraticCopayBuffer);
      this.resetCopay();
      console.log(this.ChriopraticCopaiesObj)
    }
  }

  editPrevious(thiss) {
    let bool = true;
    this.editModuleEntry(thiss, this.selectedPrevious, this.costShareSelected, 'copay', this.ChriopraticCopaiesObj).then((val) => {
      let translatePipe = new BenefitCategoryPipe();
      this.recordChriopraticCopayBuffer = translatePipe.transform(this.recordChriopraticCopayBuffer, this.costShareSelected, this.ChriopraticCopaiesObj, this.selectedPrevious, 'copay')
    })
  }
}
