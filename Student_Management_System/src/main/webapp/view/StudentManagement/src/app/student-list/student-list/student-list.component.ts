


import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

import { StudentService } from 'src/app/service/student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students:Student[]=[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }

}
