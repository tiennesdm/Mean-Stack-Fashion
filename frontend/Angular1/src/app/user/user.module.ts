import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialForm } from '../angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule, PopoverModule , ModalModule } from 'ngx-bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddressComponent } from './address/address.component';
import { UserRoutingModule} from './user-routing.module';
import { ListalluserComponent } from './listalluser/listalluser.component';


@NgModule({
  declarations: [
     RegisterComponent,
     LoginComponent,
     AddressComponent,
     ListalluserComponent  
    ],
  imports: [
    CommonModule,
    AngularMaterialForm ,
    BrowserModule ,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule,



  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    AddressComponent,
    ListalluserComponent

  ]
})
export class UserModule { }
