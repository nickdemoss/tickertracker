import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../core/post.model';
import { PostService } from '../../core/post.service';

@Component({
  selector: 'app-postwrapper',
  templateUrl: './postwrapper.component.html',
  styleUrls: ['./postwrapper.component.scss']
})
export class PostwrapperComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

}
