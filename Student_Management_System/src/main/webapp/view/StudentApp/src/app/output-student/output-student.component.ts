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
  errorst:String='';
  studentobj2: Student;
  studentidstatusDl: boolean=false;
  searchtype: string='';
  statusdlt:boolean=false;
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
    this.formData = formdata.value;
    
    this.router.navigate([`updatestudent/${this.student.id}`]);
   
  }
  
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
            this.studentarr[0] = this.student;
          },error => { 
             this.studentarr=[]
             alert("Student Not Found!!")
          }
          );
         
        } 
        else if (String(parameters['searchtype']).localeCompare('delId') == 0) {
          this.studentService.deleteById(parameters['id']).subscribe(x => {

            alert("successfully removed!!");
        
          },error => { 
             
             alert("Student Not Found!!")
             
          }
          );
           
        
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
