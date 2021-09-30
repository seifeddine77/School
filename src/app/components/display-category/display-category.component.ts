import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.component.html',
  styleUrls: ['./display-category.component.css']
})
export class DisplayCategoryComponent implements OnInit {
id:any;
searchedCategory:any={};
  constructor(
    private activatedRoute:ActivatedRoute ,
    private categoryService : CategoryService
  ) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    // this.searchedCategory=this.searchCategory();
    this.categoryService.getCategoryById(this.id).subscribe(
      (data)=>{
        this.searchedCategory = data.category;
        console.log('category',  this.searchedCategory );
        

      }

    )
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
