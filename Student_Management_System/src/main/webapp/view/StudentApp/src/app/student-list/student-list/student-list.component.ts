import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from 'src/app/model/student';




import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  constructor(private studentService: StudentService, private route: ActivatedRoute) { }
  studentlist: Student[] = [];
  ngOnInit() {
    this.studentService.findAll().subscribe((data: Student[]) => {
      this.studentlist = data;})
    
   
      
    
}

}

