import { Component } from '@angular/core';
import { LikeComponent } from '../like/like.component';

@Component({
  moduleId: module.id,
  selector: 'app-tweet',
  templateUrl: 'tweet.component.html',
  styleUrls: ['tweet.component.css'],
  directives: [LikeComponent]
})
export class TweetComponent {
  
  tweet = {
    likeCount: 100,
    myLike: 0,
  }
  
  onLike($event) {
    console.log($event);
  }
}
