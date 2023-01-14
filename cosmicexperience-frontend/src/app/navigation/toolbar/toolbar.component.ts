import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
  onTogglesidenav() {
    this.sidenavToggle.emit();
  }

  logout(): void {
    this.authService.logout();
  }
}
