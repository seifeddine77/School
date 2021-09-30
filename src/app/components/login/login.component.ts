import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message : string ;
  constructor(
    private fb:FormBuilder,
    private studentService : StudentService ,
    private router :Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        email:['',[Validators.email,Validators.required]],
        pwd :['',[Validators.maxLength(12),Validators.minLength(8),Validators.required]]

      }
    )
  }
  login(){


    console.log(this.loginForm.value);
    this.studentService.login(this.loginForm.value).subscribe(
      (data)=>{
            console.log('message',data.message);
            if (data.message == '0') {
              console.log('invalid email/pwd');
             this.message = 'invalid email/pwd' ;
              
            }
            else if (data.message =='1'){
              console.log('invalid email/pwd');
              

            }
            else{
              this.router.navigate(['student-space']);
            }
            localStorage.setItem('connectedUser',JSON.stringify(data.loggedStudent.id));
      }
    )
    
  }

}
