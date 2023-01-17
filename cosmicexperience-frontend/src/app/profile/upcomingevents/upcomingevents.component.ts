import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-upcomingevents',
  templateUrl: './upcomingevents.component.html',
  styleUrls: ['./upcomingevents.component.css'],
})
export class UpcomingeventsComponent implements OnInit {
  upComingEvents: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getUpComingEventsOfUser();
  }

  getUpComingEventsOfUser(): void {
    this.profileService.getUpComingEventsOfUser().subscribe(
      (result) => {
        console.log(result);
        this.upComingEvents = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
