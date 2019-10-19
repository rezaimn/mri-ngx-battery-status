/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var MriNgxBatteryStatusComponent = /** @class */ (function () {
    function MriNgxBatteryStatusComponent() {
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
    MriNgxBatteryStatusComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /**
         * set border thick whether border was entered  of not
         */
        this.borderThickness = this.borderThickness ? this.borderThickness : (this.height / 10);
    };
    /**
     * set the body part styles
     */
    /**
     * set the body part styles
     * @return {?}
     */
    MriNgxBatteryStatusComponent.prototype.getBodyStyle = /**
     * set the body part styles
     * @return {?}
     */
    function () {
        return {
            height: this.height + "px",
            width: this.width + "px",
            border: this.borderThickness + "px solid " + this.batteryBorderColor,
            background: 'transparent',
            borderRadius: (this.borderRadius >= 0 ? this.borderRadius : (this.height / 5)) + "px",
            display: 'inline-block'
        };
    };
    /**
     * set the battery head part styles
     */
    /**
     * set the battery head part styles
     * @return {?}
     */
    MriNgxBatteryStatusComponent.prototype.getHeadStyle = /**
     * set the battery head part styles
     * @return {?}
     */
    function () {
        return {
            height: this.height / 2 + "px",
            width: this.width / 12 + "px",
            border: this.borderThickness + "px solid " + this.batteryBorderColor,
            background: "" + this.batteryBorderColor,
            borderRadius: (this.borderRadius >= 0 ? this.borderRadius : (this.height / 5)) + "px",
            display: 'inline-block',
            marginLeft: "-" + this.borderThickness + "px",
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            verticalAlign: 'middle',
            fontFamily: 'arial'
        };
    };
    /**
     * set the battery level part styles
     */
    /**
     * set the battery level part styles
     * @return {?}
     */
    MriNgxBatteryStatusComponent.prototype.getBatteryLevelStyle = /**
     * set the battery level part styles
     * @return {?}
     */
    function () {
        return {
            width: "calc( " + this.batteryLevel + "% - " + ((this.borderThickness) * 2) + "px )",
            height: this.height - (this.borderThickness * 2) + "px",
            lineHeight: this.height - (this.borderThickness * 2) + "px",
            marginLeft: this.borderThickness + "px",
            marginTop: this.borderThickness + "px",
            borderRadius: (this.borderRadius >= 0 ? this.borderRadius / 2 : (this.height / 5) / 2) + "px",
        };
    };
    /**
     * set the battery level text styles
     */
    /**
     * set the battery level text styles
     * @return {?}
     */
    MriNgxBatteryStatusComponent.prototype.getBatteryTextStyle = /**
     * set the battery level text styles
     * @return {?}
     */
    function () {
        return {
            fontSize: this.fontSize + "px",
            textAlign: 'center',
            color: "" + this.textColor,
            display: 'inline-block',
            width: this.width + "px",
            verticalAlign: 'middle'
        };
    };
    MriNgxBatteryStatusComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mri-ngx-battery-status',
                    template: "<div style=\"width: fit-content\">\n  <span [ngStyle]=\"getBodyStyle()\">\n    <div\n      [ngStyle]=\"getBatteryLevelStyle()\"\n      [ngClass]=\"{'battery-low': batteryLevel <= lowThreshold,'battery-mid':\n      batteryLevel > lowThreshold && batteryLevel < highThreshold,'battery-high':\n      batteryLevel >= highThreshold}\">\n      <span [ngStyle]=\"getBatteryTextStyle()\">\n        {{batteryLevel}} %\n      </span>\n    </div>\n  </span>\n  <span [ngStyle]=\"getHeadStyle()\"></span>\n</div>\n",
                    styles: [".battery-low{background-color:#ea2217}.battery-mid{background-color:#ff9b11}.battery-high{background-color:#06cb18}"]
                }] }
    ];
    /** @nocollapse */
    MriNgxBatteryStatusComponent.ctorParameters = function () { return []; };
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
    return MriNgxBatteryStatusComponent;
}());
export { MriNgxBatteryStatusComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXJpLW5neC1iYXR0ZXJ5LXN0YXR1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmktbmd4LWJhdHRlcnktc3RhdHVzLyIsInNvdXJjZXMiOlsibGliL21yaS1uZ3gtYmF0dGVyeS1zdGF0dXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUV2RDtJQStDRTs7OztRQXRDUyxXQUFNLEdBQUcsRUFBRSxDQUFDOzs7O1FBSVosVUFBSyxHQUFHLEdBQUcsQ0FBQzs7OztRQUlaLHVCQUFrQixHQUFHLE1BQU0sQ0FBQzs7OztRQUk1QixjQUFTLEdBQUcsTUFBTSxDQUFDOzs7O1FBSW5CLG9CQUFlLEdBQUcsQ0FBQyxDQUFDOzs7O1FBSXBCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7Ozs7UUFJbEIsYUFBUSxHQUFHLENBQUMsQ0FBQzs7OztRQUliLGtCQUFhLEdBQUcsRUFBRSxDQUFDOzs7O1FBSW5CLGlCQUFZLEdBQUcsRUFBRSxDQUFDOzs7O1FBSWxCLGlCQUFZLEdBQUcsR0FBRyxDQUFDO0lBRzVCLENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRTs7V0FFRztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFDRDs7T0FFRzs7Ozs7SUFDSCxtREFBWTs7OztJQUFaO1FBQ0UsT0FBTztZQUNMLE1BQU0sRUFBSyxJQUFJLENBQUMsTUFBTSxPQUFJO1lBQzFCLEtBQUssRUFBSyxJQUFJLENBQUMsS0FBSyxPQUFJO1lBQ3hCLE1BQU0sRUFBSyxJQUFJLENBQUMsZUFBZSxpQkFBWSxJQUFJLENBQUMsa0JBQW9CO1lBQ3BFLFVB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REFBNkI7Ozs7O0lBSTdCLG9EQUEyQjs7Ozs7SUFJM0IsZ0RBQXNCOzs7OztJQUl0QixxREFBNEI7Ozs7O0lBSTVCLG9EQUEyQjs7Ozs7SUFJM0Isb0RBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtcmktbmd4LWJhdHRlcnktc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21yaS1uZ3gtYmF0dGVyeS1zdGF0dXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tcmktbmd4LWJhdHRlcnktc3RhdHVzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNcmlOZ3hCYXR0ZXJ5U3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIGJhdHRlcnkgY29tcG9uZW50IGhlaWdodFxuICAgKi9cbiAgQElucHV0KCkgaGVpZ2h0ID0gMjA7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCB3aWR0aFxuICAgKi9cbiAgQElucHV0KCkgd2lkdGggPSAxMDA7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCBib3JkZXIgY29sb3JcbiAgICovXG4gIEBJbnB1dCgpIGJhdHRlcnlCb3JkZXJDb2xvciA9ICcjMjIyJztcbiAgLyoqXG4gICAqIGJhdHRlcnkgY29tcG9uZW50IHRleHQgY29sb3JcbiAgICovXG4gIEBJbnB1dCgpIHRleHRDb2xvciA9ICcjMjIyJztcbiAgLyoqXG4gICAqIGJhdHRlcnkgY29tcG9uZW50IGJvcmRlciB0aGlja25lc3NcbiAgICovXG4gIEBJbnB1dCgpIGJvcmRlclRoaWNrbmVzcyA9IDA7XG4gIC8qKlxuICAgKiBiYXR0ZXJ5IGNvbXBvbmVudCBib3JkZXIgcmFkaXVzXG4gICAqL1xuICBASW5wdXQoKSBib3JkZXJSYWRpdXMgPSAtMTtcbiAgLyoqXG4gICAqIGJhdHRlcnkgY29tcG9uZW50IHRleHQgZm9udCBzaXplXG4gICAqL1xuICBASW5wdXQoKSBmb250U2l6ZSA9IDg7XG4gIC8qKlxuICAgKiBzaG93cyB0aGUgcGVyY2VudGFnZSB0aGF0IHdlIGNvbnNpZGVyIHRoZSBiYXR0ZXJ5IGxldmVsIGlzIGhpZ2hcbiAgICovXG4gIEBJbnB1dCgpIGhpZ2hUaHJlc2hvbGQgPSA2NjtcbiAgLyoqXG4gICAqIHNob3dzIHRoZSBwZXJjZW50YWdlIHRoYXQgd2UgY29uc2lkZXIgdGhlIGJhdHRlcnkgbGV2ZWwgaXMgbG93XG4gICAqL1xuICBASW5wdXQoKSBsb3dUaHJlc2hvbGQgPSAzMztcbiAgLyoqXG4gICAqIHNob3dzIHRoZSBwZXJjZW50YWdlIG9mIGJhdHRlcnkgbGV2ZWxcbiAgICovXG4gIEBJbnB1dCgpIGJhdHRlcnlMZXZlbCA9IDEwMDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8qKlxuICAgICAqIHNldCBib3JkZXIgdGhpY2sgd2hldGhlciBib3JkZXIgd2FzIGVudGVyZWQgIG9mIG5vdFxuICAgICAqL1xuICAgIHRoaXMuYm9yZGVyVGhpY2tuZXNzID0gdGhpcy5ib3JkZXJUaGlja25lc3MgPyB0aGlzLmJvcmRlclRoaWNrbmVzcyA6ICh0aGlzLmhlaWdodCAvIDEwKTtcbiAgfVxuICAvKipcbiAgICogc2V0IHRoZSBib2R5IHBhcnQgc3R5bGVzXG4gICAqL1xuICBnZXRCb2R5U3R5bGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHR9cHhgLFxuICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgYm9yZGVyOiBgJHt0aGlzLmJvcmRlclRoaWNrbmVzc31weCBzb2xpZCAke3RoaXMuYmF0dGVyeUJvcmRlckNvbG9yfWAsXG4gICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyUmFkaXVzOiBgJHsodGhpcy5ib3JkZXJSYWRpdXMgPj0gMCA/IHRoaXMuYm9yZGVyUmFkaXVzIDogKHRoaXMuaGVpZ2h0IC8gNSkpfXB4YCxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogc2V0IHRoZSBiYXR0ZXJ5IGhlYWQgcGFydCBzdHlsZXNcbiAgICovXG4gIGdldEhlYWRTdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBgJHt0aGlzLmhlaWdodCAvIDJ9cHhgLFxuICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGggLyAxMn1weGAsXG4gICAgICBib3JkZXI6IGAke3RoaXMuYm9yZGVyVGhpY2tuZXNzfXB4IHNvbGlkICR7dGhpcy5iYXR0ZXJ5Qm9yZGVyQ29sb3J9YCxcbiAgICAgIGJhY2tncm91bmQ6IGAke3RoaXMuYmF0dGVyeUJvcmRlckNvbG9yfWAsXG4gICAgICBib3JkZXJSYWRpdXM6IGAkeyh0aGlzLmJvcmRlclJhZGl1cyA+PSAwID8gdGhpcy5ib3JkZXJSYWRpdXMgOiAodGhpcy5oZWlnaHQgLyA1KSl9cHhgLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBtYXJnaW5MZWZ0OiBgLSR7dGhpcy5ib3JkZXJUaGlja25lc3N9cHhgLFxuICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMCxcbiAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IDAsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdhcmlhbCdcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBzZXQgdGhlIGJhdHRlcnkgbGV2ZWwgcGFydCBzdHlsZXNcbiAgICovXG4gIGdldEJhdHRlcnlMZXZlbFN0eWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogYGNhbGMoICR7dGhpcy5iYXR0ZXJ5TGV2ZWx9JSAtICR7KCh0aGlzLmJvcmRlclRoaWNrbmVzcykgKiAyKX1weCApYCxcbiAgICAgIGhlaWdodDogYCR7dGhpcy5oZWlnaHQgLSAodGhpcy5ib3JkZXJUaGlja25lc3MgKiAyKX1weGAsXG4gICAgICBsaW5lSGVpZ2h0OiBgJHt0aGlzLmhlaWdodCAtICh0aGlzLmJvcmRlclRoaWNrbmVzcyAqIDIpfXB4YCxcbiAgICAgIG1hcmdpbkxlZnQ6IGAke3RoaXMuYm9yZGVyVGhpY2tuZXNzfXB4YCxcbiAgICAgIG1hcmdpblRvcDogYCR7dGhpcy5ib3JkZXJUaGlja25lc3N9cHhgLFxuICAgICAgYm9yZGVyUmFkaXVzOiBgJHsodGhpcy5ib3JkZXJSYWRpdXMgPj0gMCA/IHRoaXMuYm9yZGVyUmFkaXVzIC8gMiA6ICh0aGlzLmhlaWdodCAvIDUpIC8gMil9cHhgLFxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIHNldCB0aGUgYmF0dGVyeSBsZXZlbCB0ZXh0IHN0eWxlc1xuICAgKi9cbiAgZ2V0QmF0dGVyeVRleHRTdHlsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udFNpemU6IGAke3RoaXMuZm9udFNpemV9cHhgLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiBgJHt0aGlzLnRleHRDb2xvcn1gLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB3aWR0aDogYCR7dGhpcy53aWR0aH1weGAsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==