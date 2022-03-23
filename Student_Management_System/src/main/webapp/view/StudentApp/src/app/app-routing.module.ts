import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStudentComponent } from './add-Student/new-student/new-student.component';
import { HomeComponent } from './home/home/home.component';
import { StudentListComponent } from './student-list/student-list/student-list.component';
import { UserLoginComponent } from './user-login/user-login/user-login.component';

const routes: Routes = [
  {path:'viewAll', component:StudentListComponent},
  {path: '', pathMatch:"full", redirectTo:"userLogin"},
  {path:"addStudent",component:NewStudentComponent},
  {path:'student/:id', component:StudentListComponent},
  {path:'userLogin', component: UserLoginComponent},
  {path:'userLogin', component: UserLoginComponent},
  {path:'delete', component: StudentListComponent},
  {path:'home', component: HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
