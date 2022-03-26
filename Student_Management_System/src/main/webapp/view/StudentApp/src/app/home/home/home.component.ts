



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  searchtype: string='';
  student:Student; 
    constructor(private router: Router,private studentService: StudentService,private route: ActivatedRoute)
   {
    this.student = new Student();
   }
   public formData:any ={};
   allstudent(){
      //this.searchtype = 'all';
      //this.router.navigate([`allStudent/${this.searchtype}`]);

      this.router.navigate(['allStudent']);
   }
  
   studentidstatus: boolean = false;
   studentid() {
      this.studentidstatus = true;
      this.studentidstatusDl=false;
    }
    studentidstatusDl: boolean = false;
    
    studentidDl(){
   this.studentidstatusDl=true;
   this.studentidstatus = false;
    }
    
    showStdById(formdata1: NgForm) {
      this.formData = formdata1.value;
      this.searchtype = 'byId';
      this.router.navigate([`studentById/${this.student.id}/${this.searchtype}`]);
    }
  
    studentiddelstatus: boolean = false;

    deleteStdById(formdata: NgForm) {
      this.formData = formdata.value;
      this.searchtype = 'delId';
      this.router.navigate([`deleteById/${this.student.id}/${this.searchtype}`]);
    }
  
    addStudent(){
      this.router.navigate(['addStudent']);
    }
  
    ngOnInit(): void {
      

      this.route.params.subscribe( (parameters)=>{
        if (String(parameters['searchtype']).localeCompare('delId') == 0) {
        this.studentService.deleteById(parameters['id']).subscribe(x => {
          console.log(x);
          this.studentiddelstatus = true;
        });
          
        }
        });

}

}
