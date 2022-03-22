


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
@Injectable({
  providedIn: 'root'
})


export class StudentService {

  private allStudentUrl: string;
  private saveStudentUrl: string;

  constructor(private http: HttpClient) {
    this.allStudentUrl = 'http://localhost:3330/viewAll';
    this.saveStudentUrl= 'http://localhost:3330/save';
    
  }
  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.allStudentUrl);
  }
  public save(student: Student) {
    return this.http.post<Student>(this.saveStudentUrl, student);
  }
}
