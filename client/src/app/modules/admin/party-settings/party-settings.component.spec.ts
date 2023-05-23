import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { PartySettingsComponent } from './party-settings.component';

describe('PartySettingsComponent', () => {
  let component: PartySettingsComponent;
  let fixture: ComponentFixture<PartySettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
