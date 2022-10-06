import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDetailsOneComponent } from './the-details-one.component';

describe('TheDetailsOneComponent', () => {
  let component: TheDetailsOneComponent;
  let fixture: ComponentFixture<TheDetailsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDetailsOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheDetailsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
