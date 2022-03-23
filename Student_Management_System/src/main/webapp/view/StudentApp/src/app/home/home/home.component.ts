



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  student: Student;
  
  constructor(private router: Router) {
    this.student= new Student(0,0,'','',0,0,0,'','');
  }
  public formData: any = {};


  showStudent(formData: NgForm) {
    
    this.formData = formData.value;

    console.log(this.formData.id);
    this.router.navigate([`student/${this.student.id}`]);

  }
 

  ngOnInit(): void {
  }

}
