import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MriNgxBatteryStatusComponent } from './mri-ngx-battery-status.component';

describe('MriNgxBatteryStatusComponent', () => {
  let component: MriNgxBatteryStatusComponent;
  let fixture: ComponentFixture<MriNgxBatteryStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MriNgxBatteryStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MriNgxBatteryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
