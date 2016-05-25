import { 
  Component, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-like',
  templateUrl: 'like.component.html',
  styleUrls: ['like.component.css']
})
export class LikeComponent {
  @Input() isLiked = false;
  @Input() myLike = 0;
  @Input() likeCount = 0;
  @Output() like = new EventEmitter();
  
  onClick() {
    this.isLiked = !this.isLiked;
    this.myLike += this.isLiked ? 1 : -1;
    this.like.emit({ myLike: this.myLike });
  }

}
