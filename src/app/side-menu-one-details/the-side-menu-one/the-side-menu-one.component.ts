import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-the-side-menu-one',
  templateUrl: './the-side-menu-one.component.html',
  styleUrls: ['./the-side-menu-one.component.scss']
})
export class TheSideMenuOneComponent implements OnInit {

  @Output() menuItemSelectedEvent = new EventEmitter<{ menuItemId: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  menuItemSelected(menuItemId: string): void {
    this.menuItemSelectedEvent.emit({ menuItemId });
  }
}
