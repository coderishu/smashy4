import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import { appConstant } from '../../constant/constant';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {

  breadCrumbData:Object = [];
  title = 'app';
  constructor(private router:Router){
    this.router.events.subscribe((event)=>{
      this.breadCrumbData = appConstant['BREADCRUMB'][event['url']];
      console.log(event['url']);
    })
  }

  ngOnInit() {
  }

}
