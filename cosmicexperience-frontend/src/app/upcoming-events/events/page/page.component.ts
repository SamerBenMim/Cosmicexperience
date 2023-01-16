import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  nb_days: number;
  location: string;
  start_date: string;
  end_date: string;
  @Input() displayed: any;

  constructor() { }

  ngOnInit(): void {
  }

}