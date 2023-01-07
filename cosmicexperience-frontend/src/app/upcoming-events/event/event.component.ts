import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  id: number;
  place: string;
  image: string;
  name: string;
  date: string;
  description: string;
  price: number;
  nbDays: number;

  @Input() set event(value: any) {
    if (value) {
      this.id = value.id;
      this.place = value.place;
      this.image = '../../../../assets/img/uploads/' + value.image;
      this.name = value.name;
      this.date = value.date;
      this.price = value.price;
      this.nbDays = value.numberOfDays;
      this.description = value.description;
    }
  }
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  openDialog() {
    if (this.authService.isLogged()) {
      // send a request with an id
      this.dialog.open(DialogElementsExampleDialog);
    } else {
      this.router.navigate(['login']);
    }
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}
