import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { StaffComponent } from './staffRegistration/staff/staff.component';

import { StudentListComponent } from './student-list/student-list/student-list.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:'viewAll', component:StudentListComponent},
  {path:'staffRegister',component:StaffComponent},
  {path:'login',component:HomeComponent},
  {path:'user-login',component:UserLoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
