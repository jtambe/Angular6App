import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'; //using employee service in employees component
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']  
})
export class EmployeeComponent implements OnInit {

  //using employee service in employees component
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm){
    if(form != null)
    {
      form.reset();
      this.employeeService.selectedEmployee = {

        EmployeeID : null,
        FirstName : '',
        LastName : '',
        EmpCode : '',
        Position : '',
        Office : ''
      }
    }
  }

}
