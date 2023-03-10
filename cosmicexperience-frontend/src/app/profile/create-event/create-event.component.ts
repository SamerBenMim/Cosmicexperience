import { Component, OnInit } from '@angular/core';
import { EventCosmic } from 'src/app/models/event';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  name!: string;
  description!: string;
  place!: string;
  date!: Date;
  numberOfDays!: number;
  numberMaxOfParticipants!: number;
  price!: number;
  image!: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void { }

  createEvent(): void {
    const nb = Math.floor(Math.random() * 24) + 1;
    const event = new EventCosmic(
      this.name,
      this.description,
      this.place,
      this.date,
      this.numberOfDays,
      this.numberMaxOfParticipants,
      this.price,
      `${nb}.png`
    );
    console.log(event);
    this.profileService.createEvent(event);
  }
}
