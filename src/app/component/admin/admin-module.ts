import {BrowserModule} from "@angular/platform-browser";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {NgbdDatepickerPopup} from "../../model/datepicker-popup";
import {PlanInfoComponent} from "./plan-info/plan-info.component";
import {PlanConfigComponent} from "./plan-config/plan-config.component";
import {AdminComponent} from "./admin.component";
//import {HeaderComponent} from "../../public/header/header.component";
import {Routes, RouterModule} from "@angular/router";
import {PlanDeductibleModule,} from "./plan-deductible/plan-deductible-module";









export const AdminRoutes: Routes = [
  {
    path: '',
    component:AdminComponent,
       children: [
         { path: 'planInfo',component: PlanInfoComponent, data:{breadcrumb:'PageInfo'} },
         { path: 'planconfig',component: PlanConfigComponent, data:{breadcrumb:'Plan Config'} },
         { path: 'planDeductible',loadChildren: './plan-deductible/plan-deductible-module#PlanDeductibleModule' },
         {
           path: '',
           redirectTo: 'planInfo',
           pathMatch: 'full',
         }
       ]
  },
  {
    path: '',
    component: AdminComponent
  }



];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //DeductibleModule,
    PlanDeductibleModule,
    RouterModule.forChild(AdminRoutes),
    NgbModule.forRoot()

  ],
  exports: [RouterModule],

  declarations: [
    //NgbdDatepickerPopup,

    PlanInfoComponent,
    PlanConfigComponent,
    AdminComponent,
    NgbdDatepickerPopup

  ]
})
export class AdminModule { }
