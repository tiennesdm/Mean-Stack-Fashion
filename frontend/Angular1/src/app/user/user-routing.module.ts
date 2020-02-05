import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { AddressComponent} from './address/address.component';
import {ListalluserComponent} from './listalluser/listalluser.component';

const routes: Routes = [
   { path: 'register' , component: RegisterComponent},
   {path: '' , component: ListalluserComponent }
  // { path: '', component:LoginComponent},
   ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }