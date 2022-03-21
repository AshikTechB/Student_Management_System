







import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
    selector: 'app-viewStudents',
    templateUrl: './viewStudents.component.html',

  })
  export class viewStudents implements OnInit {
    Student: Student[]=[];
    constructor(private studentService:StudentService) { }
    
   
    ngOnInit(): void {
        this.studentService.getAllStudent().subscribe(allStud=>this.Student=allStud);
    }