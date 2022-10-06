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
        this.handleMenuItemSelected(changes[propName].currentValue.menuItemId);
      }
    }
  }

  /**
   * When a menu item has been selected
   * - Open the accordion panel with the matching id
   * - Scroll to the selected panel
   * - Flash the header (or something...)
   */
  handleMenuItemSelected(menuItemSelected: string): void {
    this.accordionComponent?.expand(menuItemSelected);
    const menuElement = document.getElementById(menuItemSelected);

    if (menuElement) {
      const topPos = menuElement.offsetTop - 40;
      const theContainer = document.getElementById('theRoute');
      if (theContainer) {
        theContainer.scrollTo({ top: topPos, behavior: 'smooth' });
      }
    }
  }
}
