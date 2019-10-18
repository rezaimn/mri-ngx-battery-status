import { TestBed } from '@angular/core/testing';

import { MriNgxBatteryStatusService } from './mri-ngx-battery-status.service';

describe('MriNgxBatteryStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MriNgxBatteryStatusService = TestBed.get(MriNgxBatteryStatusService);
    expect(service).toBeTruthy();
  });
});
