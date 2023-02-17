import { Component } from '@angular/core';
import { PostService } from '../post-service/post.service';
import { Post } from '../post-service/post';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  headline: string = '';
  content: string = '';
  postTime: Date | null = null;
  category: string = '';

  constructor(private postService: PostService) {}
  categories = new FormControl('');
  categoriesList: string[] = ['Cars','Food','Books','Movies','Games','Programming'];
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    const imageContainer = document.getElementById('image-container');

    if (imageContainer) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = document.createTextNode(file.name);
        const fileElement = document.createElement('div');
        fileElement.appendChild(fileName);
        fileElement.classList.add('file');

        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(file);
        imgElement.classList.add('image');
        imgElement.style.display = 'none';

        const fileContainer = document.createElement('div');
        fileContainer.appendChild(fileElement);
        fileContainer.appendChild(imgElement);
        fileContainer.classList.add('file-container');

        // add click event listener to file name element
        fileElement.addEventListener('click', () => {
          if (imgElement.style.display === 'none') {
            imgElement.style.display = 'block';
            imgElement.classList.add('smaller');
          } else {
            imgElement.style.display = 'none';
            imgElement.classList.remove('smaller');
          }
        });

        imageContainer.appendChild(fileContainer);
      }
    }
  }

  addNewPost() {
    const post: Post = {
      headline: this.headline,
      content: this.content,
      category: this.category,
      likes: 0,
      time: new Date(),
      user: 'Test User'
    };
    this.postService.addPost(post);
    this.headline = '';
    this.content = '';
    this.postTime = null;
    this.category = '';
  }

  formatTime(timestamp: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return timestamp.toLocaleString('en-US', options);

  }
}
