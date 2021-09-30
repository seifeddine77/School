import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {
 id:any;
 searchedStudent:any;
  constructor(
    private studentService : StudentService ,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
    

    this.studentService.getStudentById(this.id).subscribe(
      (data)=>
      {
        this.searchedStudent = data.student
      }
    )
  }

}
