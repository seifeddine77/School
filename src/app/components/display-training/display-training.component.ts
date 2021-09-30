import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-display-training',
  templateUrl: './display-training.component.html',
  styleUrls: ['./display-training.component.css']
})
export class DisplayTrainingComponent implements OnInit {
  id: any;
  searchedTraining: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private trainingservice: TrainingService,
    private router :Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.trainingservice.getTrainingById(this.id).subscribe(
      (data)=>{
        this.searchedTraining = data.training;
      }
    )
    // this.searchedTraining=this.searchTraining();
  }

  searchTraining() {
    let trainings = JSON.parse(localStorage.getItem('trainings') || '[]');
    let searchedTraining;
    for (let i = 0; i < trainings.length; i++) {
      if (trainings[i].id == this.id) {

        searchedTraining = trainings[i]

      }

    }
    return searchedTraining;


  }
  goToValidateInscription(id){
  this.router.navigate([`inscription/${id}`]);



  }
}
