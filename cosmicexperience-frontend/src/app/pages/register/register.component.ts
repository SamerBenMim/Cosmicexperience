import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  username!: string;
  email!: string;
  password!: string;
  dateOfBirthday!: Date;
  // Error variables
  errorsFromDb: any = null;
  usernameError: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register(): void {
    // register the user to the database if the data is correct
    this.authService
      .register(
        this.username,
        this.email,
        this.password,
        this.firstName,
        this.lastName,
        this.dateOfBirthday
      )
      .subscribe(
        (result) => {
          console.log(result);
          this.usernameError = null;
          this.errorsFromDb = null;
          const link = ['login'];
          this.router.navigate(link);
        },
        (error) => {
          const message = error.error.message;
          if (Array.isArray(message)) {
            this.errorsFromDb = message;
            this.usernameError = null;
          } else {
            this.usernameError = message;
            this.errorsFromDb = null;
          }
        },
        () => {
          console.log('register completed');
        }
      );
  }
}
