import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-pastevents',
  templateUrl: './pastevents.component.html',
  styleUrls: ['./pastevents.component.css'],
})
export class PasteventsComponent implements OnInit {
  upLatestEvents: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getUpLatestEventsOfUser();
  }

  getUpLatestEventsOfUser(): void {
    this.profileService.getLatestEventsOfUser().subscribe(
      (result) => {
        console.log(result);
        this.upLatestEvents = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
