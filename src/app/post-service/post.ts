export class Post {
  content: string;
  headline: string;
  likes: number;
  time: Date | undefined;
  day: number | undefined;
  month: number | undefined;
  year: number | undefined;
  user: string;
  category: string; // pridana premenna 'category'

  constructor(content: string, headline: string, user: string, category: string, day:number,month:number,year:number) {
    this.content = content;
    this.headline = headline;
    this.likes = 0;
    this.day = day;
    this.month = month;
    this.year = year;
    this.user = user;
    this.category = category; // inicializacia premennej 'category'
  }
}
