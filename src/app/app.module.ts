import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';
import { TopicsComponent } from './topics/topics.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPostComponent } from './new-post/new-post.component';
import {Post2Component} from "./post2/post2.component";
import {PostComponent} from "./post/post.component";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; //import FormsModule
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from "@angular/material/paginator";
import {OpenPostComponent} from "./open-post/open-post.component";
import { CommentComponent } from './comment/comment.component';
import { CommonModule } from '@angular/common';
import { CarsCategoryComponent } from './cars-category/cars-category.component';
import { FoodCategoryComponent } from './food-category/food-category.component';
import { BooksCategoryComponent } from './books-category/books-category.component';
import { MoviesCategoryComponent } from './movies-category/movies-category.component';
import { GamesCategoryComponent } from './games-category/games-category.component';
import { ProgrammingCategoryComponent } from './programming-category/programming-category.component';
import { SwitchCategoriesComponent } from './switch-categories/switch-categories.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'new-post',
    component: NewPostComponent,
  },
  // {
  //   path: 'categories',
  //   component: CategoriesComponent,
  // },
  {
    path: 'ranking',
    component: OpenPostComponent,
  },
  {
    path: '**',
    component: AppComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TopicsComponent,
    SidebarComponent,
    NewPostComponent,
    Post2Component,
    PostComponent,
    HomeComponent,
    OpenPostComponent,
    CommentComponent,
    CarsCategoryComponent,
    FoodCategoryComponent,
    BooksCategoryComponent,
    MoviesCategoryComponent,
    GamesCategoryComponent,
    ProgrammingCategoryComponent,
    BooksCategoryComponent,
    SwitchCategoriesComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, // pridanie FormsModule do imports
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    CommonModule // import CommonModule
  ],
  exports: [
    CommentComponent // export CommentComponent
  ],
  providers: [TopicsComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
