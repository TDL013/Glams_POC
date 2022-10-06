import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSideMenuOneComponent } from './the-side-menu-one.component';

describe('TheSideMenuOneComponent', () => {
  let component: TheSideMenuOneComponent;
  let fixture: ComponentFixture<TheSideMenuOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheSideMenuOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheSideMenuOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
