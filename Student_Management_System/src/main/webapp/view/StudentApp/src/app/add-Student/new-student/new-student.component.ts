import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { resourceLimits } from 'worker_threads';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  student: Student;
  constructor(private route: ActivatedRoute, private router: Router, private studentservice: StudentService) {
    this.student = new Student();
  }

  onSubmit() {
    this.findResult();
    this.studentservice.addStudent(this.student).subscribe(data => { this.homepage() });
  }
  homepage() {
    this.router.navigate(['/home']);
  }
  findResult() {
    let st = new Student();
    let physics = st.physics;
    let biology = st.biology;
    let chemistry = st.chemistry;
    let score = (physics + biology + chemistry) / 3;
    if (score >= 60) {
      st.division = "I ";
      st.result = "Pass";
    }
    else if (score >= 40 && score < 60) {
      st.division = "II ";
      st.result = "Pass";
    }
    else {
      st.division = "III ";
      st.result = "Fail";
    }
return;


  }

  ngOnInit(): void {
  }

}
