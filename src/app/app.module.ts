import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MriNgxBatteryStatusModule} from '../../projects/mri-ngx-battery-status/src/lib/mri-ngx-battery-status.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MriNgxBatteryStatusModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
