import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  // Form fields
  fName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // 👁 Eye icon toggles 
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  onSubmit() {
    console.log({ 
      fName: this.fName, 
      email: this.email, 
      password: this.password, 
      confirmPassword: this.confirmPassword 
    });
  }
}
