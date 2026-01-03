import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing-module';
import { Home } from './home/home';
import { PrimengModule } from '../shared/primeNG/primeng-module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Register } from './register/register';
import { Login } from './login/login';
import { CommonComponentsModule } from '../shared/components/components-module';


@NgModule({
  declarations: [
    Home,
    Register,
    Login
  ],
  imports: [
    CommonComponentsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRoutingModule,
    PrimengModule,
  ]
})
export class AuthModule { }
