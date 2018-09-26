import { Injectable } from '@angular/core';

import {Employee} from './employee.model'; //using employee model in employees service

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee : Employee; // selectedEmployee is a property of type Employee
  constructor() { }
}
