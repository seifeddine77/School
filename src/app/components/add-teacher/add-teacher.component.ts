import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
addTeacherForm:FormGroup;
teacher: any = { };
  constructor( private fb:FormBuilder,
    private teacherService :TeacherService) { }

  ngOnInit() {

  
    this.addTeacherForm=this.fb.group({
       firstName:['',[Validators.required,Validators.minLength(4)]],
       lastName:['',[Validators.required,Validators.minLength(4)]],
       email:['',[Validators.required,Validators.email]],
       address:['',[Validators.required]],
       subject:['', [Validators.required]],
       phone:['',[Validators.required,Validators.minLength(8),Validators.maxLength]]



    })
  }
  addTeacher(){
// let teachers = JSON.parse(localStorage.getItem('teachers')||'[]');
// let idTeacher=JSON.parse(localStorage.getItem('idTeacher')||'1');
// let teacher= this.addTeacherForm.value;
// teacher.id=idTeacher;
// teachers.push(this.addTeacherForm.value);
// localStorage.setItem('teachers',JSON.stringify(teachers));
// localStorage.setItem('idTeacher',idTeacher+1);

this.teacherService.addTeacher(this.addTeacherForm.value).subscribe(
  ()=>
  {
    console.log('message');
    
  }
)

  }
  

}
