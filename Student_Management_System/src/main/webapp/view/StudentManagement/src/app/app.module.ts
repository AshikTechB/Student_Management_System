import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { ViewStudentComponent } from './view/view-student/view-student.component';
import { ResultpageComponent } from './view/resultpage/resultpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewStudentComponent,
    ResultpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
