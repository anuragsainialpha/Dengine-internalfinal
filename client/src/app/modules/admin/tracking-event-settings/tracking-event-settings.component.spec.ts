import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { TrackingEventSettingsComponent } from './tracking-event-settings.component';

describe('TrackingEventSettingsComponent', () => {
  let component: TrackingEventSettingsComponent;
  let fixture: ComponentFixture<TrackingEventSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingEventSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingEventSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
