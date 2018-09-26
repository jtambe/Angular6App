import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'; //using employee service in employees component

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //using employee service in employees component
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

}
