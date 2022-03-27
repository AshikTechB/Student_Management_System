import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private allstdUrl:string;
  private saveStudentUrl: string;

  private deleteStudentByIdUrl: string;
  private UserUrl: string;
 
 
  private findStudentByIdUrl: string;
private registerUrl:string;
private updatestudentUrl:string;
  constructor(private http:HttpClient) { 
    this.allstdUrl = 'http://localhost:9090/allStudent';
    this.saveStudentUrl = 'http://localhost:9090/student';
    this.findStudentByIdUrl='http://localhost:9090/student/';
    this.deleteStudentByIdUrl='http://localhost:9090/student/';
    this.UserUrl='http://localhost:9090/users';
    this.registerUrl='http://localhost:9090/registeruser';
    this.updatestudentUrl='http://localhost:9090/updatestudent';

    
  }
  public getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(this.UserUrl);
  }

  public registerUser(user: User) {
    return this.http.post<User>(this.registerUrl, user);
    }

  public getAllstd(): Observable<Student[]>{
    return this.http.get<Student[]>(this.allstdUrl);
  }
  public findById( id:string): Observable<Student>{
      
      return this.http.get<Student>(this.findStudentByIdUrl+id);
  }

  public deleteById( id:number): Observable<Student>{

    return this.http.delete<Student>(this.deleteStudentByIdUrl+id);
}

public saveStudent(student:Student){
  return this.http.post<Student>(this.saveStudentUrl, student);
}
public updateStudent(student:Student):Observable<Student>{
  
 return this.http.put<Student>(this.updatestudentUrl,student);
}

}