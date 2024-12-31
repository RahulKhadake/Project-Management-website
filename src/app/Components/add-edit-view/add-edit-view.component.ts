import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../core/Services/employee.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-view',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-edit-view.component.html',
  styleUrl: './add-edit-view.component.css'
})
export class AddEditViewComponent {
  employeeForm!:FormGroup;
empservice=inject(EmployeeService);

constructor(private fb:FormBuilder){
this.employeeForm=this.fb.group({
  empName:[''],
  empId:[''],
  empDesignation:[''],
  empSalary:[''],
  empLocation:[''],
  empDepartment:[''],
  empEmail:[''],
  empPhone:[''],
})

}
  Savedata()
  {
      
      

    // this.empservice.CreateEmployee().subscribe({
    //   next:(res:any)=>{
    //     console.log(res,"Checking the responsive");
    //   },
    //   error:(err:any)=>{
    //     console.log(err,"Error checking ");
    //   },
    //   complete() {
    //     console.log("Completed");
    //   },
    // })

  }
}
