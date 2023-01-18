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
  displayed_events:  any [] = [];
  arr:  any [] = [];
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
      this.arr =  [...this.displayed_events];
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
    
     this.arr= this.displayed_events.filter((event: any) => {
     console.log(event.numberOfDays , object.nb_days)
      return (
         (event.numberOfDays == object.nb_days) 
           &&
           (!object.location || object?.location?.includes(event.place))
            && 
     
     
         (
           !object.start_date || !object.end_date || (
           new Date(event.date).getTime() >=
           new Date(object.start_date).getTime() &&
           new Date(event.date).getTime() <=
           new Date(object.end_date).getTime()
             ))
        )
      }
        )
        }

    }
    