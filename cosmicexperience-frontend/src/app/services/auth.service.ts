import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient, private router: Router) {}

  register(
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    dateOfBirthday: Date
  ): Observable<any> {
    return this.http.post(`${url}/signup`, {
      username,
      email,
      password,
      firstName,
      lastName,
      dateOfBirthday,
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${url}/signin`, { username, password });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    const link = ['login'];
    this.router.navigate(link);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
