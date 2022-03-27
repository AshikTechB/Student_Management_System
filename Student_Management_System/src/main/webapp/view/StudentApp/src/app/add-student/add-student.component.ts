import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student;
 
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {
    this.student = new Student();

  }
  onSubmit() {
   
    this.findResult();
    this.studentService.saveStudent(this.student).subscribe(data => { this.homepage1() });
  }
  homepage1() {
    this.router.navigate(['/home']);
  }
  findResult() {

    let physics = Number(this.student.physics);
    let biology = Number(this.student.biology);
    let chemistry = Number(this.student.chemistry);
    let sum: number = (physics + biology + chemistry);
    let score: number = sum / 3;

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



  }

  ngOnInit(): void {
  }



}
