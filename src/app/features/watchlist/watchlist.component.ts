import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/core/post.service';
import { Post } from 'src/app/core/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-watchlist',
  templateUrl: '.watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  private postList$: Observable<Post[]>;
  private selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.selectedCategory = params['category'];
        this.postList$ = this.postService.getPostsByCategory(this.selectedCategory);
      }
    )
  }

}
