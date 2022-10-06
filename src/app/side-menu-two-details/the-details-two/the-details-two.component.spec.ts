import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDetailsTwoComponent } from './the-details-two.component';

describe('TheDetailsTwoComponent', () => {
  let component: TheDetailsTwoComponent;
  let fixture: ComponentFixture<TheDetailsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDetailsTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheDetailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
