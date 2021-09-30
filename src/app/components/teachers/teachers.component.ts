import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
teachers:any=[];
  constructor() { }

  ngOnInit() {
    this.teachers=[
{name:'seif',emaail:''},
{name:'',emaail:''},
{name:'',emaail:''},
{name:'',emaail:''},



    ]
  }

}
