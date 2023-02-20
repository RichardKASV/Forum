import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post-service/post.service';

@Component({
  selector: 'app-open-post',
  templateUrl: './open-post.component.html',
  styleUrls: ['./open-post.component.css']
})
export class OpenPostComponent implements OnInit {
  postId: string;
  selectedPost: any;
  headline: string = '';
  comments: any[] = [];

  constructor(private postService: PostService, private route: ActivatedRoute) {
    this.postId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.headline = '';
    this.postService.getPost(this.postId).subscribe(data => {
      this.selectedPost = data;
      this.headline = this.selectedPost?.headline || '';
      this.postService.getCommentsForPost(this.postId).subscribe((comments: any[]) => {
        this.comments = comments;
      });
    });
  }

}
