import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewallPostsComponent } from './post/viewall-posts/viewall-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewPostByIdComponent } from './post/view-post-by-id/view-post-by-id.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { UpdatePostComponent } from './post/update-post/update-post.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ViewUserByIdComponent } from './user/view-user-by-id/view-user-by-id.component';
import { ViewallUsersComponent } from './user/viewall-users/viewall-users.component';
import { AuthGuard } from './user/auth.guard';
import { Role } from './user/role';
import { LogoutComponent } from './user/logout/logout.component';
import { ViewAllPostsPaginationComponent } from './post/view-all-posts-pagination/view-all-posts-pagination.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts/page/0', pathMatch: 'full' },
  {
    path: 'users/create',
    component: CreateUserComponent,
    canActivate: [AuthGuard],
    data: { role: [Role.ADMIN, Role.DEVELOPER] }
  },
  { path: 'users/signup', component: SignupComponent },
  { path: 'users/login', component: LoginComponent },
  {
    path: 'users/logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/update/:id',
    component: UpdateUserComponent,
    canActivate: [AuthGuard]
  },
  { path: 'users/:id', component: ViewUserByIdComponent },
  { path: 'users', component: ViewallUsersComponent },
  {
    path: 'posts/create',
    component: CreatePostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/update/:id',
    component: UpdatePostComponent,
    canActivate: [AuthGuard]
  },
  { path: 'posts/:id', component: ViewPostByIdComponent },
  { path: 'posts/page/:pageno', component: ViewAllPostsPaginationComponent },
  { path: 'posts', component: ViewallPostsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
