import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AllTodosUserComponent } from './all-todos-user/all-todos-user.component';
import { AllDataUserComponent } from './all-data-user/all-data-user.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { AllPostUserComponent } from './all-post-user/all-post-user.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AllTodosUserComponent,
    AllDataUserComponent,
    AddToDoComponent,
    AllPostUserComponent,
    AddPostComponent,
    AddNewUserComponent,
    ParentComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
