import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-the-details-one',
  templateUrl: './the-details-one.component.html',
  styleUrls: ['./the-details-one.component.scss'],
})
export class TheDetailsOneComponent implements OnInit {

  @Input() menuItemSelected: { menuItemId: string } = { menuItemId: '' };
  @ViewChild('acc') accordionComponent: NgbAccordion | undefined;
  selectedMenuItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'menuItemSelected' && changes[propName].currentValue.menuItemId !== '') {
        this.accordionComponent?.toggle(changes[propName].currentValue.menuItemId);
      }
    }
  }
}
