import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { AllDataUserComponent } from './all-data-user/all-data-user.component';
import { AllPostUserComponent } from './all-post-user/all-post-user.component';
import { AllTodosUserComponent } from './all-todos-user/all-todos-user.component';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { UsersComponent } from './users/users.component';

const appRouters: Routes = 
[
  // {path:"homepage",component : AppComponent},
  
  {path:"allData",component : AllDataUserComponent},
  {path:"todos",component : AllTodosUserComponent},
  {path:"addToDo",component:AddToDoComponent},
  {path:"post",component:AllPostUserComponent},
  {path:"addPost",component:AddPostComponent},
  {path:"addNewUser",component:AddNewUserComponent},
  // {path:"Users",component:UsersComponent},


  {path:"",component:ParentComponentComponent},
  {path:"homepage",component:ParentComponentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
