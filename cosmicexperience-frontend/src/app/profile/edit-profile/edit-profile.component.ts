import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  username!: string;
  email!: string;
  password!: string;
  dateOfBirthday! : Date;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getUserInformation();
  }
  getUserInformation(): void {
    this.profileService.getUserInformation().subscribe(
      (result: any) => {
        this.firstName = result.firstName;
        this.username = result.username;
        this.lastName = result.lastName;
        this.email = result.email;
        this.password = result.password;
        this.dateOfBirthday=result.dateOfBirthday;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUserInformation(): void {
    const user: User = new User(
      this.firstName,
      this.lastName,
      this.username,
      this.email,
      this.password,
      this.dateOfBirthday
    );

    this.profileService.updateUserInformation(user);
  }
}
