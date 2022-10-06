import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSideMenuTwoComponent } from './the-side-menu-two.component';

describe('TheSideMenuTwoComponent', () => {
  let component: TheSideMenuTwoComponent;
  let fixture: ComponentFixture<TheSideMenuTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheSideMenuTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheSideMenuTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
