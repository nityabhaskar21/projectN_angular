import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewallPostsComponent } from './viewall-posts/viewall-posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewPostByIdComponent } from './view-post-by-id/view-post-by-id.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
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
