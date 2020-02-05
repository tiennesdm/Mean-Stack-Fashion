import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDetail} from '../../shared/userinformation.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-listalluser',
  templateUrl: './listalluser.component.html',
  styleUrls: ['./listalluser.component.css']
})
export class ListalluserComponent implements OnInit {
  private authListenerSubs: Subscription;
  user: UserDetail [] = [];

  constructor( public userService: UserService ) { }

  ngOnInit() {
    this.userService.getAllUserCategory()
    .subscribe( (data: any ) => {
      this.user = data;
      console.log(this.user);
    });

  }

}
