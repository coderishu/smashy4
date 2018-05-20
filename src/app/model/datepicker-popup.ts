import {Component} from '@angular/core';
import {NgbModule,NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();
@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html'
})
export class NgbdDatepickerPopup {
 
  model: NgbDateStruct =  {month: now.getMonth() + 1,year: now.getFullYear(), day: now.getDate()};
  
  // var date = new Date();
  // var ngbDateStruct = { day: date.getUTCDay(), month: date.getUTCMonth(), year: date.getUTCFullYear()};
}
