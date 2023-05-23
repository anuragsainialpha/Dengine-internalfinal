import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { TransactionSettingsComponent } from './transaction-settings.component';

describe('TransactionSettingsComponent', () => {
  let component: TransactionSettingsComponent;
  let fixture: ComponentFixture<TransactionSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
