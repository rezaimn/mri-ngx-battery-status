import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-mri-ngx-battery-status',
  templateUrl: './mri-ngx-battery-status.component.html',
  styleUrls: ['./mri-ngx-battery-status.component.css']
})
export class MriNgxBatteryStatusComponent implements OnInit {
  /**
   * battery component height
   */
  @Input() height = 20;
  /**
   * battery component width
   */
  @Input() width = 100;
  /**
   * battery component border color
   */
  @Input() batteryBorderColor = '#222';
  /**
   * battery component text color
   */
  @Input() textColor = '#222';
  /**
   * battery component border thickness
   */
  @Input() borderThickness = 0;
  /**
   * battery component border radius
   */
  @Input() borderRadius = -1;
  /**
   * battery component text font size
   */
  @Input() fontSize = 8;
  /**
   * shows the percentage that we consider the battery level is high
   */
  @Input() highThreshold = 66;
  /**
   * shows the percentage that we consider the battery level is low
   */
  @Input() lowThreshold = 33;
  /**
   * shows the percentage of battery level
   */
  @Input() batteryLevel = 100;

  constructor() {
  }

  ngOnInit() {
    /**
     * set border thick whether border was entered  of not
     */
    this.borderThickness = this.borderThickness ? this.borderThickness : (this.height / 10);
  }
  /**
   * set the body part styles
   */
  getBodyStyle() {
    return {
      height: `${this.height}px`,
      width: `${this.width}px`,
      border: `${this.borderThickness}px solid ${this.batteryBorderColor}`,
      background: 'transparent',
      borderRadius: `${(this.borderRadius >= 0 ? this.borderRadius : (this.height / 5))}px`,
      display: 'inline-block'
    };
  }
  /**
   * set the battery head part styles
   */
  getHeadStyle() {
    return {
      height: `${this.height / 2}px`,
      width: `${this.width / 10}px`,
      border: `${this.borderThickness}px solid ${this.batteryBorderColor}`,
      background: `${this.batteryBorderColor}`,
      borderRadius: `${(this.borderRadius >= 0 ? this.borderRadius : (this.height / 5))}px`,
      display: 'inline-block',
      marginLeft: `-${this.borderThickness}px`,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      position: 'absolute',
      top: `${(this.height / 4) + (this.borderThickness * 8)}px`
    };
  }
  /**
   * set the battery level part styles
   */
  getBatteryLevelStyle() {
    return {
      width: `calc( ${this.batteryLevel}% - ${((this.borderThickness) * 2)}px )`,
      height: `${this.height - (this.borderThickness * 2)}px`,
      lineHeight: `${this.height - (this.borderThickness * 2)}px`,
      marginLeft: `${this.borderThickness}px`,
      marginTop: `${this.borderThickness}px`
    };
  }
  /**
   * set the battery level text styles
   */
  getBatteryTextStyle() {
    return {
      fontSize: `${this.fontSize}px`,
      textAlign: 'center',
      color: `${this.textColor}`,
      display: 'inline-block',
      width: `${this.width}px`,
      verticalAlign: 'middle'
    };
  }
}
