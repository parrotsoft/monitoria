import { PostService } from './../services/post.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { PostComponent } from './components/post/post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, PostsComponent, NavbarComponent, LayoutComponent, PostComponent],
  providers: [
    PostService
  ]
})
export class PagesModule { }
