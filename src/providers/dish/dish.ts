import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { Dish } from '../../shared/dish';
import { baseUrl } from '../../shared/baseUrl';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: Http, private processHttp: ProcessHttpmsgProvider) {
    console.log('Hello DishProvider Provider');
  }
 getDishes(): Observable<Dish[]>{
   return this.http.get(baseUrl + 'dishes')
   .map(res => { return this.processHttp.extractData(res); })
                    .catch(error => { return this.processHttp.handleError(error); });

 }
 getDish(id:number):Observable<Dish>{
   return this.http.get(baseUrl+ 'dishes'+ id)
   .map(res =>{return this.processHttp.extractData(res);})
   .catch(error=>{return this.processHttp.handleError(error)})

 }
 getFeaturedDish(): Observable<Dish>{
   return this.http.get(baseUrl+ 'dishes?featured=true')
   .map(res =>{return this.processHttp.extractData(res)[0];})
   .catch(error=>{return this.processHttp.handleError(error)})

 }
}
