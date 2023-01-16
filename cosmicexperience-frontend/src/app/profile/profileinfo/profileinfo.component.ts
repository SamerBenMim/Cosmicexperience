import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css'],
})
export class ProfileinfoComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  events!: number;
  rates!: number;

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getUserInformation().subscribe(
      (result: any) => {
        this.firstName = result.firstName;
        this.lastName = result.lastName;
        this.rates = result.rate;
        this.events = 7;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editProfile(): void {
    const link = ['editProfile'];
    this.router.navigate(link);
  }

  createEvent(): void {
    const link = ['createEvent'];
    this.router.navigate(link);
  }
}
