import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {


  student: Student;
  constructor(private route: ActivatedRoute, private router: Router, private studentservice: StudentService) {
    this.student = new Student(0,0,'','',0,0,0,'','');
  }

  onSubmit() {
    this.findResult();
    this.studentservice.addStudent(this.student).subscribe(data => { this.homepage() });
  }
  homepage() {
    this.router.navigate(['/home']);
  }
  findResult() {
    
    let physics = this.student.physics;
    let biology = this.student.biology;
    let chemistry = this.student.chemistry;
    let score = (physics + biology + chemistry) / 3;
    if (score >= 60) {
      this.student.division = "I ";
      this.student.result = "Pass";
    }
    else if (score >= 40 && score < 60) {
      this.student.division = "II ";
      this.student.result = "Pass";
    }
    else {
      this.student.division = "III ";
      this.student.result = "Fail";
    }
return;


  }

  ngOnInit(): void {
  }

}
