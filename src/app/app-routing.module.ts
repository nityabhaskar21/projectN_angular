import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewallPostsComponent } from './viewall-posts/viewall-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewPostByIdComponent } from './view-post-by-id/view-post-by-id.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ViewUserByIdComponent } from './user/view-user-by-id/view-user-by-id.component';
import { ViewallUsersComponent } from './user/viewall-users/viewall-users.component';
import { AuthGuard } from './user/auth.guard';
import { Role } from './user/role';
import { LogoutComponent } from './user/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'users/create',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
    data: { role: [Role.ADMIN, Role.DEVELOPER] }
  },
  { path: 'users/signup', component: SignupComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/logout', component: LogoutComponent },
  { path: 'users/update/:id', component: UpdateUserComponent },
  { path: 'users/:id', component: ViewUserByIdComponent },
  { path: 'users', component: ViewallUsersComponent },
  { path: 'posts/create', component: CreatePostComponent },
  { path: 'posts/update/:id', component: UpdatePostComponent },
  { path: 'posts/:id', component: ViewPostByIdComponent },
  { path: 'posts', component: ViewallPostsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
