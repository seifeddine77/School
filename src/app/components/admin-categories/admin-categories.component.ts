import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
categories:any=[];
  constructor(
    private router:Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  this.categoryService.getAllCategories().subscribe(
    (data)=>
    {
      this.categories = data.allCategories ;
    }
  )
    // this.categories=JSON.parse(localStorage.getItem('categories')||'[]');
  }
  goToDisplay(id){
    this.router.navigate([`displayCategory/${id}`]);




  }
  goToEdit(id){


    this.router.navigate([`editCategory/${id}`]);
  }
  deleteCategory(id){
    this.categoryService.deleteCategory(id).subscribe(
      (data)=>{
        console.log('message' , data.message);
        this.categoryService.getAllCategories().subscribe(
          (data)=>{
            this.categories = data.allCategories;
          }
        )
        
      }
    )
    // let categories = JSON.parse(localStorage.getItem('categories')||'[]');
    // categories.splice(pos,1);
    // localStorage.setItem('categories',JSON.stringify(categories));
  }
}
