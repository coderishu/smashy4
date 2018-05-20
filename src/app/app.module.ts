import 'rxjs';
import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';





import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './route-routing.module';
import {HttpService} from "./provider/http-service.service";



import {StoreInfoService} from "./provider/store-info.service";
import {AdminModule} from "./component/admin/admin-module";
import { PdfoverViewComponent } from './component/pdfover-view/pdfover-view.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {HeaderComponent} from "./public/header/header.component";
 









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PdfoverViewComponent,
    PageNotFoundComponent,
    

















   // ChiropaticCoinuranceComponent,






















   // PhysicianServiceComponent,






  ],
  imports: [

    BrowserModule,
    //PlanDeductibleModule,
    FormsModule,
    //NgbModule,
    HttpModule,
    ReactiveFormsModule,
    AdminModule,
    AppRoutingModule,
    // BreadcrumbsModule,
    RouterModule,

    NgbModule.forRoot(),

  ],
  providers: [HttpService,StoreInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
