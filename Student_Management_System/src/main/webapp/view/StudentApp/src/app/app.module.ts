import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { StudentListComponent } from './student-list/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './service/student.service';
import { StudentUpdateComponent } from './update-student/student-update/student-update.component';
import { NewStudentComponent } from './add-Student/new-student/new-student.component';
import { FormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    StudentUpdateComponent,
    NewStudentComponent,
    UserRegistrationComponent,
    UserLoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule,
   
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
