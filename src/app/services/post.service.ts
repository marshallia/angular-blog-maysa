import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {of} from 'rxjs';
import {Article} from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPostList() {
    const url = this.baseUrl + 'articles';
    return this.http.get<Article[]>(url).pipe(
      catchError(error => of(error.message)),
      retry(3)
    );
  }

  getPost(id: string) {
    const url = this.baseUrl + 'articles/' + id;

    return this.http.get<Article>(url).pipe(
      catchError(error => of(error.message)),
      retry(3)
    );
  }

  addPost(data) {
    const url = this.baseUrl + 'articles';
    return this.http.post(url, data).pipe(
        catchError(error => of(error.message)),
        retry(3)
    );
  }

  deletePost(id: string) {
    const url = this.baseUrl + 'articles/' + id;
    return this.http.delete<Article>(url).pipe(
        catchError(error => of(error.message)),
        retry(3)
    );
  }

  updatePost(data, id) {
    const url = this.baseUrl + 'articles/' + id;
    return this.http.patch(url, data).pipe(
        catchError(error => of(error.message)),
        retry(3)
    );
  }
}
