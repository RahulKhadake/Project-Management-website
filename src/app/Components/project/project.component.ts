import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../core/Services/project.service';
import { async, Observable } from 'rxjs';
import { Employee } from '../../core/model/employee.model';
import { IProject } from '../../core/model/project.model';
import { CREATEEMPPROJECT, ICREATEUSERDE } from '../../core/model/createEmpProject.model';
import { GetprojectEmployeeService } from '../../core/Services/getproject-employee.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgFor, AsyncPipe, DatePipe,FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  currentViwe: string = 'List';
  ProjectDataList: IProject[] = [];
  projectEmployeeList:ICREATEUSERDE[]=[]
  EmployeeData$: Observable<Employee[]> = new Observable<Employee[]>();
  EmployeeForm: FormGroup = new FormGroup({});

   @ViewChild ("empModel") EmployeeprojectAdd:ElementRef| undefined

   newEmpProject:CREATEEMPPROJECT= new CREATEEMPPROJECT();

  constructor(private projectService: ProjectService,private getProjectEmpService:GetprojectEmployeeService) {
    this.initilizationsFroms();
  }
  ngOnInit(): void {

    this.EmployeeData$ = this.projectService.getAllEmployee();
    this.getProjectList();
  }
  Changemode() {
    this.currentViwe = 'Create',
      this.EmployeeForm.reset();

  }
  getAllEmployee() {
    this.projectService.getAllEmployee().subscribe((res: Employee) => {
      console.log(res);
    })
  }

  initilizationsFroms() {

    this.EmployeeForm = new FormGroup({
      projectId: new FormControl(0),
      projectName: new FormControl(''),
      clientName: new FormControl(''),
      startDate: new FormControl(''),
      leadByEmpId: new FormControl(''),
      contactPerson: new FormControl(''),
      contactNo: new FormControl(''),
      emailId: new FormControl(''),
    });
  }

  onSubmit() {
    
    const projectuserdata = this.EmployeeForm.value;
    console.log(projectuserdata,"RK");
    
      delete projectuserdata.projectId; 
    
    this.projectService.createProject(projectuserdata).subscribe({
      next: (res: IProject) => {
        console.log(res, "project created successfully");
        alert('Project created successfully');
        this.getProjectList();
        
        // this.ProjectDataList.push(res);
        this.EmployeeForm.reset();
        this.currentViwe = 'List';
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    }
    )
    
  }

  getProjectList() {
    this.projectService.getAllProject().subscribe({
      next: (res: IProject[]) => {
        console.log(res);
        this.ProjectDataList = res;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    })
  }
  EditProject(project: IProject) {

    this.currentViwe = 'Edit';
    this.EmployeeForm.patchValue(project);
  }

  upDateProject() {

    const projectuserdata = this.EmployeeForm.value;
    const projectId = this.EmployeeForm.get('projectId')?.value;
    this.projectService.upDateProject(projectId, projectuserdata).subscribe({
      next: (res: IProject) => {
        console.log(res);
        alert('Project updated successfully');
        this.getProjectList();
        this.EmployeeForm.reset();
        this.currentViwe = 'List';
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    })
  }

  DeleteProject(projectid: any) {
    const confirmation  = confirm('Are you sure you want to delete this project?');

    if (confirmation ) {
      this.projectService.deleteProject(projectid).subscribe({
        next: (res: IProject) => {
          console.log(res);
          alert('Project deleted successfully');
           this.getProjectList();
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        }
      })
    }

  }
  OpenModelAddEmployee(id:number){
    debugger
    this.getAllprojectEmployees(id);
   this.newEmpProject.projectId = id;
    if(this.EmployeeprojectAdd)
    {
      this.EmployeeprojectAdd.nativeElement.style.display = "block";
    }
  }
  CloseModel(){
    if(this.EmployeeprojectAdd)
      {
        this.EmployeeprojectAdd.nativeElement.style.display = "none";
      }
  }
  onAddEmp(id:number){
   
     
      
    this.getProjectEmpService.addNewProjectEmployee(this.newEmpProject).subscribe({
      next:(res:any)=> {
        console.log("Employee Added to Project ",res);
        alert("Employee Added to Project");
        this.getAllprojectEmployees(this.newEmpProject.projectId);
        
      },
      error:(err:any) =>{
        console.log(err,"Something error is there");
      },
      complete() {
        
      },
    })
  }
  getAllprojectEmployees(id:number){
   
    this.getProjectEmpService.getProjectEmployeeByDI().subscribe({
      next:(res:any) =>{
          console.log(res,"Checkking the responsive");
          
          const record=res.filter((m: { projectId: number; })=> m.projectId == id);
          this.projectEmployeeList=record;
          
      },
      error:(err:any)=> {
        console.log(err,"Checking the error");
      },
      complete() {
        console.log("Completed");
      },
    })
  }
}