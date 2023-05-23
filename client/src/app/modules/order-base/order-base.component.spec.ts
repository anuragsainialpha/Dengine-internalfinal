import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { OrderBaseComponent } from './order-base.component';

describe('OrderBaseComponent', () => {
  let component: OrderBaseComponent;
  let fixture: ComponentFixture<OrderBaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
