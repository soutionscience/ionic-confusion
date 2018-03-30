import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { baseUrl } from '../../shared/baseUrl';
import { Promotion } from '../../shared/promotion';


/*
  Generated class for the PromotionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PromotionProvider {

  constructor(public http: Http, private processHttp: ProcessHttpmsgProvider) {
    console.log('Hello  PromotionsProvider Provider');
  }
 getpromotions(): Observable<Promotion[]>{
   return this.http.get(baseUrl + 'promotions')
   .map(res => { return this.processHttp.extractData(res); })
                    .catch(error => { return this.processHttp.handleError(error); });

 }
 getPromotion(id:number):Observable<Promotion>{
   return this.http.get(baseUrl+ 'promotions'+ id)
   .map(res =>{return this.processHttp.extractData(res);})
   .catch(error=>{return this.processHttp.handleError(error)})

 }
 getFeaturedPromotion(): Observable<Promotion>{
   return this.http.get(baseUrl+ 'promotions?featured=true')
   .map(res =>{return this.processHttp.extractData(res)[0];})
   .catch(error=>{return this.processHttp.handleError(error)})

 }
}
