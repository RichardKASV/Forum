import {Component, OnInit} from '@angular/core';
import {Topic} from "../model/topic.model";
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Component({
  selector: 'app-programming-category',
  templateUrl: './programming-category.component.html',
  styleUrls: ['./programming-category.component.css']
})
export class ProgrammingCategoryComponent implements OnInit {

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


  //TODO urobiť componenty pre každú novú category a pridať tieto veci
  getTopicsFromDB() {
    return new Promise((resolve) => {
      //TODO zmeniť cestu na názov tej categorie
      this.db.list("data/Programming").valueChanges().subscribe(value=>{
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
