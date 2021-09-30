import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
blogs:any=[];
  constructor() { }

  ngOnInit() {

    this.blogs=[
      {name:'seif eddine ',email:"kk@kkk"},
      {name:'blog',email:"kk@kkk"},
      {name:'blog',email:"kk@kkk"},



    ]
  }

}
