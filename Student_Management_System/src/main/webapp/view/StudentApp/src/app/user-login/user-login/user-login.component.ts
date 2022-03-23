import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { StudentService } from 'src/app/service/student.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title = "Student"
  status: boolean = false;
  error: boolean = false;
  users: User[] = [];
  name: string | undefined;

  public formData: any = {};

  constructor(private userService: StudentService, private router: Router, private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.userService.findAllUsers().subscribe(alluser=> this.users = alluser);
  }

  userLogin(formdata: NgForm) {
    this.formData= formdata.value;

    this.users.forEach(user => {
      if (user.userid == this.formData.username && user.password == this.formData.password) {

        this.status = true;
        this.name = user.first + " " + user.last;
      }

    });

    if (this.status == true) {
      this.router.navigate(['home']);
    }
    else {
      this.error = true;
    }
  }

}
