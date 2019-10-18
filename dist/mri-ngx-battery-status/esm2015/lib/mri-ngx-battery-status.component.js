/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class MriNgxBatteryStatusComponent {
    constructor() {
        /**
         * battery component height
         */
        this.height = 20;
        /**
         * battery component width
         */
        this.width = 100;
        /**
         * battery component border color
         */
        this.batteryBorderColor = '#222';
        /**
         * battery component text color
         */
        this.textColor = '#222';
        /**
         * battery component border thickness
         */
        this.borderThickness = 0;
        /**
         * battery component border radius
         */
        this.borderRadius = -1;
        /**
         * battery component text font size
         */
        this.fontSize = 8;
        /**
         * shows the percentage that we consider the battery level is high
         */
        this.highThreshold = 66;
        /**
         * shows the percentage that we consider the battery level is low
         */
        this.lowThreshold = 33;
        /**
         * shows the percentage of battery level
         */
        this.batteryLevel = 100;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**
         * set border thick whether border was entered  of not
         */
        this.borderThickness = this.borderThickness ? this.borderThickness : (this.height / 10);
    }
    /**
     * set the body part styles
     * @return {?}
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
     * @return {?}
     */
    getHeadStyle() {
        return {
            height: `${this.height / 2}px`,
            width: `${this.width / 12}px`,
            border: `${this.borderThickness}px solid ${this.batteryBorderColor}`,
            background: `${this.batteryBorderColor}`,
            borderRadius: `${(this.borderRadius >= 0 ? this.borderRadius : (this.height / 5))}px`,
            display: 'inline-block',
            marginLeft: `-${this.borderThickness}px`,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            verticalAlign: 'middle'
        };
    }
    /**
     * set the battery level part styles
     * @return {?}
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
     * @return {?}
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
MriNgxBatteryStatusComponent.decorators = [
    { type: Component, args: [{
                selector: 'mri-ngx-battery-status',
                template: "<div style=\"width: fit-content\">\n  <span [ngStyle]=\"getBodyStyle()\">\n    <div\n      [ngStyle]=\"getBatteryLevelStyle()\"\n      [ngClass]=\"{'battery-low': batteryLevel <= lowThreshold,'battery-mid':\n      batteryLevel > lowThreshold && batteryLevel < highThreshold,'battery-high':\n      batteryLevel >= highThreshold}\">\n      <span [ngStyle]=\"getBatteryTextStyle()\">\n        {{batteryLevel}} %\n      </span>\n    </div>\n  </span>\n  <span [ngStyle]=\"getHeadStyle()\"></span>\n</div>\n",
                styles: [".battery-low{background-color:#ea2217}.battery-mid{background-color:#ffa108}.battery-high{background-color:#06cb18}"]
            }] }
];
/** @nocollapse */
MriNgxBatteryStatusComponent.ctorParameters = () => [];
MriNgxBatteryStatusComponent.propDecorators = {
    height: [{ type: Input }],
    width: [{ type: Input }],
    batteryBorderColor: [{ type: Input }],
    textColor: [{ type: Input }],
    borderThickness: [{ type: Input }],
    borderRadius: [{ type: Input }],
    fontSize: [{ type: Input }],
    highThreshold: [{ type: Input }],
    lowThreshold: [{ type: Input }],
    batteryLevel: [{ type: Input }]
};
if (false) {
    /**
     * battery component height
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.height;
    /**
     * battery component width
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.width;
    /**
     * battery component border color
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.batteryBorderColor;
    /**
     * battery component text color
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.textColor;
    /**
     * battery component border thickness
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.borderThickness;
    /**
     * battery component border radius
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.borderRadius;
    /**
     * battery component text font size
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.fontSize;
    /**
     * shows the percentage that we consider the battery level is high
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.highThreshold;
    /**
     * shows the percentage that we consider the battery level is low
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.lowThreshold;
    /**
     * shows the percentage of battery level
     * @type {?}
     */
    MriNgxBatteryStatusComponent.prototype.batteryLevel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJpLW5neC1iYXR0ZXJ5LXN0YXR1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmktbmd4LWJhdHRlcnktc3RhdHVzLyIsInNvdXJjZXMiOlsibGliL21yaS1uZ3gtYmF0dGVyeS1zdGF0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQU92RCxNQUFNLE9BQU8sNEJBQTRCO0lBMEN2Qzs7OztRQXRDUyxXQUFNLEdBQUcsRUFBRSxDQUFDOzs7O1FBSVosVUFBSyxHQUFHLEdBQUcsQ0FBQzs7OztRQUlaLHVCQUFrQixHQUFHLE1BQU0sQ0FBQzs7OztRQUk1QixjQUFTLEdBQUcsTUFBTSxDQUFDOzs7O1FBSW5CLG9CQUFlLEdBQUcsQ0FBQyxDQUFDOzs7O1FBSXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7UUFJbEIsYUFBUSxHQUFHLENBQUMsQ0FBQzs7OztRQUliLGtCQUFhLEdBQUcsRUFBRSxDQUFDOzs7O1FBSW5CLGlCQUFZLEdBQUcsRUFBRSxDQUFDOzs7O1FBSWxCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO0lBRzVCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ047O1dBRUc7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7OztJQUlELFlBQVk7UUFDVixPQUFPO1lBQ0wsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSTtZQUMxQixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJO1lBQ3hCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLFlBQVksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BFLFVBQVUsRUFBRSxhQUFhO1lBQ3pCLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JGLE9BQU8sRUFBRSxjQUFjO1NBQ3hCLENBQUM7SUFDSixDQUFDOzs7OztJQUlELFlBQVk7UUFDVixPQUFPO1lBQ0wsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUk7WUFDOUIsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLElBQUk7WUFDN0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsWUFBWSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDcEUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3hDLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ3JGLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUk7WUFDeEMsc0JBQXNCLEVBQUUsQ0FBQztZQUN6QixtQkFBbUIsRUFBRSxDQUFDO1lBQ3RCLGFBQWEsRUFBRSxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDOzs7OztJQUlELG9CQUFvQjtRQUNsQixPQUFPO1lBQ0wsS0FBSyxFQUFFLFNBQVMsSUFBSSxDQUFDLFlBQVksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNO1lBQzFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJO1lBQ3ZELFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJO1lBQzNELFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUk7WUFDdkMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSTtTQUN2QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFJRCxtQkFBbUI7UUFDakIsT0FBTztZQUNMLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUk7WUFDOUIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQixPQUFPLEVBQUUsY0FBYztZQUN2QixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJO1lBQ3hCLGFBQWEsRUFBRSxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDOzs7WUE5R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLGtnQkFBc0Q7O2FBRXZEOzs7OztxQkFLRSxLQUFLO29CQUlMLEtBQUs7aUNBSUwsS0FBSzt3QkFJTCxLQUFLOzhCQUlMLEtBQUs7MkJBSUwsS0FBSzt1QkFJTCxLQUFLOzRCQUlMLEtBQUs7MkJBSUwsS0FBSzsyQkFJTCxLQUFLOzs7Ozs7O0lBcENOLDhDQUFxQjs7Ozs7SUFJckIsNkNBQXFCOzs7OztJQUlyQiwwREFBcUM7Ozs7O0lBSXJDLGlEQUE0Qjs7Ozs7SUFJNUIsdURBQTZCOzs7OztJQUk3QixvREFBMkI7Ozs7O0lBSTNCLGdEQUFzQjs7Ozs7SUFJdEIscURBQTRCOzs7OztJQUk1QixvREFBMkI7Ozs7O0lBSTNCLG9EQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXJpLW5neC1iYXR0ZXJ5LXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmktbmd4LWJhdHRlcnktc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJpLW5neC1iYXR0ZXJ5LXN0YXR1cy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXJpTmd4QmF0dGVyeVN0YXR1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCBoZWlnaHRcbiAgICovXG4gIEBJbnB1dCgpIGhlaWdodCA9IDIwO1xuICAvKipcbiAgICogYmF0dGVyeSBjb21wb25lbnQgd2lkdGhcbiAgICovXG4gIEBJbnB1dCgpIHdpZHRoID0gMTAwO1xuICAvKipcbiAgICogYmF0dGVyeSBjb21wb25lbnQgYm9yZGVyIGNvbG9yXG4gICAqL1xuICBASW5wdXQoKSBiYXR0ZXJ5Qm9yZGVyQ29sb3IgPSAnIzIyMic7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCB0ZXh0IGNvbG9yXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0Q29sb3IgPSAnIzIyMic7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCBib3JkZXIgdGhpY2tuZXNzXG4gICAqL1xuICBASW5wdXQoKSBib3JkZXJUaGlja25lc3MgPSAwO1xuICAvKipcbiAgICogYmF0dGVyeSBjb21wb25lbnQgYm9yZGVyIHJhZGl1c1xuICAgKi9cbiAgQElucHV0KCkgYm9yZGVyUmFkaXVzID0gLTE7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCB0ZXh0IGZvbnQgc2l6ZVxuICAgKi9cbiAgQElucHV0KCkgZm9udFNpemUgPSA4O1xuICAvKipcbiAgICogc2hvd3MgdGhlIHBlcmNlbnRhZ2UgdGhhdCB3ZSBjb25zaWRlciB0aGUgYmF0dGVyeSBsZXZlbCBpcyBoaWdoXG4gICAqL1xuICBASW5wdXQoKSBoaWdoVGhyZXNob2xkID0gNjY7XG4gIC8qKlxuICAgKiBzaG93cyB0aGUgcGVyY2VudGFnZSB0aGF0IHdlIGNvbnNpZGVyIHRoZSBiYXR0ZXJ5IGxldmVsIGlzIGxvd1xuICAgKi9cbiAgQElucHV0KCkgbG93VGhyZXNob2xkID0gMzM7XG4gIC8qKlxuICAgKiBzaG93cyB0aGUgcGVyY2VudGFnZSBvZiBiYXR0ZXJ5IGxldmVsXG4gICAqL1xuICBASW5wdXQoKSBiYXR0ZXJ5TGV2ZWwgPSAxMDA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKipcbiAgICAgKiBzZXQgYm9yZGVyIHRoaWNrIHdoZXRoZXIgYm9yZGVyIHdhcyBlbnRlcmVkICBvZiBub3RcbiAgICAgKi9cbiAgICB0aGlzLmJvcmRlclRoaWNrbmVzcyA9IHRoaXMuYm9yZGVyVGhpY2tuZXNzID8gdGhpcy5ib3JkZXJUaGlja25lc3MgOiAodGhpcy5oZWlnaHQgLyAxMCk7XG4gIH1cbiAgLyoqXG4gICAqIHNldCB0aGUgYm9keSBwYXJ0IHN0eWxlc1xuICAgKi9cbiAgZ2V0Qm9keVN0eWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcbiAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgIGJvcmRlcjogYCR7dGhpcy5ib3JkZXJUaGlja25lc3N9cHggc29saWQgJHt0aGlzLmJhdHRlcnlCb3JkZXJDb2xvcn1gLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlclJhZGl1czogYCR7KHRoaXMuYm9yZGVyUmFkaXVzID49IDAgPyB0aGlzLmJvcmRlclJhZGl1cyA6ICh0aGlzLmhlaWdodCAvIDUpKX1weGAsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIHNldCB0aGUgYmF0dGVyeSBoZWFkIHBhcnQgc3R5bGVzXG4gICAqL1xuICBnZXRIZWFkU3R5bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHQgLyAyfXB4YCxcbiAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRoIC8gMTJ9cHhgLFxuICAgICAgYm9yZGVyOiBgJHt0aGlzLmJvcmRlclRoaWNrbmVzc31weCBzb2xpZCAke3RoaXMuYmF0dGVyeUJvcmRlckNvbG9yfWAsXG4gICAgICBiYWNrZ3JvdW5kOiBgJHt0aGlzLmJhdHRlcnlCb3JkZXJDb2xvcn1gLFxuICAgICAgYm9yZGVyUmFkaXVzOiBgJHsodGhpcy5ib3JkZXJSYWRpdXMgPj0gMCA/IHRoaXMuYm9yZGVyUmFkaXVzIDogKHRoaXMuaGVpZ2h0IC8gNSkpfXB4YCxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogYC0ke3RoaXMuYm9yZGVyVGhpY2tuZXNzfXB4YCxcbiAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDAsXG4gICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAwLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBzZXQgdGhlIGJhdHRlcnkgbGV2ZWwgcGFydCBzdHlsZXNcbiAgICovXG4gIGdldEJhdHRlcnlMZXZlbFN0eWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogYGNhbGMoICR7dGhpcy5iYXR0ZXJ5TGV2ZWx9JSAtICR7KCh0aGlzLmJvcmRlclRoaWNrbmVzcykgKiAyKX1weCApYCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHQgLSAodGhpcy5ib3JkZXJUaGlja25lc3MgKiAyKX1weGAsXG4gICAgICBsaW5lSGVpZ2h0OiBgJHt0aGlzLmhlaWdodCAtICh0aGlzLmJvcmRlclRoaWNrbmVzcyAqIDIpfXB4YCxcbiAgICAgIG1hcmdpbkxlZnQ6IGAke3RoaXMuYm9yZGVyVGhpY2tuZXNzfXB4YCxcbiAgICAgIG1hcmdpblRvcDogYCR7dGhpcy5ib3JkZXJUaGlja25lc3N9cHhgXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogc2V0IHRoZSBiYXR0ZXJ5IGxldmVsIHRleHQgc3R5bGVzXG4gICAqL1xuICBnZXRCYXR0ZXJ5VGV4dFN0eWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb250U2l6ZTogYCR7dGhpcy5mb250U2l6ZX1weGAsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY29sb3I6IGAke3RoaXMudGV4dENvbG9yfWAsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgfTtcbiAgfVxufVxuIl19