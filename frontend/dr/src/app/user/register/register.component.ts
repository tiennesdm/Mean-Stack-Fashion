import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import {UserService} from '../../services/user.service';
import {UserDetail} from '../../shared/userinformation.model'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  locationData = {
  }
  private authStatusSub: Subscription;
  constructor(
    public userService: UserService 
  ) { }

  ngOnInit() {
  }
  onRegister(f: NgForm) {
    if (f.invalid) {
      return null;
    }
    console.log(f.value);
    this.userService.onUserRegister(null, f.value.firstName, f.value.lastName, 
      f.value.email, f.value.password, f.value.age,f.value.sex, f.value.mobile, f.value.houseNo, f.value.street,
      f.value.location, f.value.city, f.value.state,f.value.country, f.value.pincode , f.value.fatherName   
      );

    f.reset();

  }
  }
 