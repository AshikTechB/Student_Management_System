import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddStudentComponent } from './add-student/add-student.component';
;
import { HomeComponent } from './home/home.component';
import { OutputStudentComponent } from './output-student/output-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo:"userLogin"},
  {path:'home', component: HomeComponent},
 
  {path:'userLogin', component: UserLoginComponent},
  
  {path:'userRegistration', component:UserRegistrationComponent},
  {path:'allStudent',component:OutputStudentComponent},
   {path:'studentById/:id/:searchtype',component:OutputStudentComponent},
   {path:'addStudent',component:AddStudentComponent},
   {path:'updatestudent/:id',component:UpdateStudentComponent},
   {path:'deleteById/:id/:searchtype',component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
