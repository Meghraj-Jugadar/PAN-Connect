import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Header } from './header/header';
import { PrimengModule } from '../primeNG/primeng-module';


@NgModule({
  declarations: [
    Header
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PrimengModule
  ],
  exports: [
    Header
  ]
})
export class CommonComponentsModule { }
