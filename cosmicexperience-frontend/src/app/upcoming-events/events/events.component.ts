import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/upcoming-events/events.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any;
  pages: number[] = [];
  num: number = 1;
  displayed_events: any;
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadList();
  }

  private loadList() {
    this.eventsService.all().subscribe((list) => {
      this.events = list;
      this.events.sort(this.diffdate);
      let n: number;
      n = this.events.length / 6;
      for (let i = 0; i < n; i++) {
        this.pages.push(i + 1);
      }
      this.displayed_events = this.events.slice(
        (this.num - 1) * 6,
        this.num * 6
      );
    });
  }

  set_page(item: any) {
    if (item < 1) {
      item = 1;
    } else if (item > this.pages.length) {
      item = this.pages.length;
    }
    this.num = item;

    this.displayed_events = this.events.slice((this.num - 1) * 6, this.num * 6);
  }

  private diffdate(a: any, b: any): any {
    var dateA: any = new Date(a.date);
    var dateB: any = new Date(b.date);
    return dateA - dateB;
  }

  filterDisplayed(object: any) {
    this.displayed_events = this.displayed_events.filter((event: any) => {
      /*(event.numberOfDays == object.nb_days) &&
        (object.location.indexOf(event.place) != 0) && */

      console.log(event.start_date);
      console.log(object.start_date);

      return (
        new Date(event.start_date).getTime() >=
          new Date(object.start_date).getTime() &&
        new Date(event.start_date).getTime() <=
          new Date(object.start_date).getTime()
      );
    });
  }
}
