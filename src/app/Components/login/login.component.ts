import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
router=inject(Router);

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

  NavigateSidenavar()
  {
    this.router.navigateByUrl("dashboard");
  }
}
