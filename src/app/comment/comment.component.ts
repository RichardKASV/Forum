import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  template: `
    <div *ngFor="let comment of comments">
      <p>{{ comment.author }} said:</p>
      <p>{{ comment.message }}</p>
    </div>
  `,
})
export class CommentComponent {
  @Input() postId: number;
  comments = [
    { id: 1, postId: 1, author: 'John', message: 'Nice post!' },
    { id: 2, postId: 1, author: 'Mike', message: 'Thanks John!' },
    { id: 3, postId: 2, author: 'Sara', message: 'Great post!' },
    { id: 4, postId: 3, author: 'Bob', message: 'Awesome post!' },
    { id: 5, postId: 3, author: 'Alice', message: 'Thanks Bob!' }
  ];

  constructor() {
    this.postId = 1; // Default value for postId
  }

  getPostComments() {
    return this.comments.filter(comment => comment.postId === this.postId);
  }
}
