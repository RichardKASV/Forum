import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import {OpenPostComponent} from "../open-post/open-post.component";

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post: Observable<any> | undefined;
  comments: Observable<any[]> | undefined;

  constructor(public db: AngularFireDatabase) {}

  getPost(id: string): Observable<any> {
    this.post = this.db.object(`data/posts/${id}`).valueChanges();
    return this.post;
  }

  addPost(post: any, category: string) {
    post.time = post.time.getTime();
    post.id = uuidv4();
    this.db.list(`data/${category}`).push(post);
  }
  getCommentsForPost(postId: string): Observable<any[]> {
    this.comments = this.db.list(`data/comments/${postId}`).valueChanges();
    return this.comments;
  }

}
