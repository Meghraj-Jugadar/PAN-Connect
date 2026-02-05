import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AuthModule } from './auth/auth-module';
import { AdminModule } from './admin/admin-module';
import { UserModule } from './user/user-module';
import { AngularMatModule } from './shared/material/angular-mat-module';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { PrimengModule } from './shared/primeNG/primeng-module';
import { MessageService } from 'primeng/api';
import { CommonComponentsModule } from './shared/components/components-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    CommonComponentsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    UserModule,
    AngularMatModule,
    PrimengModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    MessageService
  ],
  bootstrap: [App]
})
export class AppModule { }
