import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursDetailsComponent } from './tours-details.component';

describe('ToursDetailsComponent', () => {
  let component: ToursDetailsComponent;
  let fixture: ComponentFixture<ToursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToursDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
