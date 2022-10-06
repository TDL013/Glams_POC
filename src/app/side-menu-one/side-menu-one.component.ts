import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-one',
  templateUrl: './side-menu-one.component.html',
  styleUrls: ['./side-menu-one.component.scss']
})
export class SideMenuOneComponent implements OnInit {

  active = 1;
  menuItemSelected: { menuItemId: string } = { menuItemId: '' };

  constructor() { }

  ngOnInit(): void {
  }

  handleMenuItemSelected(menuItemId: { menuItemId: string }): void {
    this.menuItemSelected = menuItemId;
  }

}
