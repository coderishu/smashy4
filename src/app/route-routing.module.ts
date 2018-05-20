import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule,ExtraOptions  } from '@angular/router';

import {PdfoverViewComponent} from "./component/pdfover-view/pdfover-view.component";
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";




const routes: Routes =[

  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //
  //
  //   ]
  // },
  {path: 'PdfoverView', component: PdfoverViewComponent, data: {breadcrumb: 'Pdf Over View'}},
  {path: 'admin', loadChildren: './component/admin/admin-module#AdminModule'},
  {path: '', redirectTo: 'admin', pathMatch: 'full', data: {breadcrumb: 'Home'}},
  { path: '**', component: PageNotFoundComponent }
];
const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,


    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
