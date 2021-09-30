import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {
  trainings:any;
  session: any = {};
  sessionForm: FormGroup;
  teachers:any;
  title:string;
  id:any;
  constructor(private teacherService : TeacherService ,
    private trainingService :TrainingService ,
    private fb:FormBuilder,
    private sessionService : SessionService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.trainingService.getAllTrainings().subscribe(
      (data)=>{
       this.trainings = data.allTrainings;
      }
    );
    this.teacherService.getAllTeachers().subscribe(
      (data)=>
      {
       this.teachers = data.allTeachers;
       console.log('teachers',data.allTeachers);
       
      }
    )
    this.sessionForm =this.fb.group(
      {
        name:[''],
        teacher:[''],
        training:['']

      }
    )

    this.teacherService.getAllTeachers().subscribe(
      (data)=>
      {
       this.teachers = data.allTeachers;
       console.log('teachers',data.allTeachers);
       
      }
    )
    if (this.id) {
      this.title = 'edit';
      
    }
    else{
      this.title = 'add';
    }
  }
  addEditSession()
  {
    console.log('here session',this.session);
    this.sessionService.addSession(this.session).subscribe(
      (data)=>
      {
        console.log('message', data.message);
        
      }
    )
    
  }
}
