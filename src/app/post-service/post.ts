export class Post {
  content: string;
  headline: string;
  likes: number;
  time: Date;
  user: string;
  category: string; // pridana premenna 'category'

  constructor(content: string, headline: string, user: string, category: string) {
    this.content = content;
    this.headline = headline;
    this.likes = 0;
    this.time = new Date();
    this.user = user;
    this.category = category; // inicializacia premennej 'category'
  }
}
