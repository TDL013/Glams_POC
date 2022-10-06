import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-the-details-one',
  templateUrl: './the-details-one.component.html',
  styleUrls: ['./the-details-one.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ backgroundColor: '#bcc3cb' })),
      state('false', style({})),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class TheDetailsOneComponent implements OnInit {

  @Input() menuItemSelected: { menuItemId: string } = { menuItemId: '' };
  @ViewChild('acc') accordionComponent: NgbAccordion | undefined;
  selectedMenuItem: string = '';
  isSelected = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'menuItemSelected' && changes[propName].currentValue.menuItemId !== '') {
        this.selectedMenuItem = changes[propName].currentValue.menuItemId;
        this.handleMenuItemSelected(changes[propName].currentValue.menuItemId);

        timer(1500).subscribe(() => this.selectedMenuItem = '');
      }
    }
  }

  isSelectedMenuItem(selectedMenuItemId: string): string {
    return (this.selectedMenuItem === selectedMenuItemId).toString();
  }

  toggle() {
    if (this.isSelected === 'selected') {
      this.isSelected = '';
    } else {
      this.isSelected = 'selected';
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
