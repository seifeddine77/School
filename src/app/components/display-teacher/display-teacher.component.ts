import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-display-teacher',
  templateUrl: './display-teacher.component.html',
  styleUrls: ['./display-teacher.component.css']
})
export class DisplayTeacherComponent implements OnInit {
id:any;
searchedTeacher:any={};

  constructor(
    private activatedRoute:ActivatedRoute,
    private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log('here id',this.id);
    
    this.teacherService.getTeacherByID(this.id).subscribe(
      (data)=>{
       
        this.searchedTeacher = data.findedTeacher;
        console.log('teacher',this.searchedTeacher);
        
        
      }
    )
    
    
    // this.searchTeacher=this.searchTeacher();
  }


  searchTeacher(){
    let teachers = JSON.parse(localStorage.getItem('teachers')||'[]');
    let searchedTeacher;
    for (let i = 0; i < teachers.length; i++) {
        if (teachers[i].id == this.id) {
    
          searchedTeacher = teachers[i]
          
        }
      
    }
    return searchedTeacher;
    
    
      }

}
