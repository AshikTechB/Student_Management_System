import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-output-student',
  templateUrl: './output-student.component.html',
  styleUrls: ['./output-student.component.css']
})
export class OutputStudentComponent implements OnInit {
  studentarr: Student[] = [];
  student: Student;
  status: boolean = false;
  error: boolean = false;
  public formData: any = {};

  studentobj2: Student;
  studentidstatusDl: boolean=false;
  searchtype: string='';

  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) {
    this.student = new Student();
    this.studentobj2 = new Student();
    this.status = false;
  }
  addStudent() {
    this.router.navigate(['addStudent']);
  }

  /*Update student by id */
  statusClick: boolean = false;
  update() {
    this.statusClick = true;
  }
  updateStudent(formdata: NgForm) {
    this.formData = Number(formdata.value);
    this.studentService.getAllstd().subscribe(x => this.studentarr = x);
    console.log(this.formData.id);

    for(let i = 0; i< this.studentarr.length; ++i){
      let studentele: Student = this.studentarr[i];

      if (studentele.id == Number(this.formData.id)) { 
        this.status = true;
        this.studentobj2.id = studentele.id;
        console.log(this.status);
        break;
        
      }
      console.log(studentele.id);

    }


    if (this.status) {
      this.router.navigate([`updatestudent/${this.studentobj2.id}`]);
    }
    else {
      this.error = true;
    }

  }
  /*
  studentidDl(){
    this.studentidstatusDl=true;
     }
  deleteStdById(formdata: NgForm) {
    this.formData = formdata.value;
    this.searchtype = 'delId';
    this.router.navigate([`studentById/${this.student.id}/${this.searchtype}`]);
     
  }
 */
  ngOnInit(): void {

    this.studentarr = [];
    this.route.params.subscribe((parameters) => {

      if ((parameters['id']) && (parameters['searchtype'])) {
        if (String(parameters['searchtype']).localeCompare('byId') == 0) {
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
          this.studentarr[0] = this.student;
        } else if (String(parameters['searchtype']).localeCompare('delId') == 0) {
          this.studentService.deleteById(parameters['id']).subscribe(x => console.log(x));
          
         // this.studentService.deleteById(parameters['id']).subscribe(x => {this.gotoHomePage()});
        }

      } else {
        this.studentService.getAllstd().subscribe(x => this.studentarr = x);
      }





    });

   
  }
  gotoHomePage(){
    console.log("updated")
    this.router.navigate(['/home']);
  }
}
