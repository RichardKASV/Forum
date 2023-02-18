import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private db: AngularFireDatabase) { }

  addPost(post: any, category: string) {
    post.time = post.time.getTime();
    this.db.list("data/"+category).push(post);
  }
}

