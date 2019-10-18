# MriNgxBatteryStatus

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

This library src is available on [GitHub](https://github.com/rezaimn/mri-ngx-battery-status).

## Installing

     npm i mri-ngx-battery-status --save

## Quickstart
Import mri-ngx-battery-status module in Angular app.
     
     import {MriNgxBatteryStatusModule} from 'mri-ngx-battery-status';

     @NgModule({
       (...)
       imports: [
         MriNgxBatteryStatusModule
       ]
       (...)
     })

##Usage

     <mri-ngx-battery-status
             [height]="20"
             [width]="50"
             [batteryLevel]="79"
             [highThreshold]="66"
             [lowThreshold]="33"
             [batteryBorderColor]="'#000000'"
             [borderRadius]="4"
             [borderThickness]="2"
             [fontSize]="10"
             [textColor]="'#000000'">
     </mri-ngx-battery-status>
     

| input | type | description |
| ------ | ------ | ------ |
| height | number | it sets the component height
| width | number | it sets the component width
| batteryLevel | number | it sets the battery level and it must be between 0 and 100
| highThreshold | number | it sets the percentage that we consider the battery level is high
| lowThreshold | number | it sets the percentage that we consider the battery level is low
| batteryBorderColor | string | it sets the battery border color
| borderRadius | number | it sets the border radius
| borderThickness | number | it sets the battery border thickness
| fontSize | number | it sets the battery level text font size
| textColor | string | it sets battery level text color

Run `ng generate component component-name --project mri-ngx-battery-status` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project mri-ngx-battery-status`.
> Note: Don't forget to add `--project mri-ngx-battery-status` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build mri-ngx-battery-status` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build mri-ngx-battery-status`, go to the dist folder `cd dist/mri-ngx-battery-status` and run `npm publish`.

## Running unit tests

Run `ng test mri-ngx-battery-status` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
