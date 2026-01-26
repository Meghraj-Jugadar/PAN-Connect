import { Component, ViewChild } from '@angular/core';
import { Api } from '../../core/services/api';
import { NgForm } from '@angular/forms';

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

  constructor(private api: Api) {}

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
}
