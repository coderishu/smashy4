import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";


import 'rxjs/add/operator/map';

import "rxjs/Rx";
import {Observable} from 'rxjs/Rx';
@Injectable()
export class HttpService {
//URL:String="http://projects.thesparxitsolutions.com/CSS6656/JSON/";
  // URL:String="http://localhost:4200/assets/JSON/";
  URL:String="http://10.0.4.21:4203/assets/JSON/";

  constructor(public http:Http) { }

  createPostRequest(url):Observable<any> {
  //  let headers = new Headers({'Content-Type':'application/json'});
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
   headers.set('Content-Type', 'application/json');
    //let options = new RequestOptions({headers:headers});

    // return this.http.get(this.URL+url,options)
    //   .map(data => {
    //     return data.json();
    //   },error => {
    //     console.log(error);
    //   });
    console.log(url)
    return this.http.get(this.URL+url).map(res => res.json());
   // return this.http.get(this.URL+url,headers).map((res:Response)=>res.json());

  };
  generatePDF(data):Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    headers.set('Content-Type', 'application/json');
    return this.http.post('http://10.0.4.4/clients/Mohit/mpdf/index.php',data).map(res => res.json())
  }
}
