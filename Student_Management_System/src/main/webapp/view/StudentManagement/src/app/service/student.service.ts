






import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { Student } from '../model/student';


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService(private http: HttpClient) {
  this.allstudent='http://localhost:2220/allStudent';

  constructor() {}
  public getAllStudent(): Observable<Student[]>{
    return this.http.get<Student[]>(this.allStudent);
  }
}

