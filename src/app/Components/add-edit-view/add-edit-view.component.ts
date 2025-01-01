import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../core/Services/employee.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentandchildService } from '../../core/Services/parentandchild.service';
import { NgFor, NgIf } from '@angular/common';
import { IParentDeperent } from '../../core/model/parentDeperent.model';
import { IChildDeperent } from '../../core/model/childDeperent.model';
import { Employee } from '../../core/model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-view',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './add-edit-view.component.html',
  styleUrl: './add-edit-view.component.css'
})
export class AddEditViewComponent {
  empservice = inject(EmployeeService);

  empObj: Employee = new Employee();

  constructor(private parentservice: ParentandchildService, private Childservice: ParentandchildService,
    private router: ActivatedRoute
  ) { }
  isEditMode: boolean = false; // Flag to determine Add or Update
  ngOnInit() {
    this.getParentDeperamentData();

    this.router.queryParams.subscribe(params => {
      const data = params['data'];
      if (data) {
        // If 'data' is present, it's in Edit mode
        this.isEditMode = true;
        this.empObj = JSON.parse(data); // Populate the form with the employee data
        console.log('Received Employee Data for Edit:', this.empObj);
      } else {
        // If no 'data' param, it's in Add mode (default)
        this.isEditMode = false;
        console.log('New Employee Form (Add Mode)');
      }
    });
  }

  route = inject(Router);

  parentdeperentList: IParentDeperent[] = [];
  getParentDeperamentData() {
    this.parentservice.getParentdeperantData().subscribe({
      next: (res: any) => {
        console.log(res, "Checking the responsive Parent Derament data");
        this.parentdeperentList = res.data;
      },
      error: (err: any) => {
        console.log(err, "Error checking ");
      },
      complete() {
        console.log("Completed");
      },
    })
  }
  childdeperntList: IChildDeperent[] = [];
  deptId: number = 0;
  onDeperentChange() {
    console.log('Selected Department ID:', this.deptId);
    this.Childservice.getChildDeperentdata(this.deptId).subscribe({
      next: (res: any) => {
        console.log(res, "Checking the responsive Child Derament data");
        this.childdeperntList = res.data;
      },
      error: (err: any) => {
        console.log(err, "Error checking ");
      },
      complete() {
        console.log("Completed");
      },
    })
  }


  saveOrUpdateEmployee(): void {
    if (this.isEditMode) {
      console.log(this.isEditMode, "MODE")
      console.log('Updating Employee:', this.empObj);
      this.empservice.UpdateEmployee(this.empObj.employeeId,this.empObj).subscribe({
        next: (res: any) => {
          console.log(res, "Checking the responsive");
          alert("Data Updated Successfully");
          // this.empObj = res;
          this.route.navigateByUrl('/Employee');

        },
        error: (err: any) => {
          console.log(err, "Error checking ");
        },
        complete() {
          console.log("Completed");
        },
      })
    } else {
      this.empservice.CreateEmployee(this.empObj).subscribe({
        next: (res: any) => {
          console.log(res, "Checking the responsive");
          alert("Data Saved Successfully");
          this.empObj = res.data;
          this.route.navigateByUrl('/Employee');

        },
        error: (err: any) => {
          console.log(err, "Error checking ");
        },
        complete() {
          console.log("Completed");
        },
      })
    }
  }
}
