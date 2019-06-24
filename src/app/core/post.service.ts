import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const POSTS: Post[] = []
 

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  getPostsByCategory(category: string): Observable<Post[]> {
    // return of(POSTS.filter(post => post.category === category));
    return this.httpClient.get<Post[]>(environment.API_URL);
  }

}
