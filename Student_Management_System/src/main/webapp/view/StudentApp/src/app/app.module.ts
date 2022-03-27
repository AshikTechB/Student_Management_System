import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './service/student.service';

import { FormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { OutputStudentComponent } from './output-student/output-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    UserRegistrationComponent,
    UserLoginComponent,
    OutputStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
   
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
