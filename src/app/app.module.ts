import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallPostsComponent } from './post/viewall-posts/viewall-posts.component';
import { ViewPostByIdComponent } from './post/view-post-by-id/view-post-by-id.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpinnerComponent } from './util/spinner/spinner.component';
import { InterceptorService } from './util/interceptor.service';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { UpdatePostComponent } from './post/update-post/update-post.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { ViewallUsersComponent } from './user/viewall-users/viewall-users.component';
import { ViewUserByIdComponent } from './user/view-user-by-id/view-user-by-id.component';
import { ViewUserByUsernameComponent } from './user/view-user-by-username/view-user-by-username.component';
import { LogoutComponent } from './user/logout/logout.component';
import { ViewAllPostsPaginationComponent } from './post/view-all-posts-pagination/view-all-posts-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewallPostsComponent,
    ViewPostByIdComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    CreatePostComponent,
    UpdatePostComponent,
    CreateUserComponent,
    LoginComponent,
    SignupComponent,
    UpdateUserComponent,
    ViewallUsersComponent,
    ViewUserByIdComponent,
    ViewUserByUsernameComponent,
    LogoutComponent,
    ViewAllPostsPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
