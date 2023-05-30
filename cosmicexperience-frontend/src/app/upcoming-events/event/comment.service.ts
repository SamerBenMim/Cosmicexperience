import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  
  constructor(private http: HttpClient) { }

  addComment(comment: string , value:any): Observable<any> {
    console.log(comment,value)
    return this.http.post(`http://localhost:3000/cosmos/comment`,{
        comment,value
  }
  );

  }
}
