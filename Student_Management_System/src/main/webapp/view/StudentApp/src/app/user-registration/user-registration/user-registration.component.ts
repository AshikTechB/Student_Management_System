import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { StudentService } from 'src/app/service/student.service';


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

  constructor(private router: Router,private studentservice:StudentService) {
    this.user= new User();
   }
   onSubmit() {
     
    if(this.user.password==this.confirmPassword){
      this.missmatch="";
      this.studentservice.registerUser(this.user).subscribe(data => {this.gotoLogInPage()});
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
