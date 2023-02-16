import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private db: AngularFireDatabase) { }

  addPost(post: any) {
    post.time = post.time.getTime();
    this.db.list('data').push(post);
  }
}

