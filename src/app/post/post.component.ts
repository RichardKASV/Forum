import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private router: Router) {}

  posts = [
    { id: 1, headline: 'First post', content: 'This is my first post', showComments: false },
    { id: 2, headline: 'Second post', content: 'This is my second post', showComments: false },
    { id: 3, headline: 'Third post', content: 'This is my third post', showComments: false }
  ];

  toggleComments(post: any) {
    post.showComments = !post.showComments;
  }
  redirectToRanking(post: any): void {
    this.router.navigate(['/ranking', post.id]);}
}
