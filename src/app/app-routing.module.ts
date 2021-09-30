import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { DisplayStudentComponent } from './components/display-student/display-student.component';
import { DisplayTeacherComponent } from './components/display-teacher/display-teacher.component';
import { DisplayTrainingComponent } from './components/display-training/display-training.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditTeacherComponent } from './components/edit-teacher/edit-teacher.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StudentSpaceComponent } from './components/student-space/student-space.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'contact',component:ContactsComponent},
{path:'admin',component:AdminComponent},
{path:'addTraining',component:AddTrainingComponent},
{path:'addTeacher',component:AddTeacherComponent},
{path:'signup', component:SignupComponent},
{path:'addCategory',component:AddCategoryComponent},
{path:'displayTraining/:id',component:DisplayTrainingComponent},
{path:'editTraining/:id',component:AddTrainingComponent},
{path:'displayCategory/:id',component:DisplayCategoryComponent},
{path:'editCategory/:id',component:AddCategoryComponent},
{path:'displayTeacher/:id',component:DisplayTeacherComponent},
{path:'editTeacher/:id',component:EditTeacherComponent},
{path:'login',component:LoginComponent},
{path:'displayStudent/:id' ,component:DisplayStudentComponent},
{path:'editStudent/:id' , component: EditStudentComponent},
{path:'student-space' , component: StudentSpaceComponent},
{path:'inscription/:id', component:InscriptionComponent},
{path:'addSession',component:AddSessionComponent},
{path:'editSession/:id',component:AddSessionComponent}









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
