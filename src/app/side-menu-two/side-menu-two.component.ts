import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-two',
  templateUrl: './side-menu-two.component.html',
  styleUrls: ['./side-menu-two.component.scss']
})
export class SideMenuTwoComponent implements OnInit {

  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
