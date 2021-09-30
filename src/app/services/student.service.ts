import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
studentURL:string='http://localhost:3000/students'
  constructor(
    private http:HttpClient
  ) { }

  getAllStudent(){
    return this.http.get<{allStudents:any}>(this.studentURL);
  }
  getStudentById(id){

    return this.http.get<{student:any}>(`${this.studentURL}/${id}`);
  }
  deleteStudent(id){
    return this.http.delete<{message:string}>(`${this.studentURL}/${id}`)


  }
  editStudent(student){
    return this.http.put<{message:string}>(`${this.studentURL}/${student._id}` , student);

  }
  signup(student){

    return this.http.post<{message:string}>(`${this.studentURL}/signup`,student);

  }
  login(student){
    return this.http.post<{message:string, loggedStudent:any}>(`${this.studentURL}/login`,student);
  }
}
