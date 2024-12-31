import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../core/Services/employee.service';
import { Employee } from '../../core/model/employee.model';
import { NgxSpinnerService } from "ngx-spinner";
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  empservice=inject(EmployeeService);
  
  EmployeeList:Employee[]= [];
 
  ngOnInit(): void {
    this.getAllemployee();
}
   
  

  getAllemployee(){
    this.empservice.getEmployee().subscribe({
      next:(res:any)=>{
        console.log(res,"Checking the responsive");
        this.EmployeeList=res;
      },
      error:(err:any)=>{
        console.log(err,"Error checking ");
      },
      complete:()=>{
        console.log("Completed")
      }
    })
  }
}
