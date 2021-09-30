import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
trainingURL:string = 'http://localhost:3000/trainings'
  constructor( 
    private http : HttpClient
  ) { }
  getAllTrainings()
  {
    return this.http.get<{allTrainings:any}>(this.trainingURL);
  }
  getTrainingById(id)
  {
    return this.http.get<{training:any}>(`${this.trainingURL}/${id}`);
  }
  addTraining(training){
    return this.http.post<{message:string}>(this.trainingURL,training);
  }
  deleteTraining(id){
    return this.http.delete<{message:string}>(`${this.trainingURL}/${id}`);
  }
  editTraining(training){
    return this.http.put<{message:string}>(`${this.trainingURL}/${training._id}`, training);
  }
}
