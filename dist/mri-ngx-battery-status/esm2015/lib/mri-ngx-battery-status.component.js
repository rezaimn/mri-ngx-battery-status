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
                selector: 'lib-mri-ngx-battery-status',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJpLW5neC1iYXR0ZXJ5LXN0YXR1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmktbmd4LWJhdHRlcnktc3RhdHVzLyIsInNvdXJjZXMiOlsibGliL21yaS1uZ3gtYmF0dGVyeS1zdGF0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQU92RCxNQUFNLE9BQU8sNEJBQTRCO0lBMEN2Qzs7OztRQXRDUyxXQUFNLEdBQUcsRUFBRSxDQUFDOzs7O1FBSVosVUFBSyxHQUFHLEdBQUcsQ0FBQzs7OztRQUlaLHVCQUFrQixHQUFHLE1BQU0sQ0FBQzs7OztRQUk1QixjQUFTLEdBQUcsTUFBTSxDQUFDOzs7O1FBSW5CLG9CQUFlLEdBQUcsQ0FBQyxDQUFDOzs7O1FBSXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7UUFJbEIsYUFBUSxHQUFHLENBQUMsQ0FBQzs7OztRQUliLGtCQUFhLEdBQUcsRUFBRSxDQUFDOzs7O1FBSW5CLGlCQUFZLEdBQUcsRUFBRSxDQUFDOzs7O1FBSWxCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO0lBRzVCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ047O1dBRUc7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7OztJQUlELFlBQVk7UUFDVixPQUFPO1lBQ0wsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSTtZQUMxQixLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJO1lBQ3hCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLFlBQVksSUFBSSxDQUFDLGtCQUFrQixFQUFF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c0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXJpLW5neC1iYXR0ZXJ5LXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9tcmktbmd4LWJhdHRlcnktc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXJpLW5neC1iYXR0ZXJ5LXN0YXR1cy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXJpTmd4QmF0dGVyeVN0YXR1c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCBoZWlnaHRcbiAgICovXG4gIEBJbnB1dCgpIGhlaWdodCA9IDIwO1xuICAvKipcbiAgICogYmF0dGVyeSBjb21wb25lbnQgd2lkdGhcbiAgICovXG4gIEBJbnB1dCgpIHdpZHRoID0gMTAwO1xuICAvKipcbiAgICogYmF0dGVyeSBjb21wb25lbnQgYm9yZGVyIGNvbG9yXG4gICAqL1xuICBASW5wdXQoKSBiYXR0ZXJ5Qm9yZGVyQ29sb3IgPSAnIzIyMic7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCB0ZXh0IGNvbG9yXG4gICAqL1xuICBASW5wdXQoKSB0ZXh0Q29sb3IgPSAnIzIyMic7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCBib3JkZXIgdGhpY2tuZXNzXG4gICAqL1xuICBASW5wdXQoKSBib3JkZXJUaGlja25lc3MgPSAwO1xuICAvKipcbiAgICogYmF0dGVyeSBjb21wb25lbnQgYm9yZGVyIHJhZGl1c1xuICAgKi9cbiAgQElucHV0KCkgYm9yZGVyUmFkaXVzID0gLTE7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCB0ZXh0IGZvbnQgc2l6ZVxuICAgKi9cbiAgQElucHV0KCkgZm9udFNpemUgPSA4O1xuICAvKipcbiAgICogc2hvd3MgdGhlIHBlcmNlbnRhZ2UgdGhhdCB3ZSBjb25zaWRlciB0aGUgYmF0dGVyeSBsZXZlbCBpcyBoaWdoXG4gICAqL1xuICBASW5wdXQoKSBoaWdoVGhyZXNob2xkID0gNjY7XG4gIC8qKlxuICAgKiBzaG93cyB0aGUgcGVyY2VudGFnZSB0aGF0IHdlIGNvbnNpZGVyIHRoZSBiYXR0ZXJ5IGxldmVsIGlzIGxvd1xuICAgKi9cbiAgQElucHV0KCkgbG93VGhyZXNob2xkID0gMzM7XG4gIC8qKlxuICAgKiBzaG93cyB0aGUgcGVyY2VudGFnZSBvZiBiYXR0ZXJ5IGxldmVsXG4gICAqL1xuICBASW5wdXQoKSBiYXR0ZXJ5TGV2ZWwgPSAxMDA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvKipcbiAgICAgKiBzZXQgYm9yZGVyIHRoaWNrIHdoZXRoZXIgYm9yZGVyIHdhcyBlbnRlcmVkICBvZiBub3RcbiAgICAgKi9cbiAgICB0aGlzLmJvcmRlclRoaWNrbmVzcyA9IHRoaXMuYm9yZGVyVGhpY2tuZXNzID8gdGhpcy5ib3JkZXJUaGlja25lc3MgOiAodGhpcy5oZWlnaHQgLyAxMCk7XG4gIH1cbiAgLyoqXG4gICAqIHNldCB0aGUgYm9keSBwYXJ0IHN0eWxlc1xuICAgKi9cbiAgZ2V0Qm9keVN0eWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0fXB4YCxcbiAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgIGJvcmRlcjogYCR7dGhpcy5ib3JkZXJUaGlja25lc3N9cHggc29saWQgJHt0aGlzLmJhdHRlcnlCb3JkZXJDb2xvcn1gLFxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJvcmRlclJhZGl1czogYCR7KHRoaXMuYm9yZGVyUmFkaXVzID49IDAgPyB0aGlzLmJvcmRlclJhZGl1cyA6ICh0aGlzLmhlaWdodCAvIDUpKX1weGAsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIHNldCB0aGUgYmF0dGVyeSBoZWFkIHBhcnQgc3R5bGVzXG4gICAqL1xuICBnZXRIZWFkU3R5bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHQgLyAyfXB4YCxcbiAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRoIC8gMTB9cHhgLFxuICAgICAgYm9yZGVyOiBgJHt0aGlzLmJvcmRlclRoaWNrbmVzc31weCBzb2xpZCAke3RoaXMuYmF0dGVyeUJvcmRlckNvbG9yfWAsXG4gICAgICBiYWNrZ3JvdW5kOiBgJHt0aGlzLmJhdHRlcnlCb3JkZXJDb2xvcn1gLFxuICAgICAgYm9yZGVyUmFkaXVzOiBgJHsodGhpcy5ib3JkZXJSYWRpdXMgPj0gMCA/IHRoaXMuYm9yZGVyUmFkaXVzIDogKHRoaXMuaGVpZ2h0IC8gNSkpfXB4YCxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogYC0ke3RoaXMuYm9yZGVyVGhpY2tuZXNzfXB4YCxcbiAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDAsXG4gICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IGAkeyh0aGlzLmhlaWdodCAvIDQpICsgKHRoaXMuYm9yZGVyVGhpY2tuZXNzICogOCl9cHhgXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogc2V0IHRoZSBiYXR0ZXJ5IGxldmVsIHBhcnQgc3R5bGVzXG4gICAqL1xuICBnZXRCYXR0ZXJ5TGV2ZWxTdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGBjYWxjKCAke3RoaXMuYmF0dGVyeUxldmVsfSUgLSAkeygodGhpcy5ib3JkZXJUaGlja25lc3MpICogMil9cHggKWAsXG4gICAgICBoZWlnaHQ6IGAke3RoaXMuaGVpZ2h0IC0gKHRoaXMuYm9yZGVyVGhpY2tuZXNzICogMil9cHhgLFxuICAgICAgbGluZUhlaWdodDogYCR7dGhpcy5oZWlnaHQgLSAodGhpcy5ib3JkZXJUaGlja25lc3MgKiAyKX1weGAsXG4gICAgICBtYXJnaW5MZWZ0OiBgJHt0aGlzLmJvcmRlclRoaWNrbmVzc31weGAsXG4gICAgICBtYXJnaW5Ub3A6IGAke3RoaXMuYm9yZGVyVGhpY2tuZXNzfXB4YFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIHNldCB0aGUgYmF0dGVyeSBsZXZlbCB0ZXh0IHN0eWxlc1xuICAgKi9cbiAgZ2V0QmF0dGVyeVRleHRTdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udFNpemU6IGAke3RoaXMuZm9udFNpemV9cHhgLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiBgJHt0aGlzLnRleHRDb2xvcn1gLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB3aWR0aDogYCR7dGhpcy53aWR0aH1weGAsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==