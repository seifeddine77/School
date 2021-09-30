import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  id: any;
 
  editTeacherForm: FormGroup;
  teacher: any = { };
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private teacherService:TeacherService) { }

  ngOnInit() {

    this.editTeacherForm=this.fb.group(
      {
        firstName:['',[Validators.required,Validators.minLength(4)]],
        lastName:['',[Validators.required,Validators.minLength(4)]],
        email:['',[Validators.required,Validators.email]],
        address:['',[Validators.required]],
        subject:['', [Validators.required]],
        phone:['',[Validators.required,Validators.minLength(8),Validators.maxLength]]
 
 
 
     }
    )
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
     this.teacherService.getTeacherByID(this.id).subscribe(
       (data)=>{
  
      this.teacher = data.findedTeacher;
      console.log('teacher',this.teacher);

       }
      
       
     )
   
    // this.teacher=this.searchTeacher();
   
    // teacher = this.searchTeacher();
    // console.log('hetha houwa',teacher);
    
  }
  // searchTeacher() {
  //   let teachers = JSON.parse(localStorage.getItem('teachers') || '[]');
  //   let searchedTeacher;
  //   for (let i = 0; i < teachers.length; i++) {
  //     if (teachers[i].id == this.id) {

  //       searchedTeacher = teachers[i]

  //     }

  //   }
  //   return searchedTeacher;


  // }

  editTeacher() { 
    this.editTeacherForm.value._id=this.id;
    this.teacherService.updateTeacher(this.editTeacherForm.value).subscribe(
      ()=>{
             console.log('message');
             this.router.navigate(['admin']);
             
      }
    )
    
  }


  
}
