import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { StudentService } from 'src/app/service/student.service';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user : User;
  errormsg:string='';
  confirmPassword: string='';
  missmatch:string='';
  
  EncryptPassword: string='';
  constructor(private router: Router,private studentservice:StudentService) {
    this.user= new User();
   }
   encrypt(password:String)
   {
    this.EncryptPassword = CryptoJS.AES.encrypt(this.user.password.trim(), "Encryption").toString();
     return this.EncryptPassword;
   }

   onSubmit() {
    let cryptuser:User=this.user;
  
 

    if(this.user.password==this.confirmPassword){

      this.missmatch="";
      cryptuser.password=this.encrypt(this.user.password); 
      this.studentservice.registerUser(cryptuser).subscribe(data => {this.gotoLogInPage()});
    }
      else
    {
      this.missmatch="Passwords are not matching";
    }
   
  }
gotoLogInPage(){
  this.router.navigate(['/userLogin']);
}
  ngOnInit(): void {
  }

}

