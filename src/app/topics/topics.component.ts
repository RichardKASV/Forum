import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Topic} from "../model/topic.model";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  public _topicModel:Topic[] | undefined;
  likes:number | undefined;
  constructor(private db: AngularFireDatabase) {
   // this.db.object("data/post3").set({content:"čus",headline:"motorky",time:21.8,user:"marienka"}); //pridavať nove posty
  }

  ngOnInit() {
    this.getTopics();
  }

  addLikes(){
    // @ts-ignore
    this.likes=this.likes+1;
    //this.db.object("data/post1").set({content:"čus ",headline:"auta ",time:21.8,user:"marienka",likes:this.likes});

    this.getTopics();
    console.log(this.likes);
  }


  getTopicsFromDB() {
    return new Promise((resolve) => {
      this.db.list("data").valueChanges().subscribe(value=>{
        resolve(value);
      });
    });
  }
  async getTopics(){
    let data: Topic[];
    await this.getTopicsFromDB().then(value => {
      data = value as Topic[];
    });
    // @ts-ignore
    this._topicModel = data;
    this.likes=this._topicModel[0].likes;
  }

}
