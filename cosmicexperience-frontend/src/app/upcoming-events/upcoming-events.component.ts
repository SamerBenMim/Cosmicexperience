import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/upcoming-events/events.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
})
export class UpcomingEventsComponent implements OnInit {
  events: any;
  all_events: any;
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadList();
  }

  private sliced() {
    this.events = this.all_events.slice(0, 6);
  }

  private loadList() {
    this.eventsService.upComingEvents().subscribe((list) => {
      this.all_events = list;
      this.all_events.sort(this.diffdate);
      this.sliced();
    });
  }

  private diffdate(a: any, b: any): any {
    var dateA: any = new Date(a.date);
    var dateB: any = new Date(b.date);
    return dateA - dateB;
  }
}
