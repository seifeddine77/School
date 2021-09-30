import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-admin-trainings',
  templateUrl: './admin-trainings.component.html',
  styleUrls: ['./admin-trainings.component.css']
})
export class AdminTrainingsComponent implements OnInit {
  trainings: any = [];
  teacher : any;
  constructor(
    private router: Router,
    private trainingService: TrainingService,
    private teacherService : TeacherService ,
    ) { }

  ngOnInit() {
    this.trainingService.getAllTrainings().subscribe(
      (data)=>{
        this.trainings = data.allTrainings;
      }
    )
    this.teacherService.getTeacherByID(this.trainings.teacher.id).subscribe(
      (data)=>
      {
        this.teacher = data.findedTeacher;
        console.log('here teacher name' , this.teacher);
        
      }
    )
    // 

  }
  goToDisplay(id) {
    this.router.navigate([`displayTraining/${id}`])



  }
  goToEdit(id) {
    this.router.navigate([`editTraining/${id}`])


  }
  deletetraining(id) {
    this.trainingService.deleteTraining(id).subscribe(
      (data)=>{
        console.log('message',data.message);
        this.trainingService.getAllTrainings().subscribe(
          (data)=>{
            this.trainings = data.allTrainings;
          }
        )
        
      }
    )

    // let trainings = JSON.parse(localStorage.getItem('trainings') || '[]');
    // trainings.splice(pos, 1);
    // localStorage.setItem('trainings', JSON.stringify(trainings));
    // location.reload();

  }
}


