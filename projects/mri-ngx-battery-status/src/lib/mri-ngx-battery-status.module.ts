import { NgModule } from '@angular/core';
import { MriNgxBatteryStatusComponent } from './mri-ngx-battery-status.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [MriNgxBatteryStatusComponent],
  imports: [
    CommonModule
  ],
  exports: [MriNgxBatteryStatusComponent]
})
export class MriNgxBatteryStatusModule { }
