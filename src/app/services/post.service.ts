import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  query(): Observable<Array<any>> {
  	return this.http.get(this.baseUrl);
  }

  save(data:any): Observable<any> {

    if (data.id) {
      return this.http.put(this.baseUrl+'/'+data.id, data);
    }

  	return this.http.post(this.baseUrl, data);
  }

  find(id:number): Observable<any> {
  	return this.http.get(this.baseUrl+'/'+id);
  }

  destroy(id: number) {
    return this.http.delete(this.baseUrl+'/'+id); // status code 204
  }

}