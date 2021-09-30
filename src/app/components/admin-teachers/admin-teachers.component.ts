import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.css']
})
export class AdminTeachersComponent implements OnInit {
teachers:any;
  constructor(
    private router:Router,
    private teacherService:TeacherService
  ) { }

  ngOnInit() {
    this.teacherService.getAllTeachers().subscribe(
      (data)=>
      {
        this.teachers = data.allTeachers
      }
      
    )
    console.log('teacher',this.teachers);

    // this.teachers=JSON.parse(localStorage.getItem('teachers')||'[]');
  }
  goToDisplay(id){
    this.router.navigate([`displayTeacher/${id}`]);



  }
  goToEdit(id){
    this.router.navigate([`editTeacher/${id}`]);


  }
  deleteteacher(id){

this.teacherService.deleteTeacher(id).subscribe(
  (data)=>{
    console.log('message',data.message);
    this.teacherService.getAllTeachers().subscribe(
      (data)=>{
        this.teachers =data.allTeachers;
      }
    )
  }
  
)


    // let teachers = JSON.parse(localStorage.getItem('teachers')||'[]');
    // teachers.splice(pos,1);
    // localStorage.setItem('teachers',JSON.stringify(teachers));
  }


}
