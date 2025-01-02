import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../core/Services/employee.service';
import { Employee } from '../../core/model/employee.model';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, RouterLink } from '@angular/router';
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
 router=inject(Router);
  ngOnInit(): void {
    this.getAllemployee();

    const navigation = this.router.getCurrentNavigation();
    this.EmployeeList = navigation?.extras.state?.['data'];
    console.log(this.EmployeeList, 'Received Data');
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

  DeleteEmpdata(id:number){
    localStorage.removeItem('selectedEmployee');
    let conframdaata=confirm("Are you sure you want to delete this employee?");
    if(conframdaata)
    {
      this.empservice.deleteEmployee(id).subscribe({
        next:(res:any)=>{
          console.log(res,"Checking the responsive");
          alert("Employee Deleted Successfully");
          this.getAllemployee();
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
  EditData(item: any) {
    // Using Angular Router with Query Parameters passing the data
    console.log('Editing Employee:', item);
    localStorage.removeItem('selectedEmployee');
    this.router.navigate(['/Add-edit-viwe'], { queryParams: { data: JSON.stringify(item) } });
}

ViewData(ViewemployeeData: any): void {
  // Save employee data to local storage
  localStorage.setItem('selectedEmployee', JSON.stringify(ViewemployeeData));
  // Navigate to the view page
  this.router.navigate(['/Add-edit-viwe']);
}
  
  
}
