import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-admin-sessions',
  templateUrl: './admin-sessions.component.html',
  styleUrls: ['./admin-sessions.component.css']
})
export class AdminSessionsComponent implements OnInit {
sessions:any;
  constructor(
    private sessionService:SessionService ,
    private teacherService:TeacherService,
  ) { }

  ngOnInit() {
    this.sessionService.getAllSessions().subscribe(
      (data)=>
      {
        this.sessions = data.allSessions;
      }
    )
  }
  deleteSession(id){
    this.sessionService.deleteSession(id).subscribe(
      (data)=>{
        console.log('message', data.message);
        this.sessionService.getAllSessions().subscribe(
          (data)=>
          {
              this.sessions=data.allSessions;            
          }
        )
        
      }
    )
  }

  teacherName(id){
   
    this.teacherService.getTeacherByID(id).subscribe(
      (data)=>{
        return data.findedTeacher.firstName;
       
      }
    )
   
  }
}
