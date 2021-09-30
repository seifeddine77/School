import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm: FormGroup;
  student: any;
  id: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(4)]],
        lastName: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength]],
        address: ['', [Validators.required]],


      }
    )
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.studentService.getStudentById(this.id).subscribe(
      (data) => {
        this.student = data.student;
        console.log('student', this.student);
      }
    )



  }
  editStudent(){
    
    this.editForm.value._id = this.id;
    console.log('edit form', this.editForm.value);
    
    this.studentService.editStudent(this.editForm.value).subscribe(
      (data)=>
      {
        console.log('message' , data.message);
        this.router.navigate(['admin']); 
        
      }
    )
  }
}
