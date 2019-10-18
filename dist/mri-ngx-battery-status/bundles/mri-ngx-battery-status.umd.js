(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('mri-ngx-battery-status', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['mri-ngx-battery-status'] = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MriNgxBatteryStatusService = /** @class */ (function () {
        function MriNgxBatteryStatusService() {
        }
        MriNgxBatteryStatusService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MriNgxBatteryStatusService.ctorParameters = function () { return []; };
        /** @nocollapse */ MriNgxBatteryStatusService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MriNgxBatteryStatusService_Factory() { return new MriNgxBatteryStatusService(); }, token: MriNgxBatteryStatusService, providedIn: "root" });
        return MriNgxBatteryStatusService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                width: this.width / 10 + "px",
                border: this.borderThickness + "px solid " + this.batteryBorderColor,
                background: "" + this.batteryBorderColor,
                borderRadius: (this.borderRadius >= 0 ? this.borderRadius : (this.height / 5)) + "px",
                display: 'inline-block',
                marginLeft: "-" + this.borderThickness + "px",
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                position: 'absolute',
                top: (this.height / 4) + (this.borderThickness * 8) + "px"
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
                marginTop: this.borderThickness + "px"
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
            { type: core.Component, args: [{
                        selector: 'lib-mri-ngx-battery-status',
                        template: "<div style=\"width: fit-content\">\n  <span [ngStyle]=\"getBodyStyle()\">\n    <div\n      [ngStyle]=\"getBatteryLevelStyle()\"\n      [ngClass]=\"{'battery-low': batteryLevel <= lowThreshold,'battery-mid':\n      batteryLevel > lowThreshold && batteryLevel < highThreshold,'battery-high':\n      batteryLevel >= highThreshold}\">\n      <span [ngStyle]=\"getBatteryTextStyle()\">\n        {{batteryLevel}} %\n      </span>\n    </div>\n  </span>\n  <span [ngStyle]=\"getHeadStyle()\"></span>\n</div>\n",
                        styles: [".battery-low{background-color:#ea2217}.battery-mid{background-color:#ffa108}.battery-high{background-color:#06cb18}"]
                    }] }
        ];
        /** @nocollapse */
        MriNgxBatteryStatusComponent.ctorParameters = function () { return []; };
        MriNgxBatteryStatusComponent.propDecorators = {
            height: [{ type: core.Input }],
            width: [{ type: core.Input }],
            batteryBorderColor: [{ type: core.Input }],
            textColor: [{ type: core.Input }],
            borderThickness: [{ type: core.Input }],
            borderRadius: [{ type: core.Input }],
            fontSize: [{ type: core.Input }],
            highThreshold: [{ type: core.Input }],
            lowThreshold: [{ type: core.Input }],
            batteryLevel: [{ type: core.Input }]
        };
        return MriNgxBatteryStatusComponent;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MriNgxBatteryStatusModule = /** @class */ (function () {
        function MriNgxBatteryStatusModule() {
        }
        MriNgxBatteryStatusModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MriNgxBatteryStatusComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [MriNgxBatteryStatusComponent]
                    },] }
        ];
        return MriNgxBatteryStatusModule;
    }());

    exports.MriNgxBatteryStatusComponent = MriNgxBatteryStatusComponent;
    exports.MriNgxBatteryStatusModule = MriNgxBatteryStatusModule;
    exports.MriNgxBatteryStatusService = MriNgxBatteryStatusService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mri-ngx-battery-status.umd.js.map
