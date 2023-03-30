import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interface/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url : string = environment.host_fake;

  constructor( private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.url+'/posts');
  }

  savePost(post: Post) {
    return this.http.post<Post>(this.url+'/posts', post);
  }

  deletePost(id: number) {
    return this.http.delete(this.url+'/posts/'+id);
  }
}
