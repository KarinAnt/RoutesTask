import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
  { path: '**', component: HomeComponent }
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
