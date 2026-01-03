import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule, 
    InputTextModule,
    MessageModule, 
    DividerModule, 
    ChipModule, 
    BadgeModule,
    ToolbarModule,
    AvatarModule
  ],
  exports: [ 
    ButtonModule,
    CardModule, 
    InputTextModule,
    MessageModule, 
    DividerModule, 
    ChipModule, 
    BadgeModule,
    ToolbarModule,
    AvatarModule
  ]
})
export class PrimengModule { }
