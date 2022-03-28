import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { StudentService } from 'src/app/service/student.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title = "Student"
  status: boolean = false;
  error: boolean = false;
  user: User;
  users: User[] = [];
  name: string | undefined;
  pass:string='';
  decryptedPassword:String='';
  public formData: any = {};

  constructor(private studentservice: StudentService, private router: Router) {
     this.user=new User();
   }

  ngOnInit(): void {
    this.studentservice.getAllUser().subscribe(alluser => this.users = alluser);
  }
  decrypt(password:String)
  {
    this.decryptedPassword = CryptoJS.AES.decrypt(password.trim(), "Encryption").toString(CryptoJS.enc.Utf8);
    return this.decryptedPassword;
  }

  userLogin(formdata: NgForm) {
    this.formData = formdata.value;
   
    this.users.forEach(user => {
     
      if (user.username == this.formData.username && this.decrypt(user.password) == this.formData.password) {

        this.status = true;
      
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


