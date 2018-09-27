import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';




import {Employee} from './employee.model'; //using employee model in employees service

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee : Employee; // selectedEmployee is a property of type Employee
  constructor(private http: Http) { }

  postEmployee(emp : Employee)
  {
    //var body = JSON.stringify(emp);
    var body = JSON.stringify("hklglkhkgjgkugkujglkugkj,");
    var headerOptions = new Headers({'Content-type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions})
    return this.http.post('http://localhost:54308/api/values',body,requestOptions).pipe(map( x => x.json))
  }
}



