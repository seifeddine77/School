import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscription: any;
  id: any;
  idStudent: any;
  inscriptionForm: FormGroup;
  student:any;
  studentForm:FormGroup;
  constructor(
    private activatedRouter: ActivatedRoute,
    private trainingService: TrainingService,
    private studentService: StudentService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let idStudent = JSON.parse(localStorage.getItem('connectedUser') || '[]');
    console.log('here id student',idStudent);
    
   this.studentService.getStudentById(idStudent).subscribe(
     (data)=>{
       this.student = data.student;
       console.log('student',this.student);
       
     }
   )
    this.inscriptionForm = this.fb.group(
      { 
        firstName:[''],
        title: [''],
        duration: [''],
        date: [''],
        price: [''],
        description: [''],
        teacher: ['']


      }
    )
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    console.log('here id', this.id);

    this.trainingService.getTrainingById(this.id).subscribe(
      (data) => {
        this.inscription = data.training;
        console.log('training', this.inscription);

      }
    )
  }
  inscriptionTraining() {

  }
}
