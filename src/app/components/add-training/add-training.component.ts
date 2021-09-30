import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
addTrainingForm:FormGroup;
id:any;
title:any;
training:any={};
searchedTraining:any={};
teachers:any;
  constructor(private fb:FormBuilder,
     private activatedRoute:ActivatedRoute,
     private router:Router ,
     private trainingService:TrainingService ,
     private teacherService : TeacherService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.addTrainingForm=this.fb.group({

    title:[''],
    duration:[''],
    date:[''],
    price:[''],
    description:[''],
    teacher:['']


    })
 

    this.trainingService.getTrainingById(this.id).subscribe(
      (data)=>{
        this.training = data.training;
      }
    )
    
    if (this.id) {
      this.title="Edit";
      // this.training=this.searchTraining();

      
    }
    else{
      this.title="Add";


    }

this.teacherService.getAllTeachers().subscribe(
  (data)=>
  {
      this.teachers = data.allTeachers;
  }
)
  }
  addEditTraining(){
    if (this.id) {


      this.trainingService.editTraining(this.training).subscribe(
        (data)=>
        {
          console.log('message' ,data.message);
          
        }
      )

      
      // let trainings =JSON.parse(localStorage.getItem('trainings')||'[]');
      // for (let i = 0; i < trainings.length; i++) {
      //   if (trainings[i].id==this.id) {


      //     trainings[i].title = this.training.title;
      //     trainings[i].duration = this.training.duration;
      //     trainings[i].date = this.training.date;
      //     trainings[i].price = this.training.price;
      //     trainings[i].description = this.training.description;
       
          
      //   }
        
      // }
      // localStorage.setItem('trainings',JSON.stringify(trainings));
       this.router.navigate(['admin']);
     
      
    }
    else{
      console.log('trainig',this.training);
      
  this.trainingService.addTraining(this.training).subscribe(
    (data)=>{
      console.log('message', data.message);
      
    }
  )
      // let trainings = JSON.parse(localStorage.getItem('trainings')||'[]');
      // let idTraining = JSON.parse(localStorage.getItem('idTraining')||'1');
      // this.training.id = idTraining;
      // trainings.push(this.training);
      // localStorage.setItem('trainings',JSON.stringify(trainings));
      // localStorage.setItem('idTraining',idTraining+1);
      alert('training added ');
      this.router.navigate(['admin']);
    }





  }
  searchTraining(){
    let trainings = JSON.parse(localStorage.getItem('trainings')||'[]');
    let searchedTraining;
    for (let i = 0; i < trainings.length; i++) {
        if (trainings[i].id == this.id) {
    
          searchedTraining = trainings[i]
          
        }
      
    }
    return searchedTraining;
    
    
      }

}
