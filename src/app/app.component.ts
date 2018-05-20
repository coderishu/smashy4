import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { appConstant } from './constant/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  breadCrumbData:Object = [];
  title = 'app';
  constructor(private router:Router){
    this.router.events.subscribe((event)=>{
      this.breadCrumbData = appConstant['BREADCRUMB'][event['url']];
      console.log(event['url']);
    })
  }
}
