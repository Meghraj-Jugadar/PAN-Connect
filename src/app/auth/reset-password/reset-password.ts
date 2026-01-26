import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../core/services/api';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.scss',
})
export class ResetPassword implements OnInit {
  token: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: Api
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParams['token'] || '';
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const resetData = {
      token: this.token,
      newPassword: this.password
    };

    this.api.resetPassword(resetData).subscribe({
      next: (response) => {
        console.log('Password reset successful:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Password reset failed:', error);
      }
    });
  }
}
