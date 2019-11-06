import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersGuard }   from './users.guard';
import { EditGuard }   from './edit.guard';


const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate:[UsersGuard] },
  { path: 'users/:id', component: UserComponent, canActivate:[UsersGuard] },
  { path: 'users/:id/edit', component: EditComponent, canActivate:[EditGuard] },
  { path: '**', component: HomeComponent }
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UsersGuard, EditGuard],
})
export class AppRoutingModule { }
