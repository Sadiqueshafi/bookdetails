import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {dockerElement} from './doker.model';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DockerTableService {
  _post:dockerElement[]=[];
  private messageSource =new BehaviorSubject<any>("hello world");
  currentmessages = this.messageSource.asObservable();
  docker:dockerElement[]=[]
  baseUrl ='http://localhost:8080/bookservice/books/';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  changeMessages(message:string){
    this.messageSource.next(message)
  }

  postData(urlPrefix: string, query: any): Observable<any> {
    const url =  urlPrefix
    return this.http.post(url, query).pipe(
      catchError(this.handleError)
    )
  }

getdata(urlPrefix: string, query: any): Observable<any> {
  const url = urlPrefix;
  return this.http.get(url, { params: { query: JSON.stringify(query) } });
}

getPost(id:string){
  return {...this.docker.find(p=>p.id=== id)}
}

EditContact(contact:dockerElement) {
  const index = this._post.findIndex(c =>c.id=== contact.id);
  this._post[index] = contact
}

getAllcontact(){
  return this._post;
}

deletedocker(postId:string): Observable<any>{
  return this.http.delete(this.baseUrl+ postId );
}

putData(urlPrefix: string, query: any): Observable<any> {
  const url = urlPrefix
  return this.http.put(url, query, this.httpOptions).pipe(
    catchError(this.handleError)
  )
}
handleError(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {

    errorMessage = error.error.message;
  } else {
    errorMessage = error.error.msg;
  }
  return throwError(errorMessage);
}
}
