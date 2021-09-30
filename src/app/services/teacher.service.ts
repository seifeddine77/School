import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
teacherURL:string='http://localhost:3000/teachers';
  constructor(
    private http :HttpClient
  ) { }
  getAllTeachers()
  {
    return this.http.get<{allTeachers:any}>(this.teacherURL);
  }
  getTeacherByID(id){
    return this.http.get<{findedTeacher:any}>(`${this.teacherURL}/${id}`);
  }
  addTeacher(teacher){
    return this.http.post(`${this.teacherURL}`,teacher);
  }
  deleteTeacher(id){
    return this.http.delete<{message:string}>(`${this.teacherURL}/${id}`);
  
  }
  updateTeacher(teacher){
    return this.http.put<{message:any}>(`${this.teacherURL}/${teacher._id}`,teacher);
  }
}
