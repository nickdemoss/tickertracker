import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../core/post.model';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}