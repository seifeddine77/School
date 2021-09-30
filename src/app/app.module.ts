import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminTeachersComponent } from './components/admin-teachers/admin-teachers.component';
import { AdminStudentsComponent } from './components/admin-students/admin-students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CountDownStartComponent } from './components/count-down-start/count-down-start.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { MoreAboutComponent } from './components/more-about/more-about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BlogComponent } from './components/blog/blog.component';
import { CategoryComponent } from './components/category/category.component';
import { CoursComponent } from './components/cours/cours.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AdminTrainingsComponent } from './components/admin-trainings/admin-trainings.component';
import { AdminCategoriesComponent } from './components/admin-categories/admin-categories.component';
import { AdminContactsComponent } from './components/admin-contacts/admin-contacts.component';
import { DisplayTrainingComponent } from './components/display-training/display-training.component';
import { DisplayTeacherComponent } from './components/display-teacher/display-teacher.component';
import { DisplayStudentComponent } from './components/display-student/display-student.component';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { StudentSpaceComponent } from './components/student-space/student-space.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { AdminSessionsComponent } from './components/admin-sessions/admin-sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TeacherComponent,
    StudentComponent,
    AddTrainingComponent,
    EditStudentComponent,
    AdminComponent,
    AdminTeachersComponent,
    AdminStudentsComponent,
    TeachersComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    CategoriesComponent,
    CountDownStartComponent,
    PopularCoursesComponent,
    MoreAboutComponent,
    TestimonialsComponent,
    BlogsComponent,
    ContactsComponent,
    BlogComponent,
    CategoryComponent,
    CoursComponent,
    AddTeacherComponent,
    AddCategoryComponent,
    AdminTrainingsComponent,
    AdminCategoriesComponent,
    AdminContactsComponent,
    DisplayTrainingComponent,
    DisplayTeacherComponent,
    DisplayStudentComponent,
    DisplayCategoryComponent,
    EditTeacherComponent,
    StudentSpaceComponent,
    InscriptionComponent,
    AddSessionComponent,
    AdminSessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
