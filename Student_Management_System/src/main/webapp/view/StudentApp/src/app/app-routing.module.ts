import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStudentComponent } from './add-Student/new-student/new-student.component';
import { HomeComponent } from './home/home/home.component';
import { StudentListComponent } from './student-list/student-list/student-list.component';
import { UserLoginComponent } from './user-login/user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration/user-registration.component';

const routes: Routes = [
  {path:'viewAll', component:StudentListComponent},
  {path: '', pathMatch:"full", redirectTo:"userLogin"},
  {path: 'addStudent',component:NewStudentComponent},
  {path:'student/:id', component:StudentListComponent},
  {path:'userLogin', component: UserLoginComponent},
  {path:'delete/:id', component: StudentListComponent},
  {path:'update/:id', component: NewStudentComponent},
  {path:'home', component: HomeComponent},
  {path:'userRegistration', component:UserRegistrationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
