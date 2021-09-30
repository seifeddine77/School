import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
addCategoryForm:FormGroup;
category:any={};
id:any;
title:string;
searchedCategory:any={};
  constructor(private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router :Router ,
    private categoryService:CategoryService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.addCategoryForm=this.fb.group({

      name:[''],
      description:['']
    })
this.categoryService.getCategoryById(this.id).subscribe(
  (data)=>
  {
    this.category = data.category;
  }
)

    if (this.id) {
      this.title="Edit";
      // this.category=this.searchCategory();
  

      
    }
    else{
      this.title="add";
    }
  }


  addEditCategory(){
if (this.id) {

  this.categoryService.editCategory(this.category).subscribe(
    (data)=>
    {
      console.log('message' , data.message);
      
    }
  )
//   let categories = JSON.parse(localStorage.getItem('categories')||'[]');
//   for (let i = 0; i < categories.length; i++) {
// if (categories[i].id == this.id) {
//   categories[i].name = this.category.name;
//   categories[i].description = this.category.description;
  
// }    
//   }
//   localStorage.setItem('categories',JSON.stringify(categories));
  this.router.navigate(['admin']);


  
}
else{


  this.categoryService.addCategory(this.category).subscribe(
    (data)=>{
      console.log('message',data.message);
      this.router.navigate(['admin']);

      
    }
  )
  // let categories= JSON.parse(localStorage.getItem("categories")||"[]");
  //   let idCategory = JSON.parse(localStorage.getItem('idCategory')||'1');
  //   this.category.id=idCategory;
  //   categories.push(this.category);
  //   localStorage.setItem('categories',JSON.stringify(categories));
  //   localStorage.setItem('idCategory',idCategory+1);
  //   alert('category added ');


}
    
  
  }

  searchCategory(){
    let categories = JSON.parse(localStorage.getItem('categories')||'[]');
    let searchedCategory;
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].id == this.id) {
    
          searchedCategory = categories[i]
          
        }
      
    }
    return searchedCategory;
    
    
      }
  
}

