import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Post } from './post';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Observable<any[]> | undefined;

  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
  }

  getPosts(category: string): Observable<any[]> {
    this.posts = this.db.list("data/" + category, ref => ref.orderByChild('time')).valueChanges();
    return this.posts;
  }

  addPost(post: any, category: string) {
    post.time = post.time.getTime();
    post.id = uuidv4(); // pridanie id do príspevku
    this.db.list("data/"+category).push(post);
  }
}
