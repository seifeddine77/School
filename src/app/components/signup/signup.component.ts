import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
  constructor(private fb:FormBuilder ,
    private studentService : StudentService ,
    private router: Router) { }

  ngOnInit() {
    this.signupForm=this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(4)]],
      lastName:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.minLength(8)]],
      confirmPwd:[''],
      phone:['',[Validators.required,Validators.minLength(8),Validators.maxLength]],
      address:['',[Validators.required]],






    })
  }
  signup(){

    this.signupForm.value.dateOfJoin = new Date() ;
    this.studentService.signup(this.signupForm.value).subscribe(
      (data)=>
      {
        console.log('message',data.message);
        this.router.navigate(['login']);
        
      }
    )
    // let users =JSON.parse(localStorage.getItem('users')||'[]');
    // let idUser = JSON.parse(localStorage.getItem('idUser')||'1');
    // let user = this.signupForm.value;
    // user.id=idUser;
    // users.push(this.signupForm.value);
    // localStorage.setItem('users',JSON.stringify(users));
    // localStorage.setItem('idUser',idUser+1);

  }

}
