import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import {UserDetail} from '../shared/userinformation.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) { }
  onUserRegister(   id: null, firstName: string,lastName: string, email: string,password: string, Age: number, Sex: string,
              mobileNumber: number,houseno: string, street: string, location: string,  city: string,
                state: string,
              country: string,
               pincode: number,
               FatherName:string ) {
    let url = this.baseUrl + '/user/newuser' ;
    const register: UserDetail = { id:id, firstName:firstName,lastName:lastName,
      email:email,password:password,Age:Age,sex:Sex,mobileNumber:mobileNumber,houseno:houseno,
      street:street,location:location,city:city,state:state,country:country,pincode:pincode,
      fatherName:FatherName 
    };
    console.log(register);
    this.http
      .post<{ message: string; }>(
        url,
         register
      )
      .subscribe(responseData => {
        console.log(responseData);
        this.router.navigate(['/']);
      }
      , err => {
        console.log(err.message);
      }
      );

 }
 getAllUserCategory(): Observable<UserDetail[]> {
  let url = this.baseUrl + '/user' ;
  return this.http.get<UserDetail[]>(url);
}

}