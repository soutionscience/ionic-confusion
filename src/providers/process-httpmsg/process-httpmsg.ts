import { HttpClient, HttpResponse } from '@angular/common/http';
import {Http, Response} from '@angular/http';
import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
/*
  Generated class for the ProcessHttpmsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProcessHttpmsgProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProcessHttpmsgProvider Provider');
  }
  public extractData(res: Response){
    let body = res.json();
    return body || [];

  }
  public handleError(error: Response | any){
    let errMsg : string;
    if(error instanceof Response){
      const body = error.json();
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status}-${error.statusText || ''} ${err}`;

    }else{
      errMsg = error.message ? error.message : error.toString()
    }

    console.log(errMsg)
    return Observable.throw(errMsg)
  }

}
