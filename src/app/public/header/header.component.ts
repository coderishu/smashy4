import { Component, OnInit,ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
   @Input('breadCrumbData') breadCrumbData:Array<any> = [];
  constructor() {

  }

  ngOnInit() {
  }

}
