import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../core/services/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword implements OnInit {
  @ViewChild('forgotPassForm') forgotPassForm!: NgForm;
  email: string = '';
  isEmailSent: boolean = false;
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: Api
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.queryParams['email'] || '';
  }

  onSubmit() {
    const userData = {
      email: this.email
    };

    this.api.forgotPassword(userData).subscribe({
      next: (response) => {
        if (response.success) {
          this.isEmailSent = true;
          this.forgotPassForm.resetForm();
        }
      },
      error: (error) => {
        console.error('Forgot password failed:', error);
      }
    });
  }

  onBackToLogin() {
    this.router.navigate(['/login']);
  }
}
