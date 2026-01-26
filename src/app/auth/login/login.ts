import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Api } from '../../core/services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  @ViewChild('loginForm') loginForm!: NgForm;

  email: string = '';
  password: string = '';

  constructor(private api: Api,private router: Router
  ) { }

  onSubmit() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.api.login(userData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.resetForm();
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  resetForm() {
    this.loginForm.resetForm();
  }

  onForgotPassword() {
    const navigationExtras = this.email ? { queryParams: { email: this.email } } : {};
    this.router.navigate(['/forgot-password'], navigationExtras);
  }
}
