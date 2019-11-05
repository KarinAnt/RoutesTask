import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { UsersGuard }   from './users.guard';
import { UserComponent } from './user/user.component';
import { EditGuard }   from './edit.guard';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersGuard, EditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
