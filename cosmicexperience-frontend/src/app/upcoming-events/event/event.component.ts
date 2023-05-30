import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';
import { CommentService} from './comment.service'
@Component({

  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],

})
export class EventComponent implements OnInit {
  id!: number;
  place!: string;
  image!: string;
  name!: string;
  date!: string;
  description!: string;
  price!: number;
  nbDays!: number;
  comment: string = ''; // New property for storing the user's comment
  comments : string[] = ["aaaa","bbbb"]
  value : any = {}
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
      this.comments = value.comments;
      this.value=value;
    }
  }
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private commentServiceTsService: CommentService
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
  addComment() : void {
    // Logic for adding the comment to the database or performing any other action
    this.commentServiceTsService.addComment(this.comment,this.value).subscribe(
      (response) => {
        // Handle successful response here
        console.log(this.comment + 'Comment added successfully:', response);
      },
      (error) => {
        // Handle error here
        console.error('Error occurred while adding comment:', error);
      })
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})

export class DialogElementsExampleDialog {}
