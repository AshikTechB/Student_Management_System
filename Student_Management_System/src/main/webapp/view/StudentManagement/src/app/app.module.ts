import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list/student-list.component';
import { StudentService } from './service/student.service';
import { StaffComponent } from './staffRegistration/staff/staff.component';
import { HomeComponent } from './home/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StaffComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
