import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { LatLonComponent } from './lat-lon.component';

describe('LatLonComponent', () => {
  let component: LatLonComponent;
  let fixture: ComponentFixture<LatLonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LatLonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatLonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
