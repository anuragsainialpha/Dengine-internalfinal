import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { DistanceTimeComponent } from './distance-time.component';

describe('DistanceTimeComponent', () => {
  let component: DistanceTimeComponent;
  let fixture: ComponentFixture<DistanceTimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
