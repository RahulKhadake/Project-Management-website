import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-multiple',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './single-multiple.component.html',
  styleUrl: './single-multiple.component.css'
})
export class SingleMultipleComponent {


  employeeForm: FormGroup = new FormGroup({});
  
  constructor(){
    this.initializeForm();
  }

  initializeForm() {
    this.employeeForm =  new FormGroup({
      EmpId :new FormControl(0),
      Name: new FormControl("",[Validators.required]),
      ContactNo: new FormControl(""),
      Email: new FormControl(""),
      City: new FormControl(""),
      State: new FormControl(""),
      PinCode: new FormControl(""),
      Designation: new FormControl(""),
      MockEmpRelatives: new FormArray([])
    })
    this.createFamilyForm();
  }

  get familyRelative(): FormArray {
    return this.employeeForm.controls['MockEmpRelatives'] as FormArray;
  }

  getFamilyFormByIndex(index: number) {
    const formArray =  this.employeeForm.controls['MockEmpRelatives'] as FormArray;
    return formArray.controls[index];
  }

  

  createFamilyForm() {
    debugger;
    const familyForm = new FormGroup({
      RelativeId: new FormControl(0),
      Name: new FormControl("",[Validators.required]),
      Relation: new FormControl(""),
      Age: new FormControl(""),
      EmpId: new FormControl(0)
    });
   const formArray =  this.employeeForm.controls['MockEmpRelatives'] as FormArray;
   formArray.push(familyForm);
   debugger;
  }

  onSave() {
    const formValue = this.employeeForm.value;
    debugger;
  }
  deleteFamilyForm(index: number): void {
    this.familyRelative.removeAt(index);
  }
}
