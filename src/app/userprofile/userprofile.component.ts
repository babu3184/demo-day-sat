import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  allUsers: User[];
  generalService: any;
  contentGeneral: any;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.allUsers);

  }


  // tslint:disable-next-line:typedef
  getAllUsers(){
    this.userservice.getAllUsers().subscribe(
      (data: User[]) => {
        this.allUsers = data;
      });
  }

  // tslint:disable-next-line:typedef
  deleteUser(id: number){
     this.userservice.deleteUser(id).subscribe(
       (data: User) => {
         this. getAllUsers();
       }
     );
}

// tslint:disable-next-line:typedef
update(user){
    this.userservice.currentUser = Object.assign({}, user);
  }

  // tslint:disable-next-line:typedef
  getContentJSON() {
    this.generalService.getContentJSON().subscribe(data => {
      this.contentGeneral = data;
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }

}
