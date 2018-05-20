import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
//import {HttpService} from "../../../../../../provider/http-service.service";
import {AddCostShareQualifier} from "../../../../public/classes/benefit-service/chiropratic/first-tab/second-tab/add-cost-share-qualifier";
import {BenefitCategoryPipe} from "../../../../public/pipes/benefit-category.pipe";

@Component({
  selector: 'app-add-cost-share-qualifier',
  templateUrl: './add-cost-share-qualifier.component.html',
  styleUrls: ['./add-cost-share-qualifier.component.css']
})
export class AddCostShareQualifierComponent extends AddCostShareQualifier implements OnInit ,OnChanges {
  @Input('shareRec') shareRec: Array<any> = [];
  @Input('costShareSelected') costShareSelected: Array<any> = [];
  @Input('networkInfor') networkInfor: Array<any> = [];
  @Input('selectedPrevious') selectedPrevious: Array<any> = [];

  constructor() {
    super({
      "selectQualifier": "",
      "range": false,
      "minRange": "",
      "maxRange": "",
      "exclude": [],
      "include": []
    }, false, -1,[],[]);

 // this.ChriopraticAddCSQObj['defaultEx']=this.ChriopraticAddCSQObj['excludes'];

  }

  ngOnInit() {}

  ngOnChanges(changews: SimpleChanges) {
    // only run when property "shareRec" changed
    if (changews['shareRec']) {
      console.log(changews['shareRec'])
      if (changews['shareRec']['currentValue'] != undefined)
       {
        this.qualifiers = changews['shareRec']['currentValue']['qualifier'];
        this.ChriopraticAddCSQObj['excludes'] = changews['shareRec']['currentValue']['addCostExcludes'];
        this.ChriopraticAddCSQObj['includes'] = changews['shareRec']['currentValue']['addCostIncludes'];
        this.defaultEx=  JSON.parse(JSON.stringify(changews['shareRec']['currentValue']['addCostExcludes']))
        this.defaultIn=JSON.parse(JSON.stringify(changews['shareRec']['currentValue']['addCostIncludes']));
        this.currentIndex=-1;
      }
    }

  }

  saveCostShare(valid) 
  {
    this.isSubmitADDCS = true;
    if (valid) 
    {
      if (this.currentIndex == -1) 
      {
        if (this.fillDeductibleEntry(this.selectedPrevious,this.costShareSelected, 'addCostShareQualifier', this.ChriopraticAddCSQObj)) {
          let translatePipe = new BenefitCategoryPipe();
          this.recordChriopraticADDCSBuffer = translatePipe.transform(this.recordChriopraticADDCSBuffer, this.costShareSelected, this.ChriopraticAddCSQObj, this.selectedPrevious, 'addCostShareQualifier')
        } else 
        {
          alert("Please Select Benefit Category / Cost Share Name")
        }
      } else 
      {
        this.editPrevious(this);
      }
      this.resetAddCostShare();
    }
  }

  editPrevious(thiss)
  {
    let bool = true;
    this.editModuleEntry(thiss, this.selectedPrevious, this.costShareSelected, 'addCostShareQualifier', this.ChriopraticAddCSQObj).then((val) => {
      let translatePipe = new BenefitCategoryPipe();
      this.recordChriopraticADDCSBuffer = translatePipe.transform(this.recordChriopraticADDCSBuffer, this.costShareSelected, this.ChriopraticAddCSQObj, this.selectedPrevious,'addCostShareQualifier')
    })
  }
}
