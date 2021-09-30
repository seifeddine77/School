import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent implements OnInit {
courses:any=[];
  constructor(
    private trainingService: TrainingService
  ) { }

  ngOnInit() {
    this.trainingService.getAllTrainings().subscribe(
      (data)=>
      {
        this.courses =data.allTrainings;
      }
    )
//     this.courses=[
// {name:"",email:""},
// {name:"",email:""},
// {name:"",email:""},
// {name:"",email:""},


//     ]
  }

}
