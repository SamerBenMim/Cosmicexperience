import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  nb_days: any;
  start_date: string;
  end_date: string;
  location:string[];
  placeList: string[] ;
  place = new FormControl();
  @Output() filter = new EventEmitter();
  @Input() set all_events(value:any) {
  if (value) {
    let mapped = value.map(this.extract_places);
    this.placeList = mapped.filter((value: any,index: any)=> mapped.indexOf(value) === index);
  }
  }

  constructor() { }
  ngOnInit(): void {
  }

  
  extract_places(e: any){
    console.log(e.place);
    return e.place;
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  apply(){
    this.filter.emit({
      nb_days: this.nb_days,
      start_date: this.start_date,
      end_date: this.end_date, 
      location: this.location
    })
  }

}
