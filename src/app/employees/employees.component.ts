import { Component, OnInit } from '@angular/core';

import {EmployeeService} from './shared/employee.service' //using employee service in employees component

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService] //using employee service in employees component
})
export class EmployeesComponent implements OnInit {

  //using employee service in employees component
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

}
