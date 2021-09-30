import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-admin-students',
  templateUrl: './admin-students.component.html',
  styleUrls: ['./admin-students.component.css']
})
export class AdminStudentsComponent implements OnInit {
users:any=[];
  constructor(
    private studentService : StudentService ,
    private  router : Router 
  ) { }

  ngOnInit() {
    this.studentService.getAllStudent().subscribe(
      (data)=>{
        this.users = data.allStudents;
      }
    )
    // this.users=JSON.parse(localStorage.getItem('users')||'[]');
  }
  goToDisplay(id)
  {
    this.router.navigate([`displayStudent/${id}`]);
  }
  goToEdit(id){
    this.router.navigate([`editStudent/${id}`]);
  }
  deleteuser(id){
    this.studentService.deleteStudent(id).subscribe(
      (data)=>{
        console.log('message',data.message);
        this.studentService.getAllStudent().subscribe(
          (data)=>
          {
            this.users = data.allStudents;
            
          }
        )
        
      }
    )
  }
}
