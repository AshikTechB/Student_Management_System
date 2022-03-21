import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { viewStudents } from './view/viewStudents.component';

const routes: Routes = [];
{ path: 'allStudent', component: viewStudentsComponent },
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
