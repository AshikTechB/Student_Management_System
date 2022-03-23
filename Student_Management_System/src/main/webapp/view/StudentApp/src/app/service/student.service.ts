import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { Student } from '../model/student';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private allStudentUrl:string;
  private addStudentUrl: string;
 private studentByIdURL: string;
  private deleteUrl: string;
  userUrl: string;
  constructor(private http:HttpClient) { 
    this.allStudentUrl = 'http://localhost:9090/allStudent';
    this.addStudentUrl = 'http://localhost:9090/student';
    this.studentByIdURL='http://localhost:9090/student/';
    this.deleteUrl='http://localhost:9090/student/';
    this.userUrl='http://localhost:9090/users';
  }
  public findAll(): Observable<any> {
    return this.http.get<Student[]>(this.allStudentUrl);
   // return  this.http.request('GET', this.allStudentUrl, {responseType:'json'});
  }
 
 
  public addStudent(student: Student) {
    return this.http.post<Student>(this.addStudentUrl, student);
  }
  public StudentById (id:number): Observable<any>{

    return this.http.get<Student[]>(this.studentByIdURL);
  }
  public deleteStudent (id:number): Observable<any>{

    return this.http.delete<Student[]>(this.studentByIdURL);
  }
  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
   
  }

}
