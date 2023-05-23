import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { TrackingEventComponent } from './tracking-event.component';

describe('TrackingEventComponent', () => {
  let component: TrackingEventComponent;
  let fixture: ComponentFixture<TrackingEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
