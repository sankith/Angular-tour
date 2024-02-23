import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleVisitingplacesComponent } from './schedule-visitingplaces.component';

describe('ScheduleVisitingplacesComponent', () => {
  let component: ScheduleVisitingplacesComponent;
  let fixture: ComponentFixture<ScheduleVisitingplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleVisitingplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleVisitingplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
