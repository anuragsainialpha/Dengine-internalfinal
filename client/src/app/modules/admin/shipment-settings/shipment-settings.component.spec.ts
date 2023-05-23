import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { ShipmentSettingsComponent } from './shipment-settings.component';

describe('ShipmentSettingsComponent', () => {
  let component: ShipmentSettingsComponent;
  let fixture: ComponentFixture<ShipmentSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
