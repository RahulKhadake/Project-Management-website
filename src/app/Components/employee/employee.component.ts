import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../core/Services/employee.service';
import { IEmployee } from '../../core/model/employee.model';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  empservice=inject(EmployeeService)
emdData:IEmployee[]=[];
  ngOnInit(): void {

    this.getAllemployee();
  }

  getAllemployee(){
    this.empservice.getEmployee().subscribe({
      next:(res:any)=>{
        console.log(res,"Checking the responsive");
        this.emdData=res.data;
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
