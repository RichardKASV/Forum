import { v4 as uuidv4 } from 'uuid';
export class Post {
  content: string;
  headline: string;
  likes: number;
  time: Date | undefined;
  day: number | undefined;
  month: number | undefined;
  year: number | undefined;
  user: string| undefined;
  category: string; // pridana premenna 'category'
  id: string;


  constructor(content: string, headline: string, user: string, category: string, day:number,month:number,year:number) {
    this.content = content;
    this.headline = headline;
    this.likes = 0;
    this.day = day;
    this.month = month;
    this.year = year;
    this.user = user;
    this.category = category; // inicializacia premennej 'category'
    this.id = uuidv4();
  }
}
