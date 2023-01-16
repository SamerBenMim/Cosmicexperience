import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/cycling/';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) { }

  all(): Observable<any> {
    return this.http.get(BASE_URL + 'upComingEvents');
  }

  pastEvents(): Observable<any> {
    return this.http.get(BASE_URL + 'pastEvents');
  }

  upComingEvents(): Observable<any> {
    return this.http.get(BASE_URL + 'upComingEvents');
  }
}
