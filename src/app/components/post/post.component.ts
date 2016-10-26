import { Input, Component } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.html',
  styleUrls: ['./post.component.scss']
})
export class Post {
  @Input() post: any;
  constructor() {}
}
