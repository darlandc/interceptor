import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  ROOT_URL = `http://jsonplaceholder.typicode.com`;

  constructor(public http: HttpClient) {}

  getPosts(): any {
    return this.http.get<any>(`${this.ROOT_URL}/posts`);
  }
}
