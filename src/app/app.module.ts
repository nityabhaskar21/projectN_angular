import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewallPostsComponent } from './viewall-posts/viewall-posts.component';
import { ViewPostByIdComponent } from './view-post-by-id/view-post-by-id.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpinnerComponent } from './util/spinner/spinner.component';
import { InterceptorService } from './util/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewallPostsComponent,
    ViewPostByIdComponent,
    PageNotFoundComponent,
    SpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
