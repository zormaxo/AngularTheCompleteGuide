import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject, tap, throwError } from 'rxjs';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
      .post<{ name: string }>('https://ng-complete-guide-59207-default-rstdb.firebaseio.com/posts.json', postData, {
        observe: 'response',
      })
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
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [keyomer: string]: Post }>('https://ng-complete-guide-59207-default-rtdb.firebaseio.com/posts.json', {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams,
        responseType: 'json',
      })
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
    return this.http
      .delete('https://ng-complete-guide-59207-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events',
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            //.........
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
