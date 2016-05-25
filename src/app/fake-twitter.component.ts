import { Component } from '@angular/core';
import { LikeComponent } from './like/like.component';
import { TweetComponent } from './tweet/tweet.component';

@Component({
  moduleId: module.id,
  selector: 'fake-twitter-app',
  templateUrl: 'fake-twitter.component.html',
  styleUrls: ['fake-twitter.component.css'],
  directives: [LikeComponent, TweetComponent]
})
export class FakeTwitterAppComponent {
  title = "Welcome to fakeTwitter!";
}
