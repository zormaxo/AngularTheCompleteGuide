import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject, throwError } from 'rxjs';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
      .post<{ name: string }>('https://ng-complete-guide-59207-default-rtdb.firebaseio.com/posts.json', postData)
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error) => {
          this.error.next(error.message);
        },
      });
  }

  fetchPosts() {
    return this.http
      .get<{ [keyomer: string]: Post }>('https://ng-complete-guide-59207-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          //Send to analytics
          return throwError(() => new Error(errorRes.error.error));
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-59207-default-rtdb.firebaseio.com/posts.json');
  }
}
