import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { OrderBaseSettingsComponent } from './order-base-settings.component';

describe('OrderBaseSettingsComponent', () => {
  let component: OrderBaseSettingsComponent;
  let fixture: ComponentFixture<OrderBaseSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBaseSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBaseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
