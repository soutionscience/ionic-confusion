import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { baseUrl } from '../../shared/baseUrl';
import { Leader } from '../../shared/leader';

/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: Http, private processHttp: ProcessHttpmsgProvider) {
    console.log('Hello LeaderProvider Provider');
  }
 getleaders(): Observable<Leader[]>{
   return this.http.get(baseUrl + 'leaders')
   .map(res => { return this.processHttp.extractData(res); })
                    .catch(error => { return this.processHttp.handleError(error); });

 }
 getLeader(id:number):Observable<Leader>{
   return this.http.get(baseUrl+ 'leaders'+ id)
   .map(res =>{return this.processHttp.extractData(res);})
   .catch(error=>{return this.processHttp.handleError(error)})

 }
 getFeaturedLeader(): Observable<Leader>{
   return this.http.get(baseUrl+ 'leaders?featured=true')
   .map(res =>{return this.processHttp.extractData(res)[0];})
   .catch(error=>{return this.processHttp.handleError(error)})

 }
}
