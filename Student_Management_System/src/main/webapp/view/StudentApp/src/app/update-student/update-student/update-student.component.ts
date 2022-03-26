import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student;
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) {
    this.student = new Student();
  }
  onSubmit() {
    this.findResult();//data => {this.homepage()})
    this.studentService.updateStudent(this.student).subscribe(x => console.log(x));
 
  }
  homepage() {
    
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
      this.route.params.subscribe((parameters) => {
      this.studentService.findById(parameters['id']).subscribe(x => {
        this.student.name = x.name;
        this.student.id = x.id;
        this.student.biology = x.biology;
        this.student.chemistry = x.chemistry;
        this.student.dateOfAdmission = x.dateOfAdmission;
        this.student.division = x.division;
        this.student.physics = x.physics;
        this.student.result = x.result;
        this.student.rollno = x.rollno;
      }
     
      );
    });

}
}