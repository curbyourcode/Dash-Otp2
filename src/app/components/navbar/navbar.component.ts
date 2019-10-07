import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;

  constructor(private appService: AppService) { }

  ngOnInit() { }

  toggleSidebarPin() {
      this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
      this.appService.toggleSidebar();
  }

}
