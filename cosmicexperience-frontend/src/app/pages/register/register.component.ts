import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router: Router) {}

  ngOnInit(): void {}

  register(): void {
  
  }
}
