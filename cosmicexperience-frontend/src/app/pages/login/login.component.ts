import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  // Handle errors
  error: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (result) => {
        // console.log(result);
        this.error = null;
        const accessToken = result.accessToken;
        localStorage.setItem('accessToken', accessToken);
        const link = ['/'];
        // navigate to the home page
        this.router.navigate(link);
      },
      (error) => {
        this.error = error.error.message;
      },
      () => {
        console.log('login completed');
      }
    );
  }
}
