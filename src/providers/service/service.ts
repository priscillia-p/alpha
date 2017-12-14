import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../app/model';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  baseUrl : string ="http://localhost:3000/user";

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
}
  

  
  
}
