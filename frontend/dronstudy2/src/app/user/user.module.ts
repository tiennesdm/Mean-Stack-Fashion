import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialForm } from '../angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path: '', component:RegisterComponent},
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialForm,
    BrowserModule,
    BrowserAnimationsModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule


  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class UserModule { }
