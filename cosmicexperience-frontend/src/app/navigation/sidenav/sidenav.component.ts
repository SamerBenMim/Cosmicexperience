import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter();
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
  onClose() {
    this.closeSidenav.emit();
  }

  logout(): void {
    this.authService.logout();
  }
}
