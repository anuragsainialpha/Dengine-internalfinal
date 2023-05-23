import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { LocationSettingsComponent } from './location-settings.component';

describe('LocationSettingsComponent', () => {
  let component: LocationSettingsComponent;
  let fixture: ComponentFixture<LocationSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
