import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any=[];

  constructor() { }

  ngOnInit() {
    this.categories=[
      {name:"seif", email:"bla bla"},
      {name:"seif", email:"bla bla"},
      {name:"seif", email:"bla bla"},
      {name:"seif", email:"bla bla"},
    ]
  }

}
