import { OnInit } from '@angular/core';
export declare class MriNgxBatteryStatusComponent implements OnInit {
    /**
     * battery component height
     */
    height: number;
    /**
     * battery component width
     */
    width: number;
    /**
     * battery component border color
     */
    batteryBorderColor: string;
    /**
     * battery component text color
     */
    textColor: string;
    /**
     * battery component border thickness
     */
    borderThickness: number;
    /**
     * battery component border radius
     */
    borderRadius: number;
    /**
     * battery component text font size
     */
    fontSize: number;
    /**
     * shows the percentage that we consider the battery level is high
     */
    highThreshold: number;
    /**
     * shows the percentage that we consider the battery level is low
     */
    lowThreshold: number;
    /**
     * shows the percentage of battery level
     */
    batteryLevel: number;
    constructor();
    ngOnInit(): void;
    /**
     * set the body part styles
     */
    getBodyStyle(): {
        height: string;
        width: string;
        border: string;
        background: string;
        borderRadius: string;
        display: string;
    };
    /**
     * set the battery head part styles
     */
    getHeadStyle(): {
        height: string;
        width: string;
        border: string;
        background: string;
        borderRadius: string;
        display: string;
        marginLeft: string;
        borderBottomLeftRadius: number;
        borderTopLeftRadius: number;
        verticalAlign: string;
        fontFamily: string;
    };
    /**
     * set the battery level part styles
     */
    getBatteryLevelStyle(): {
        width: string;
        height: string;
        lineHeight: string;
        marginLeft: string;
        marginTop: string;
        borderRadius: string;
    };
    /**
     * set the battery level text styles
     */
    getBatteryTextStyle(): {
        fontSize: string;
        textAlign: string;
        color: string;
        display: string;
        width: string;
        verticalAlign: string;
    };
}
