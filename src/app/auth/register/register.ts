import { Component, ViewChild } from '@angular/core';
import { Api } from '../../core/services/api';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  @ViewChild('registerForm') registerForm!: NgForm;

  fName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private api: Api,
    private router: Router
  ) {}

  onSubmit() {
    const userData = {
      name: this.fName,
      email: this.email,
      password: this.password
    };

    this.api.register(userData).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.resetForm();
      },
      error: (error) => {
        console.error('Registration failed:', error);
      }
    });
  }

  resetForm() {
    this.registerForm.resetForm();
  }

  onSignIn() {
    this.router.navigate(['/login']);
  }
}
