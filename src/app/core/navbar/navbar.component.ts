import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';

import { Observable, of, Subscription } from 'rxjs';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit, OnDestroy {
  myDrop: any;
  @Input() isCollapsed = true;
  @Input() navs: any[] = [];
  @Input() displayDataCollectionMenuItem = false;

  constructor(
    config: NgbDropdownConfig,
    private fb: UntypedFormBuilder,
    private router: Router,
  ) {
    config.placement = 'bottom-right';
    config.autoClose = false;
    this.router.events.subscribe((value: Event) => {
      if (value instanceof NavigationStart) {
        this.isCollapsed = true;
      }
    });
  }
  ngOnDestroy(): void {
  }

  applySecurityRestrictions() {
  }

  ngOnInit() { }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  isNavActive(route: any) {
    const path = window.location.pathname;
    const rootPathName = path.substr(0,
      path.substr(1, path.length).indexOf('/') > -1 ? path.substr(1, path.length).indexOf('/') + 1 : path.length);
    return rootPathName.indexOf(route) >= 0;
  }

  signOut(): void {

  }
}
