import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserLogin } from '../../core/model/login.model';
import { LoginService } from '../../core/Services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  constructor(private loginservice: LoginService) { }
  userLogin: IUserLogin = {
    userName: '',
    password: ''
  };

  @ViewChild('animation1', { static: true }) animation1!: ElementRef;
  @ViewChild('animation2', { static: true }) animation2!: ElementRef;
  @ViewChild('animation3', { static: true }) animation3!: ElementRef;

  onEmailFocus() {
    this.animation1.nativeElement.style.display = "none";
    this.animation3.nativeElement.style.display = "block";
    this.animation2.nativeElement.style.display = "none";
  }

  onPasswordFocus() {
    this.animation1.nativeElement.style.display = "none";
    this.animation2.nativeElement.style.display = "block";
    this.animation3.nativeElement.style.display = "none";
  }

  showAnimation1() {
    this.animation1.nativeElement.style.display = "block";
    this.animation2.nativeElement.style.display = "none";
    this.animation3.nativeElement.style.display = "none";
  }

  onBlur() {
    this.showAnimation1();
  }

  NavigateSidenavar() {
    this.loginservice.login(this.userLogin).subscribe(
      (res: any) => {
        if (res.result) {

          localStorage.setItem('EmployeeAppUser', JSON.stringify(res.data));
          console.log(res.data, "Data Checking here");
          console.log(res.result, "Checking here");
          alert("Login Successful");

          this.router.navigateByUrl("/dashboard");
        } else {
          alert("Invalid Credentials");
        }
      },
      (error) => {

        console.error("Login failed:", error);
        alert("An error occurred while logging in. Please try again later.");
      }
    );
  }
  showPassword: boolean = false

  togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
     
  }
}
