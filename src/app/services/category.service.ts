import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categoryURL:string='http://localhost:3000/categories';
  constructor( private http:HttpClient) { }
getAllCategories(){
  return this.http.get<{allCategories:any}>(this.categoryURL);
}
getCategoryById(id){
  return this.http.get<{category:any}>(`${this.categoryURL}/${id}`);
}
addCategory(category){
  return this.http.post<{message:any}>(this.categoryURL,category);
}
deleteCategory(id){
  return this.http.delete<{message:string}>(`${this.categoryURL}/${id}`);

}
editCategory(category){
  return this.http.put<{message:string}>(`${this.categoryURL}/${category._id}`,category);

}
}
