import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../modules/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilsService } from '../helpers/services/utils/utils.service';
import {HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import {HttpModule} from "@angular/http";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password/reset-password.component';




@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule
    
    
  ],
  providers: [HttpClient,UtilsService]
})
export class AuthenticationModule { }
