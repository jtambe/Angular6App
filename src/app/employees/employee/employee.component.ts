import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'; //using employee service in employees component
import { NgForm , FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FormsModule   } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']  
})
export class EmployeeComponent implements OnInit {

  //using employee service in employees component
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
    {
      form.reset();
    }

      this.employeeService.selectedEmployee = {
        EmployeeID : null,
        FirstName : '',
        LastName : '',
        EmpCode : '',
        Position : '',
        Office : ''
      
    }
  }

  onSubmit(form: NgForm){
    this.employeeService.postEmployee(form.value)
    .subscribe( data=>{
      this.resetForm(form);
    })
  }

}
